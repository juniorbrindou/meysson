"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/[locale]/contact/actions";

interface ServiceOption {
  key: string;
  label: string;
}

interface ContactFormProps {
  services: ServiceOption[];
}

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm({ services }: ContactFormProps) {
  const t = useTranslations("contact");
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold text-gray-text mb-2">{t("success_title")}</h3>
        <p className="text-gray-500 text-sm max-w-sm">{t("success_desc")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          <AlertCircle size={16} className="shrink-0" />
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-text mb-1.5">
            {t("field_name")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("field_name_placeholder")}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-text mb-1.5">
            {t("field_company")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder={t("field_company_placeholder")}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-text mb-1.5">
            {t("field_email")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("field_email_placeholder")}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-text mb-1.5">
            {t("field_phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={t("field_phone_placeholder")}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-text mb-1.5">
          {t("field_service")} <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text transition-colors"
          required
        >
          <option value="">{t("field_service_placeholder")}</option>
          {services.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-text mb-1.5">
          {t("field_message")} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={t("field_message_placeholder")}
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 resize-none transition-colors"
          required
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="rgpd"
          name="rgpd"
          className="mt-1 accent-primary"
          required
        />
        <label htmlFor="rgpd" className="text-xs text-gray-500">
          {t("rgpd")}
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto inline-flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors text-sm"
      >
        {isPending && <Loader2 size={16} className="animate-spin" />}
        {isPending ? t("submit_pending") : t("submit")}
      </button>

      <p className="text-xs text-gray-400">{t("field_required")}</p>
    </form>
  );
}
