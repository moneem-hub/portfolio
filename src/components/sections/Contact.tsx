"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { ContactFormState } from "@/lib/types";

type Fields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: Fields = { name: "", email: "", subject: "", message: "" };

function validate(f: Fields) {
  const errors: ContactFormState["errors"] = {};
  if (!f.name.trim()) errors.name = "Please enter your name.";
  if (!f.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!f.subject.trim()) errors.subject = "Please add a subject.";
  if (!f.message.trim() || f.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: undefined },
];

export function Contact() {
  const [fields, setFields] = useState<Fields>(initial);
  const [state, setState] = useState<ContactFormState>({ status: "idle" });
  const [touched, setTouched] = useState<Record<keyof Fields, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const errors = validate(fields);

  const onChange = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onBlur = (key: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setState({ status: "error", message: "Please fix the highlighted fields.", errors: errs });
      return;
    }
    setState({ status: "submitting", message: "Sending message..." });

    const body = [
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      "",
      fields.message.trim(),
    ].join("\n");

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      fields.subject.trim()
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setState({
      status: "success",
      message: "Your email app is opening with the message ready to send.",
    });
    setFields(initial);
    setTouched({ name: false, email: false, subject: false, message: false });
  };

  const field = (
    key: keyof Fields,
    label: string,
    type: "input" | "textarea" = "input",
    placeholder?: string
  ) => {
    const showError = touched[key] && Boolean(errors[key]);
    const id = `contact-${key}`;
    const baseInput =
      "w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:bg-white/10";
    const inputClass = cn(
      baseInput,
      showError
        ? "border-red-500/50 focus:border-red-400"
        : "border-white/10 focus:border-blue-500/50"
    );

    return (
      <div className="grid gap-1.5">
        <label htmlFor={id} className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
          {label}
        </label>
        {type === "input" ? (
          <input
            id={id}
            name={key}
            type="text"
            value={fields[key]}
            onChange={onChange(key)}
            onBlur={onBlur(key)}
            placeholder={placeholder ?? ""}
            className={inputClass}
            autoComplete={key === "email" ? "email" : key === "name" ? "name" : "off"}
            aria-invalid={showError}
            aria-describedby={showError ? `${id}-err` : undefined}
          />
        ) : (
          <textarea
            id={id}
            name={key}
            value={fields[key]}
            onChange={onChange(key)}
            onBlur={onBlur(key)}
            rows={5}
            placeholder={placeholder ?? ""}
            className={cn(inputClass, "resize-none")}
            aria-invalid={showError}
            aria-describedby={showError ? `${id}-err` : undefined}
          />
        )}
        {showError && (
          <p id={`${id}-err`} className="text-xs text-red-400">
            {errors[key]}
          </p>
        )}
      </div>
    );
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great together."
      description="Have a project, an opportunity, or just want to say hi? Drop a message - I usually reply within 1-2 business days."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="h-full p-7">
            <h3 className="text-lg font-semibold text-white">Get in touch</h3>
            <p className="mt-2 text-sm text-neutral-400">
              I&apos;m currently open to full-time Flutter / Mobile and Software roles, as well as freelance projects.
            </p>
            <ul className="mt-6 space-y-4">
              {contactItems.map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20">
                    <c.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm text-white transition-colors hover:text-blue-300"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm text-white">{c.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
                Socials
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-neutral-300 transition-colors hover:border-blue-400/50 hover:bg-blue-500 hover:text-white"
                  >
                    <SocialIcon name={s.icon} className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="h-full p-7" hover={false}>
            <form onSubmit={onSubmit} noValidate className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {field("name", "Name", "input", "Your name")}
                {field("email", "Email", "input", "you@example.com")}
              </div>
                {field("subject", "Subject", "input", "What is it about?")}
              {field("message", "Message", "textarea", "Tell me a bit about your project...")}

              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-neutral-500">
                  By submitting, you agree to be contacted via email.
                </p>
                <button
                  type="submit"
                  disabled={state.status === "submitting"}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-blue-500 px-6 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(59,130,246,0.6)] transition-all hover:bg-blue-400 disabled:opacity-60"
                >
                  {state.status === "submitting" ? (
                    <>
                      <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>
              </div>

              {state.message && (
                <div
                  role="status"
                  className={cn(
                    "mt-2 flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm",
                    state.status === "success"
                      ? "border-blue-500/30 bg-blue-500/10 text-blue-200"
                      : "border-red-500/30 bg-red-500/10 text-red-200"
                  )}
                >
                  {state.status === "success" && <CheckCircle2 className="h-4 w-4" aria-hidden="true" />}
                  {state.message}
                </div>
              )}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}

