/** Public contact details for footer and CTAs — adjust in one place. */
export const siteContact = {
  email: "adityapranav57@gmail.com",
  phoneDisplay: "+91 91100 48492",
  /** E.164 for tel:, WhatsApp, and copy */
  phoneTel: "+919110048492",
  linkedin: "https://www.linkedin.com/in/aditya-pranav",
} as const;

export const siteContactLinks = {
  mailto: `mailto:${siteContact.email}`,
  tel: `tel:${siteContact.phoneTel}`,
  whatsapp: `https://wa.me/${siteContact.phoneTel.replace(/^\+/, "")}`,
  linkedin: siteContact.linkedin,
} as const;
