import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { GsapSiteAnimations } from "@/components/gsap-site-animations";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig, siteOrigin } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const defaultDescription =
  "Licensed money exchange services for local currency exchange, international transfers, and specialized remittance support.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${siteConfig.companyName} | Secure Currency Exchange`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: defaultDescription,
  applicationName: siteConfig.companyName,
  keywords: [
    "money exchange",
    "currency exchange",
    "international transfer",
    "corporate transfer",
    "medical transfer",
    "study abroad transfer",
  ],
  authors: [{ name: siteConfig.companyName }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteOrigin,
    siteName: siteConfig.companyName,
    title: `${siteConfig.companyName} | Secure Currency Exchange`,
    description: defaultDescription,
    images: [
      {
        url: `${siteOrigin}/images/og-card.svg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.companyName} brand card`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyName} | Secure Currency Exchange`,
    description: defaultDescription,
    images: [`${siteOrigin}/images/og-card.svg`],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.companyName,
  legalName: siteConfig.legalName,
  url: siteOrigin,
  logo: `${siteOrigin}/logo-mark.svg`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: "LY",
      availableLanguage: ["English"],
    },
  ],
  address: siteConfig.addressLine,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-gt antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GsapSiteAnimations />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

