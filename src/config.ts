/**
 * Site-wide configuration (contact, etc.)
 */

export const WHATSAPP_NUMBER = '6282326546380';

/** Google Maps link for office/location */
export const MAPS_URL = 'https://maps.app.goo.gl/tXsP96mb2uXaAseQ6';

/** Full WhatsApp chat URL (no pre-filled message) */
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Build WhatsApp URL with optional pre-filled message */
export function whatsappUrlWithText(message: string): string {
	const params = new URLSearchParams({ text: message });
	return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
}
