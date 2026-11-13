import { contactInfo } from "../data/nav";

/**
 * One place that delivers every request (quick pop-up and full form).
 *
 * If VITE_FORM_ENDPOINT is set at build time (for example a Formspree or Web3Forms URL), the request is POSTed there
 * and every contact is logged in that service. Without it we fall back to the visitor's email app.
 * Returns "sent" when delivered, "mail" when the email app was opened.
 */
export async function sendRequest(
  source: string,
  fields: Record<string, string>,
  subject: string,
  body: string,
): Promise<"sent" | "mail"> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ source, subject, ...fields }),
    });
    if (res.ok) return "sent";
  }
  window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "mail";
}
