#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IMAGES_DIR = path.join(ROOT, "public", "images");
const META_PATH = path.join(IMAGES_DIR, "image-attribution.json");

const IMAGE_TARGETS = [
  { file: "main-hero.jpg", query: "currency exchange office customer service desk", orientation: "landscape" },
  { file: "support-desk.jpg", query: "financial advisor discussing transfer documents office", orientation: "landscape" },
  { file: "hero-exchange.jpg", query: "currency exchange financial consultation office modern", orientation: "landscape" },
  { file: "service-banner.jpg", query: "international remittance and currency exchange concept", orientation: "landscape" },

  { file: "localcurrencyExchange.jpg", query: "foreign currency cash exchange counter", orientation: "landscape" },
  { file: "international-money.jpg", query: "international wire transfer online banking concept", orientation: "landscape" },
  { file: "medical-transfer.jpg", query: "hospital payment desk medical billing consultation", orientation: "landscape" },
  { file: "study-abroad.jpg", query: "student tuition payment university administration office", orientation: "landscape" },
  { file: "tourism-transfer.jpg", query: "travel money exchange passport and trip planning", orientation: "landscape" },
  { file: "corporate-transfer.jpg", query: "corporate finance team international business payments", orientation: "landscape" },

  { file: "service-local.jpg", query: "currency exchange service desk close up", orientation: "landscape" },
  { file: "service-international.jpg", query: "cross border payment and global transfer business", orientation: "landscape" },
  { file: "service-medical.jpg", query: "medical expense payment hospital finance support", orientation: "landscape" },
  { file: "service-study.jpg", query: "college tuition payment and student financial services", orientation: "landscape" },
  { file: "service-tourism.jpg", query: "travel remittance and foreign exchange for tourists", orientation: "landscape" },
  { file: "service-corporate.jpg", query: "enterprise treasury and international supplier payments", orientation: "landscape" },

  { file: "about-office.jpg", query: "professional finance office team meeting", orientation: "landscape" },
  { file: "contact-office.jpg", query: "customer support office front desk business", orientation: "landscape" },
  { file: "compliance-security.jpg", query: "financial compliance cyber security and data protection", orientation: "landscape" },
];

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "for",
  "with",
  "the",
  "to",
  "of",
  "in",
  "on",
  "by",
  "from",
  "at",
  "is",
  "are",
  "be",
]);

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const content = fs.readFileSync(filePath, "utf8");
  const entries = {};

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const separator = line.indexOf("=");
    if (separator < 0) {
      continue;
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
    entries[key] = value;
  }

  return entries;
}

function getEnvValue(key, envPools) {
  for (const pool of envPools) {
    if (pool[key]) {
      return pool[key];
    }
  }
  return "";
}

function loadApiKeys() {
  const envLocal = parseEnvFile(path.join(ROOT, ".env.local"));
  const envFile = parseEnvFile(path.join(ROOT, ".env"));
  const envExample = parseEnvFile(path.join(ROOT, ".env.example"));
  const processEnv = process.env;
  const pools = [processEnv, envLocal, envFile, envExample];

  const unsplashKey =
    getEnvValue("UNSPLASH_ACCESS_KEY", pools) ||
    getEnvValue("UNPLASH_ACCESS_KEY", pools);
  const pexelsKey =
    getEnvValue("PEXELS_API_KEY", pools) ||
    getEnvValue("PIXELS_API_KEY", pools);

  return { unsplashKey, pexelsKey };
}

function tokenize(text) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((token) => token && token.length > 2 && !STOP_WORDS.has(token));
}

function scoreCandidate(query, candidate) {
  const queryTokens = tokenize(query);
  const haystackText = [
    candidate.description ?? "",
    candidate.alt ?? "",
    candidate.title ?? "",
    candidate.tags?.join(" ") ?? "",
  ]
    .join(" ")
    .toLowerCase();

  let overlap = 0;
  for (const token of queryTokens) {
    if (haystackText.includes(token)) {
      overlap += 1;
    }
  }

  const tokenScore = queryTokens.length ? overlap / queryTokens.length : 0;

  const aspect = candidate.width > 0 && candidate.height > 0 ? candidate.width / candidate.height : 1.6;
  const aspectDistance = Math.abs(1.6 - aspect);
  const aspectScore = Math.max(0, 1 - aspectDistance / 1.6);

  const pixelCount = candidate.width * candidate.height;
  const resolutionScore = Math.min(1, pixelCount / 2_400_000);

  return tokenScore * 0.7 + aspectScore * 0.2 + resolutionScore * 0.1;
}

async function fetchUnsplashCandidates(accessKey, query, orientation) {
  if (!accessKey) {
    return [];
  }

  const endpoint = new URL("https://api.unsplash.com/search/photos");
  endpoint.searchParams.set("query", query);
  endpoint.searchParams.set("per_page", "8");
  endpoint.searchParams.set("orientation", orientation);
  endpoint.searchParams.set("content_filter", "high");

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
      "Accept-Version": "v1",
    },
  });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  const results = Array.isArray(payload?.results) ? payload.results : [];

  return results
    .map((photo) => {
      const imageUrl = photo?.urls?.regular || photo?.urls?.full || photo?.urls?.raw || "";
      if (!imageUrl) {
        return null;
      }

      return {
        provider: "unsplash",
        id: String(photo.id),
        width: Number(photo.width ?? 0),
        height: Number(photo.height ?? 0),
        imageUrl,
        description: photo?.description || photo?.alt_description || "",
        alt: photo?.alt_description || "",
        title: "",
        tags: [],
        source: photo?.links?.html || "",
        photographer: photo?.user?.name || "",
        photographerUrl: photo?.user?.links?.html || "",
        downloadLocation: photo?.links?.download_location || "",
      };
    })
    .filter(Boolean);
}

async function triggerUnsplashDownload(downloadLocation, accessKey) {
  if (!downloadLocation || !accessKey) {
    return;
  }

  try {
    const response = await fetch(downloadLocation, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        "Accept-Version": "v1",
      },
    });
    if (!response.ok) {
      return;
    }
    await response.json();
  } catch {
    // Intentionally ignored: this tracking call should not fail the script.
  }
}

async function fetchPexelsCandidates(apiKey, query, orientation) {
  if (!apiKey) {
    return [];
  }

  const endpoint = new URL("https://api.pexels.com/v1/search");
  endpoint.searchParams.set("query", query);
  endpoint.searchParams.set("per_page", "8");
  endpoint.searchParams.set("orientation", orientation);
  endpoint.searchParams.set("size", "large");

  const response = await fetch(endpoint, {
    headers: {
      Authorization: apiKey,
    },
  });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  const photos = Array.isArray(payload?.photos) ? payload.photos : [];

  return photos
    .map((photo) => {
      const imageUrl =
        photo?.src?.landscape ||
        photo?.src?.large2x ||
        photo?.src?.large ||
        photo?.src?.medium ||
        photo?.src?.original ||
        "";

      if (!imageUrl) {
        return null;
      }

      return {
        provider: "pexels",
        id: String(photo.id),
        width: Number(photo.width ?? 0),
        height: Number(photo.height ?? 0),
        imageUrl,
        description: photo?.alt || "",
        alt: photo?.alt || "",
        title: "",
        tags: [],
        source: photo?.url || "",
        photographer: photo?.photographer || "",
        photographerUrl: photo?.photographer_url || "",
        downloadLocation: "",
      };
    })
    .filter(Boolean);
}

async function chooseBestImage(query, orientation, keys) {
  const [unsplashCandidates, pexelsCandidates] = await Promise.all([
    fetchUnsplashCandidates(keys.unsplashKey, query, orientation),
    fetchPexelsCandidates(keys.pexelsKey, query, orientation),
  ]);

  const candidates = [...unsplashCandidates, ...pexelsCandidates];
  if (!candidates.length) {
    throw new Error(`No image candidates found for query: "${query}"`);
  }

  let best = candidates[0];
  let bestScore = scoreCandidate(query, best);

  for (let index = 1; index < candidates.length; index += 1) {
    const candidate = candidates[index];
    const score = scoreCandidate(query, candidate);
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }

  return { best, bestScore, poolSizes: { unsplash: unsplashCandidates.length, pexels: pexelsCandidates.length } };
}

async function downloadImage(url, destinationPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Image download failed (${response.status}) for ${url}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(destinationPath, Buffer.from(arrayBuffer));
}

async function run() {
  const keys = loadApiKeys();

  if (!keys.unsplashKey && !keys.pexelsKey) {
    throw new Error(
      "No API keys found. Add UNSPLASH_ACCESS_KEY (or UNPLASH_ACCESS_KEY) and/or PIXELS_API_KEY (or PEXELS_API_KEY).",
    );
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });
  const attribution = [];

  for (const target of IMAGE_TARGETS) {
    const { best, bestScore, poolSizes } = await chooseBestImage(target.query, target.orientation, keys);

    const destinationPath = path.join(IMAGES_DIR, target.file);
    await downloadImage(best.imageUrl, destinationPath);

    if (best.provider === "unsplash") {
      await triggerUnsplashDownload(best.downloadLocation, keys.unsplashKey);
    }

    attribution.push({
      file: target.file,
      query: target.query,
      provider: best.provider,
      providerId: best.id,
      relevanceScore: Number(bestScore.toFixed(4)),
      source: best.source,
      photographer: best.photographer,
      photographerUrl: best.photographerUrl,
      width: best.width,
      height: best.height,
      candidatePool: poolSizes,
      downloadedAt: new Date().toISOString(),
    });

    console.log(
      `Saved ${target.file} (${best.provider}; score=${bestScore.toFixed(3)}; candidates U:${poolSizes.unsplash} P:${poolSizes.pexels})`,
    );
  }

  fs.writeFileSync(META_PATH, JSON.stringify(attribution, null, 2));
  console.log(`Saved attribution metadata: ${path.relative(ROOT, META_PATH)}`);
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

