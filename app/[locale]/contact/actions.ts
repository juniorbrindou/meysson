"use server";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const service = formData.get("service")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  // Validation serveur
  if (!name || !email || !service || !message) {
    return { status: "error", message: "Veuillez remplir tous les champs obligatoires." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Adresse email invalide." };
  }

  // TODO: Intégrer un service d'envoi d'email ici.
  // Exemple avec Resend (https://resend.com) :
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Meysson Engineering <noreply@meysson-engineering.ci>",
  //   to: "contact@meysson-engineering.ci",
  //   subject: `Nouveau message de ${name} — ${service}`,
  //   text: `Nom: ${name}\nSociété: ${company}\nEmail: ${email}\nTél: ${phone}\nService: ${service}\n\n${message}`,
  // });

  // Simulation : log en développement
  console.log("[ContactForm]", { name, company, email, phone, service, message });

  return { status: "success" };
}
