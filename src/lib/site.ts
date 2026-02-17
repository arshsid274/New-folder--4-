const DEFAULT_SITE_URL = "https://www.awail-alnaqd.com";

function normalizeSiteUrl(rawUrl: string): string {
  try {
    return new URL(rawUrl).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
);

export const siteConfig = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Awail Al-Naqd",
  legalName:
    process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME ??
    "Awail Al-Naqd LLC",
  siteUrl,
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "info@awail-alnaqd.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+218 94 202 0302",
  addressLine:
    process.env.NEXT_PUBLIC_CONTACT_ADDRESS ??
    "Tabalino Street, Benghazi, Libya",
  licenseId: process.env.NEXT_PUBLIC_LICENSE_ID ?? "MTE-NY-884129",
};

export const siteOrigin = siteConfig.siteUrl;
