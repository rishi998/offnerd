export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/IZZsz4vGeSu7kBrYnONllq";
/** Matches `ProductCard` outreach (`wa.me/<digits>`). */
export const WHATSAPP_BUSINESS_DIGITS = "9968743811";

/** Base WhatsApp DM link (no prefilled text). */
export const WHATSAPP_CONTACT_URL = `https://wa.me/${WHATSAPP_BUSINESS_DIGITS}`;

export function whatsappDmHref(message: string) {
  return `${WHATSAPP_CONTACT_URL}?text=${encodeURIComponent(message)}`;
}
