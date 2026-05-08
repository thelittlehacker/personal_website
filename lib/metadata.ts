import type { Metadata } from "next";

const siteUrl = "https://adityapranav.in";
const defaultImage = "/images/3.png";

export const siteMetadata = {
  name: "Aditya Pranav",
  siteUrl,
  defaultImage,
  defaultTitle: "Aditya Pranav | Fractional CTO for Founder-Led Products",
  defaultDescription:
    "Fractional CTO and Product Engineering Advisory for founders. CTO-level guidance across architecture, roadmap, delivery, vendors, and AI adoption.",
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteMetadata.name, images: [{ url: defaultImage }], type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [defaultImage] },
  };
}
