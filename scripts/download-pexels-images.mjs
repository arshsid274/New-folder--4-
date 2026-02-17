#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IMAGES_DIR = path.join(ROOT, "public", "images");
const META_PATH = path.join(IMAGES_DIR, "image-attribution.json");

const IMAGE_TARGETS = [
  {
    file: "main-hero.jpg",
    query: "licensed currency exchange teller helping customer at counter with cash",
    orientation: "landscape",
    focusTerms: ["teller", "counter", "currency", "customer", "cash", "exchange"],
  },
  {
    file: "support-desk.jpg",
    query: "financial advisor helping client complete money transfer documents in office",
    orientation: "landscape",
    focusTerms: ["advisor", "client", "documents", "transfer", "office", "consultation"],
  },
  {
    file: "hero-exchange.jpg",
    query: "money transfer consultation at financial services office desk with advisor and client",
    orientation: "landscape",
    focusTerms: ["international", "transfer", "consultation", "customer", "finance"],
    excludeTerms: ["sign", "signage", "neon", "storefront", "shop", "atm"],
    preferredProviders: ["freepik", "vecteezy", "pexels"],
  },
  {
    file: "service-banner.jpg",
    query: "global remittance and foreign exchange operations in financial office",
    orientation: "landscape",
    focusTerms: ["global", "remittance", "foreign", "exchange", "service"],
    excludeTerms: ["event", "conference", "outdoor"],
    preferredProviders: ["pexels", "vecteezy", "freepik"],
  },
  {
    file: "localcurrencyExchange.jpg",
    query: "local currency exchange transaction at counter with teller and customer",
    orientation: "landscape",
    focusTerms: ["local", "currency", "exchange", "counter", "teller", "transaction"],
  },
  {
    file: "international-money.jpg",
    query: "international wire transfer banking service with advisor and customer at desk",
    orientation: "landscape",
    focusTerms: ["international", "wire", "transfer", "bank", "payment", "advisor"],
    excludeTerms: ["storefront", "shop", "sign", "street", "exchange kiosk"],
    preferredProviders: ["freepik", "vecteezy", "pexels"],
  },
  {
    file: "medical-transfer.jpg",
    query: "medical transfer payment support at hospital billing office",
    orientation: "landscape",
    focusTerms: ["medical", "hospital", "billing", "payment", "support"],
  },
  {
    file: "study-abroad.jpg",
    query: "student tuition payment support at university admissions finance office",
    orientation: "landscape",
    focusTerms: ["study", "abroad", "tuition", "student", "university", "payment"],
    excludeTerms: ["pos", "terminal", "receipt", "credit card machine", "store checkout"],
    preferredProviders: ["freepik", "vecteezy", "pexels"],
  },
  {
    file: "tourism-transfer.jpg",
    query: "tourism foreign currency exchange with traveler passport and trip planning",
    orientation: "landscape",
    focusTerms: ["tourism", "travel", "passport", "foreign", "currency", "exchange"],
  },
  {
    file: "corporate-transfer.jpg",
    query: "corporate finance team reviewing supplier invoices on laptop in office meeting",
    orientation: "landscape",
    focusTerms: ["corporate", "supplier", "invoices", "payments", "international", "finance"],
    excludeTerms: ["students", "campus", "conference badge", "outdoor", "airplane", "passport", "travel", "coins"],
    preferredProviders: ["pexels", "freepik", "vecteezy"],
  },
  {
    file: "service-local.jpg",
    query: "currency exchange teller counting cash for customer at indoor service counter",
    orientation: "portrait",
    focusTerms: ["currency", "exchange", "teller", "cash", "customer", "counter"],
    excludeTerms: ["storefront", "street", "night", "neon", "sign", "building exterior"],
    preferredProviders: ["pexels", "unsplash", "freepik", "vecteezy"],
  },
  {
    file: "service-international.jpg",
    query: "bank advisor reviewing international transfer form with client at office desk",
    orientation: "portrait",
    focusTerms: ["international", "transfer", "advisor", "client", "form", "desk"],
    excludeTerms: ["headshot", "arms crossed", "isolated portrait", "studio portrait"],
    preferredProviders: ["pexels", "unsplash", "freepik", "vecteezy"],
  },
  {
    file: "service-medical.jpg",
    query: "hospital billing staff explaining medical payment documents to patient family",
    orientation: "portrait",
    focusTerms: ["hospital", "billing", "medical", "payment", "documents", "family"],
    excludeTerms: ["oxygen mask", "icu", "surgery", "emergency bed", "ambulance"],
    preferredProviders: ["pexels", "unsplash", "freepik", "vecteezy"],
  },
  {
    file: "service-study.jpg",
    query: "student and parent reviewing tuition payment paperwork with advisor in office",
    orientation: "portrait",
    focusTerms: ["student", "tuition", "payment", "advisor", "paperwork", "office"],
    excludeTerms: ["street", "outdoor", "graduation ceremony", "campus portrait"],
    preferredProviders: ["pexels", "unsplash", "freepik", "vecteezy"],
  },
  {
    file: "service-tourism.jpg",
    query: "traveler exchanging currency at service desk with passport and cash",
    orientation: "portrait",
    focusTerms: ["traveler", "currency", "exchange", "passport", "cash", "desk"],
    excludeTerms: ["covid passport", "health pass", "map only", "vaccine", "phone screen"],
    preferredProviders: ["pexels", "unsplash", "freepik", "vecteezy"],
  },
  {
    file: "service-corporate.jpg",
    query: "corporate finance team reviewing supplier invoices and payment reports in meeting room",
    orientation: "portrait",
    focusTerms: ["corporate", "finance", "team", "supplier", "invoices", "reports"],
    excludeTerms: ["stock market board", "neon numbers", "forex board", "trading screen"],
    preferredProviders: ["pexels", "unsplash", "freepik", "vecteezy"],
  },
  {
    file: "about-office.jpg",
    query: "professional financial services office team meeting with clients",
    orientation: "landscape",
    focusTerms: ["office", "team", "financial", "services", "clients", "meeting"],
  },
  {
    file: "contact-office.jpg",
    query: "customer service reception desk in financial office with staff support",
    orientation: "landscape",
    focusTerms: ["customer", "service", "reception", "desk", "office", "staff"],
  },
  {
    file: "compliance-security.jpg",
    query: "financial compliance and cybersecurity risk review by analysts in office",
    orientation: "landscape",
    focusTerms: ["compliance", "audit", "cybersecurity", "risk", "monitoring", "financial"],
    excludeTerms: ["tax form", "scam", "1040", "fraud letter"],
    preferredProviders: ["pexels", "vecteezy", "freepik"],
  },
];

const GLOBAL_EXCLUDE_TERMS = [
  "vector",
  "illustration",
  "cartoon",
  "icon",
  "logo",
  "infographic",
  "template",
  "mockup",
  "sticker",
  "clipart",
  "3d render",
  "rendering",
  "game",
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
    getEnvValue("UNPLASH_ACCESS_KEY", pools) ||
    getEnvValue("UNPLASH_ACCESS_KE", pools);
  const pexelsKey =
    getEnvValue("PEXELS_API_KEY", pools) ||
    getEnvValue("PIXELS_API_KEY", pools);
  const freepikKey =
    getEnvValue("FREEPIK_API_KEY", pools) ||
    getEnvValue("Free_Pix_Api_key", pools) ||
    getEnvValue("FREE_PIX_API_KEY", pools);
  const vecteezyKey =
    getEnvValue("VECTEEZY_API_KEY", pools) ||
    getEnvValue("vecteezy_API_KEY", pools) ||
    getEnvValue("VECTORS_API_KEY", pools);
  const vecteezyAccountId =
    getEnvValue("VECTEEZY_ACCOUNT_ID", pools) ||
    getEnvValue("vecteezy_account_is", pools);
  const vecteezyBaseUrl =
    getEnvValue("VECTEEZY_API_BASE_URL", pools) ||
    "https://api.vecteezy.com";

  return { unsplashKey, pexelsKey, freepikKey, vecteezyKey, vecteezyAccountId, vecteezyBaseUrl };
}

function tokenize(text) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((token) => token && token.length > 2 && !STOP_WORDS.has(token));
}

function buildCandidateText(candidate) {
  return [
    candidate.description ?? "",
    candidate.alt ?? "",
    candidate.title ?? "",
    candidate.tags?.join(" ") ?? "",
  ]
    .join(" ")
    .toLowerCase();
}

function countTokenMatches(tokens, haystackText) {
  let overlap = 0;
  for (const token of tokens) {
    if (haystackText.includes(token)) {
      overlap += 1;
    }
  }
  return overlap;
}

function withOrientationHint(query, orientation) {
  if (orientation === "portrait") {
    return `${query} vertical portrait`;
  }
  if (orientation === "landscape") {
    return `${query} horizontal landscape`;
  }
  return query;
}

function matchesTargetOrientation(candidate, orientation) {
  const width = Number(candidate?.width ?? 0);
  const height = Number(candidate?.height ?? 0);
  if (width <= 0 || height <= 0) {
    return false;
  }
  if (orientation === "portrait") {
    return height > width;
  }
  if (orientation === "landscape") {
    return width > height;
  }
  return true;
}

function scoreCandidate(target, candidate) {
  const queryTokens = tokenize(target.query);
  const focusTokens = tokenize((target.focusTerms ?? []).join(" "));
  const excludeTokens = tokenize([...(target.excludeTerms ?? []), ...GLOBAL_EXCLUDE_TERMS].join(" "));
  const haystackText = buildCandidateText(candidate);

  const queryOverlap = countTokenMatches(queryTokens, haystackText);
  const focusOverlap = countTokenMatches(focusTokens, haystackText);
  const excludeHits = countTokenMatches(excludeTokens, haystackText);

  const queryScore = queryTokens.length ? queryOverlap / queryTokens.length : 0;
  const focusScore = focusTokens.length ? focusOverlap / focusTokens.length : 0;

  const aspect = candidate.width > 0 && candidate.height > 0 ? candidate.width / candidate.height : 1.6;
  const targetAspect = target.orientation === "portrait" ? 0.7 : 1.6;
  const aspectDistance = Math.abs(targetAspect - aspect);
  const aspectScore = Math.max(0, 1 - aspectDistance / targetAspect);

  const pixelCount = candidate.width * candidate.height;
  const resolutionScore = Math.min(1, pixelCount / 2_400_000);

  const noFocusPenalty = focusTokens.length > 0 && focusOverlap === 0 ? 0.22 : 0;
  const weakFocusPenalty = focusTokens.length > 0 && focusOverlap < Math.min(2, focusTokens.length) ? 0.12 : 0;
  const excludePenalty = Math.min(0.38, excludeHits * 0.09);
  const metadataPenalty = haystackText.trim().length < 12 ? 0.14 : 0;

  let providerBias = 0;
  if (Array.isArray(target.preferredProviders) && target.preferredProviders.length > 0) {
    if (target.preferredProviders.includes(candidate.provider)) {
      providerBias = 0.04;
    } else {
      providerBias = -0.05;
    }
  }

  return (
    queryScore * 0.52 +
    focusScore * 0.28 +
    aspectScore * 0.1 +
    resolutionScore * 0.1 +
    providerBias -
    noFocusPenalty -
    weakFocusPenalty -
    excludePenalty -
    metadataPenalty
  );
}

async function fetchUnsplashCandidates(accessKey, query, orientation) {
  if (!accessKey) {
    return [];
  }

  const endpoint = new URL("https://api.unsplash.com/search/photos");
  endpoint.searchParams.set("query", query);
  endpoint.searchParams.set("per_page", "20");
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
  endpoint.searchParams.set("per_page", "20");
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
        orientation === "portrait"
          ? photo?.src?.portrait ||
            photo?.src?.large2x ||
            photo?.src?.large ||
            photo?.src?.medium ||
            photo?.src?.original ||
            ""
          : photo?.src?.landscape ||
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

function parseSizeString(sizeValue) {
  if (!sizeValue || typeof sizeValue !== "string") {
    return { width: 0, height: 0 };
  }

  const match = sizeValue.match(/(\d+)\s*x\s*(\d+)/i);
  if (!match) {
    return { width: 0, height: 0 };
  }

  return { width: Number(match[1] ?? 0), height: Number(match[2] ?? 0) };
}

async function fetchFreepikCandidates(apiKey, query, orientation) {
  if (!apiKey) {
    return [];
  }

  const orientedQuery = withOrientationHint(query, orientation);
  const endpoint = new URL("https://api.freepik.com/v1/resources");
  endpoint.searchParams.set("term", orientedQuery);
  endpoint.searchParams.set("limit", "20");
  endpoint.searchParams.set("order", "relevance");
  endpoint.searchParams.set("filters[content_type][photo]", "1");

  const response = await fetch(endpoint, {
    headers: {
      "x-freepik-api-key": apiKey,
    },
  });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  const items = Array.isArray(payload?.data) ? payload.data : [];

  return items
    .map((item) => {
      const imageUrl = item?.image?.source?.url || "";
      if (!imageUrl) {
        return null;
      }

      const { width, height } = parseSizeString(item?.image?.source?.size);

      return {
        provider: "freepik",
        id: String(item?.id ?? ""),
        width,
        height,
        imageUrl,
        description: item?.title || "",
        alt: item?.title || "",
        title: item?.title || "",
        tags: [],
        source: item?.url || "",
        photographer: item?.author?.name || "",
        photographerUrl: item?.author?.url || "",
        downloadLocation: "",
      };
    })
    .filter(Boolean);
}

async function fetchVecteezyCandidates({ apiKey, accountId, baseUrl }, query, orientation) {
  if (!apiKey || !accountId) {
    return [];
  }

  const normalizedBase = String(baseUrl || "https://api.vecteezy.com").replace(/\/+$/, "");
  const orientedQuery = withOrientationHint(query, orientation);
  const endpoint = new URL(`${normalizedBase}/v2/${encodeURIComponent(String(accountId))}/resources`);
  endpoint.searchParams.set("term", orientedQuery);
  endpoint.searchParams.set("page", "1");
  endpoint.searchParams.set("per_page", "20");
  endpoint.searchParams.set("content_type", "photo");

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  const resources = Array.isArray(payload?.resources) ? payload.resources : [];

  return resources
    .map((item) => {
      const imageUrl = item?.preview_url || item?.thumbnail_2x_url || item?.thumbnail_url || "";
      if (!imageUrl) {
        return null;
      }

      const width = Number(item?.preview_dimensions?.width ?? item?.thumbnail_dimensions?.width ?? 0);
      const height = Number(item?.preview_dimensions?.height ?? item?.thumbnail_dimensions?.height ?? 0);
      const resourceId = String(item?.id ?? "");
      if (!resourceId) {
        return null;
      }

      return {
        provider: "vecteezy",
        id: resourceId,
        width,
        height,
        imageUrl,
        description: item?.title || "",
        alt: item?.title || "",
        title: item?.title || "",
        tags: Array.isArray(item?.tags) ? item.tags.map((tag) => String(tag)) : [],
        source: "",
        photographer: "",
        photographerUrl: "",
        downloadLocation: `${normalizedBase}/v2/${encodeURIComponent(String(accountId))}/resources/${resourceId}/download`,
      };
    })
    .filter(Boolean);
}

async function resolveVecteezyDownloadUrl(downloadLocation, apiKey) {
  if (!downloadLocation || !apiKey) {
    return "";
  }

  try {
    const response = await fetch(downloadLocation, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (!response.ok) {
      return "";
    }
    const payload = await response.json();
    return typeof payload?.url === "string" ? payload.url : "";
  } catch {
    return "";
  }
}

async function chooseBestImage(target, keys) {
  const { query, orientation } = target;
  const [unsplashCandidates, pexelsCandidates, freepikCandidates, vecteezyCandidates] = await Promise.all([
    fetchUnsplashCandidates(keys.unsplashKey, query, orientation),
    fetchPexelsCandidates(keys.pexelsKey, query, orientation),
    fetchFreepikCandidates(keys.freepikKey, query, orientation),
    fetchVecteezyCandidates(
      {
        apiKey: keys.vecteezyKey,
        accountId: keys.vecteezyAccountId,
        baseUrl: keys.vecteezyBaseUrl,
      },
      query,
      orientation,
    ),
  ]);

  const orientedUnsplash = unsplashCandidates.filter((candidate) =>
    matchesTargetOrientation(candidate, orientation),
  );
  const orientedPexels = pexelsCandidates.filter((candidate) =>
    matchesTargetOrientation(candidate, orientation),
  );
  const orientedFreepik = freepikCandidates.filter((candidate) =>
    matchesTargetOrientation(candidate, orientation),
  );
  const orientedVecteezy = vecteezyCandidates.filter((candidate) =>
    matchesTargetOrientation(candidate, orientation),
  );

  const candidates = [...orientedUnsplash, ...orientedPexels, ...orientedFreepik, ...orientedVecteezy];
  if (!candidates.length) {
    throw new Error(`No ${orientation} image candidates found for query: "${query}"`);
  }

  let best = candidates[0];
  let bestScore = scoreCandidate(target, best);

  for (let index = 1; index < candidates.length; index += 1) {
    const candidate = candidates[index];
    const score = scoreCandidate(target, candidate);
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }

  return {
    best,
    bestScore,
    poolSizes: {
      unsplash: orientedUnsplash.length,
      pexels: orientedPexels.length,
      freepik: orientedFreepik.length,
      vecteezy: orientedVecteezy.length,
    },
  };
}

async function downloadImage(url, destinationPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Image download failed (${response.status}) for ${url}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(destinationPath, Buffer.from(arrayBuffer));
}

function parseOnlyFilesArg(argv) {
  const onlyArg = argv.find((arg) => arg.startsWith("--only="));
  if (!onlyArg) {
    return null;
  }

  const values = onlyArg
    .slice("--only=".length)
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  return values.length ? values : null;
}

function parseOrientationArg(argv) {
  const orientationArg = argv.find((arg) => arg.startsWith("--orientation="));
  if (!orientationArg) {
    return null;
  }

  const rawValue = orientationArg.slice("--orientation=".length).trim().toLowerCase();
  if (rawValue === "portrait" || rawValue === "landscape") {
    return rawValue;
  }

  throw new Error('--orientation must be either "portrait" or "landscape".');
}

function targetMatchesFilter(fileName, filters) {
  if (!filters) {
    return true;
  }

  for (const filterValue of filters) {
    if (fileName === filterValue || fileName.startsWith(filterValue)) {
      return true;
    }
  }

  return false;
}

async function run() {
  const keys = loadApiKeys();

  if (!keys.unsplashKey && !keys.pexelsKey && !keys.freepikKey && !keys.vecteezyKey) {
    throw new Error(
      "No API keys found. Add at least one of: UNSPLASH_ACCESS_KEY/UNPLASH_ACCESS_KEY, PIXELS_API_KEY/PEXELS_API_KEY, Free_Pix_Api_key, VECTEEZY_API_KEY/vecteezy_API_KEY.",
    );
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });
  const argv = process.argv.slice(2);
  const onlyFilters = parseOnlyFilesArg(argv);
  const orientationOverride = parseOrientationArg(argv);
  const targets = IMAGE_TARGETS
    .filter((target) => targetMatchesFilter(target.file, onlyFilters))
    .map((target) =>
      orientationOverride
        ? {
            ...target,
            orientation: orientationOverride,
          }
        : target,
    );
  if (!targets.length) {
    throw new Error("No image targets matched --only filter.");
  }

  const attributionByFile = new Map();
  if (fs.existsSync(META_PATH)) {
    try {
      const existingAttribution = JSON.parse(fs.readFileSync(META_PATH, "utf8"));
      if (Array.isArray(existingAttribution)) {
        for (const entry of existingAttribution) {
          if (entry?.file) {
            attributionByFile.set(entry.file, entry);
          }
        }
      }
    } catch {
      // Ignore malformed metadata and rebuild from current run.
    }
  }

  console.log(
    `Processing ${targets.length} image target(s)` +
      `${onlyFilters ? ` using --only=${onlyFilters.join(",")}` : ""}` +
      `${orientationOverride ? ` with --orientation=${orientationOverride}` : ""}`,
  );

  for (const target of targets) {
    const { best, bestScore, poolSizes } = await chooseBestImage(target, keys);

    const destinationPath = path.join(IMAGES_DIR, target.file);
    let imageUrl = best.imageUrl;
    if (best.provider === "vecteezy") {
      const resolved = await resolveVecteezyDownloadUrl(best.downloadLocation, keys.vecteezyKey);
      if (resolved) {
        imageUrl = resolved;
      }
    }
    await downloadImage(imageUrl, destinationPath);

    if (best.provider === "unsplash") {
      await triggerUnsplashDownload(best.downloadLocation, keys.unsplashKey);
    }

    const nextEntry = {
      file: target.file,
      query: target.query,
      provider: best.provider,
      providerId: best.id,
      relevanceScore: Number(bestScore.toFixed(4)),
      source: best.source,
      selectedTitle: best.title,
      selectedDescription: best.description,
      photographer: best.photographer,
      photographerUrl: best.photographerUrl,
      width: best.width,
      height: best.height,
      candidatePool: poolSizes,
      downloadedAt: new Date().toISOString(),
    };
    attributionByFile.set(target.file, nextEntry);

    console.log(
      `Saved ${target.file} (${best.provider}; score=${bestScore.toFixed(3)}; candidates U:${poolSizes.unsplash} P:${poolSizes.pexels} F:${poolSizes.freepik} V:${poolSizes.vecteezy})`,
    );
  }

  const mergedAttribution = Array.from(attributionByFile.values()).sort((a, b) =>
    String(a.file).localeCompare(String(b.file)),
  );
  fs.writeFileSync(META_PATH, JSON.stringify(mergedAttribution, null, 2));
  console.log(`Saved attribution metadata: ${path.relative(ROOT, META_PATH)}`);
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
