"use client";

import { useState, type FormEvent } from "react";
import { contacts, whatsappLink } from "../lib/site";

const needs = [
  "Registration + website (R1,300)",
  "A website",
  "An online store",
  "Google profile, domain or email",
  "A WhatsApp bot or automation",
  "A web app or Android app",
  "Fix my existing site",
  "Something else",
];

const field =
  "mt-2.5 w-full rounded-xl border border-line-strong bg-bg/60 px-4 py-3.5 text-small text-text placeholder:text-muted/60 transition-colors duration-300 focus:border-gold focus:bg-bg focus:outline-none";

// No backend yet: the form turns the answers into a WhatsApp message to whoever the customer picks.
// Swap handleSubmit for a POST to the company inbox once mtgtech.co.za email is live.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Hi Malangeni Tech Guild,",
      "",
      `Name: ${data.get("name")}`,
      `Business: ${data.get("business")}`,
      `My WhatsApp: ${data.get("phone")}`,
      `I need: ${data.get("need")}`,
      data.get("details") ? `Details: ${data.get("details")}` : "",
    ]
      .filter((line, i) => line !== "" || i === 1)
      .join("\n");

    const to = contacts.find((c) => c.number === data.get("to")) ?? contacts[0];
    window.open(whatsappLink(message, to), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 rounded-[24px] border border-line bg-surface p-7 sm:grid-cols-2 sm:p-10">
      <label className="text-small font-medium">
        Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="text-small font-medium">
        Business name
        <input name="business" required autoComplete="organization" className={field} />
      </label>
      <label className="text-small font-medium sm:col-span-2">
        Your WhatsApp number
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="e.g. 082 123 4567" className={field} />
      </label>
      <label className="text-small font-medium sm:col-span-2">
        What do you need?
        <select name="need" required defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>
            Choose one
          </option>
          {needs.map((need) => (
            <option key={need} value={need}>
              {need}
            </option>
          ))}
        </select>
      </label>
      <label className="text-small font-medium sm:col-span-2">
        Anything else? <span className="font-normal text-muted">(optional)</span>
        <textarea name="details" rows={3} className={`${field} resize-y`} />
      </label>
      <fieldset className="sm:col-span-2">
        <legend className="text-small font-medium">Send to</legend>
        <div className="mt-2.5 grid grid-cols-2 gap-3">
          {contacts.map((contact, i) => (
            <label
              key={contact.number}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-line-strong bg-bg/60 px-4 py-3.5 text-small transition-colors duration-300 has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-bright"
            >
              <input type="radio" name="to" value={contact.number} defaultChecked={i === 0} className="accent-[#c8a96a]" />
              {contact.name}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-gold inline-flex items-center justify-center rounded-full px-7 py-3.5 text-small font-medium">
          <span className="relative">Send on WhatsApp</span>
        </button>
        <p className="text-caption text-muted" aria-live="polite">
          {sent ? "WhatsApp opened in a new tab — press send there." : "We only use your details to reply to you."}
        </p>
      </div>
    </form>
  );
}
