export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/IZZsz4vGeSu7kBrYnONllq";
/** Matches `ProductCard` outreach (`wa.me/<digits>`). */
export const WHATSAPP_BUSINESS_DIGITS = "9968743811";

export function whatsappDmHref(message: string) {
  return `https://wa.me/${WHATSAPP_BUSINESS_DIGITS}?text=${encodeURIComponent(message)}`;
}
