import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteMetadata } from "@/lib/metadata";

const GA_ID = "G-8K5FWJCYPN";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: siteMetadata.defaultTitle,
  description: siteMetadata.defaultDescription,
  metadataBase: new URL(siteMetadata.siteUrl),
  authors: [{ name: "Aditya Pranav", url: siteMetadata.siteUrl }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48 96x96" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "96x96" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: siteMetadata.name,
    type: "website",
    locale: "en_US",
    images: [{ url: siteMetadata.defaultImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteMetadata.defaultImage],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aditya Pranav",
  url: "https://adityapranav.in",
  description:
    "Fractional CTO and Product Engineering Advisory for founders. CTO-level guidance across architecture, roadmap, delivery, vendors, and AI adoption.",
  author: {
    "@type": "Person",
    name: "Aditya Pranav",
    url: "https://adityapranav.in",
    sameAs: ["https://www.linkedin.com/in/aditya-pranav"],
  },
  inLanguage: "en-US",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable} ${mono.variable}`}>
      <head>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
