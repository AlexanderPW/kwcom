"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  "Individual Coaching",
  "Group Coaching",
  "Coaching Packages",
  "Other",
] as const;

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[0.95rem] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-kw-pink focus:ring-2 focus:ring-kw-pink/20";

const labelClass = "mb-2 block text-sm font-semibold text-neutral-800";

function Required() {
  return (
    <span aria-hidden className="text-kw-pink">
      {" "}
      *
    </span>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-kw-pink/10 text-kw-pink">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
            <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </span>
        <h2 className="mt-5 font-heading text-2xl font-semibold text-kw-primary">
          Thank you!
        </h2>
        <p className="mt-3 max-w-md text-neutral-600">
          Your message has been received. I&rsquo;ll be in touch shortly to talk
          about where you are and where you want to go.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      {/* Honeypot: hidden from users, bots tend to fill it. */}
      <div aria-hidden className="absolute -left-[9999px]" tabIndex={-1}>
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
            <Required />
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClass}>
          Best Email To Reach You
          <Required />
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className={inputClass}
        />
      </div>

      <fieldset className="mt-6 m-0 border-0 p-0">
        <legend className={`${labelClass} p-0`}>
          Preferred Method of Contact
        </legend>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {["Email", "Phone"].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 text-neutral-800"
            >
              <input
                type="radio"
                name="contactMethod"
                value={option}
                className="h-4 w-4 accent-kw-pink"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="reason" className={labelClass}>
          Why are you interested in coaching at this time?
          <Required />
        </label>
        <textarea
          id="reason"
          name="reason"
          required
          rows={4}
          placeholder="Tell me a little about what's bringing you here…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <fieldset className="mt-6 m-0 border-0 p-0">
        <legend className={`${labelClass} p-0`}>
          Have you worked with a coach before?
        </legend>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {["Yes", "No"].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 text-neutral-800"
            >
              <input
                type="radio"
                name="workedWithCoach"
                value={option}
                className="h-4 w-4 accent-kw-pink"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="service" className={labelClass}>
          Which services are you interested in exploring?
        </label>
        <select
          id="service"
          name="service"
          defaultValue={SERVICES[0]}
          className={inputClass}
        >
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="referral" className={labelClass}>
          How did you hear about me?
        </label>
        <input
          id="referral"
          name="referral"
          type="text"
          className={inputClass}
        />
      </div>

      {status === "error" && error ? (
        <p
          role="alert"
          className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      ) : null}

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
