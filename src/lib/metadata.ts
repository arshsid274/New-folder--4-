import type { Metadata } from "next";
import { siteConfig, siteOrigin } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const absoluteUrl =
    normalizedPath === "/" ? siteOrigin : `${siteOrigin}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      type: "website",
      siteName: siteConfig.companyName,
      images: [
        {
          url: `${siteOrigin}/images/og-card.svg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.companyName} social image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteOrigin}/images/og-card.svg`],
    },
  };
}
