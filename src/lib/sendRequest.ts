import { contactInfo, socialLinks } from "../data/nav";

/**
 * One place that delivers every request (quick pop-up and full form).
 *
 * If VITE_FORM_ENDPOINT is set at build time (for example a Formspree or Web3Forms URL), the request is POSTed there
 * and every contact is logged in that service. Without it we fall back to the visitor's email app.
 * Without it the fallback is the visitor's email app, or their text-message app when fallback is "sms".
 * Returns "sent" when delivered, otherwise "mail" or "sms" for the app that was opened.
 */
export async function sendRequest(
  source: string,
  fields: Record<string, string>,
  subject: string,
  body: string,
  fallback: "mail" | "sms" = "mail",
): Promise<"sent" | "mail" | "sms"> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ source, subject, ...fields }),
    });
    if (res.ok) return "sent";
  }
  if (fallback === "sms") {
    // "?&body=" is the form that both iOS and Android accept.
    window.location.href = `${socialLinks.text}?&body=${encodeURIComponent(body)}`;
    return "sms";
  }
  window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "mail";
}
