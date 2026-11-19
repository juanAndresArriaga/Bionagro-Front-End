import { contactInfo, socialLinks } from "../data/nav";

export type Fallback = "mail" | "sms";
export type SendResult = "sent" | Fallback | "error";

/** A link that opens the visitor's email or text-message app with the request filled in. */
export function fallbackHref(fallback: Fallback, subject: string, body: string) {
  // "?&body=" is the form that both iOS and Android accept.
  if (fallback === "sms") return `${socialLinks.text}?&body=${encodeURIComponent(body)}`;
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * One place that delivers every request (quick pop-up and full form).
 *
 * If VITE_FORM_ENDPOINT is set at build time (for example a Formspree or Web3Forms URL), the request is POSTed there
 * and every contact is logged in that service. If that POST fails we return "error" so the form can say so and offer
 * the fallback link, instead of silently switching apps.
 * Without an endpoint we open the visitor's email app, or their text-message app when fallback is "sms".
 */
export async function sendRequest(
  source: string,
  fields: Record<string, string>,
  subject: string,
  body: string,
  fallback: Fallback = "mail",
): Promise<SendResult> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ source, subject, ...fields }),
      });
      return res.ok ? "sent" : "error";
    } catch {
      return "error";
    }
  }
  window.location.href = fallbackHref(fallback, subject, body);
  return fallback;
}
