import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";

const routes = [
  "/",
  "/about",
  "/services",
  "/get-a-quote",
  "/compliance",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: route === "/" ? siteOrigin : `${siteOrigin}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
