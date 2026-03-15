"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Use formsubmit.co to forward to hello@lilleaps.com (no backend needed)
    try {
      await fetch("https://formsubmit.co/ajax/hello@lilleaps.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: "lil leaps Support Request",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSending(false);
  }

  return (
    <main className="min-h-screen bg-mint-pale flex flex-col">
      {/* Nav */}
      <nav className="px-6 md:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo-wide.png" alt="lil leaps" width={120} height={36} className="h-9 w-auto" />
        </Link>
        <Link
          href="/"
          className="text-sm font-bold text-navy hover:text-coral transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-[480px]">
          <h1 className="font-nunito text-3xl md:text-4xl font-black text-navy text-center mb-2">
            Need help? 💌
          </h1>
          <p className="text-center text-text-light mb-8">
            We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you as soon as we can.
          </p>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-[0_4px_20px_rgba(45,59,78,0.06)]">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-xl font-extrabold text-navy mb-2">Message sent!</h2>
              <p className="text-text-light text-sm">
                We&apos;ll get back to you at the email you provided. Thanks for reaching out!
              </p>
              <Link
                href="/"
                className="inline-block mt-6 bg-coral text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-coral-dark transition-all"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(45,59,78,0.06)] flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-navy mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-mint rounded-xl font-nunito text-sm bg-white text-navy outline-none focus:border-coral transition-colors"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-navy mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-mint rounded-xl font-nunito text-sm bg-white text-navy outline-none focus:border-coral transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-navy mb-1.5">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-mint rounded-xl font-nunito text-sm bg-white text-navy outline-none focus:border-coral transition-colors resize-none"
                  placeholder="Tell us what's going on..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-coral text-white py-3.5 rounded-xl font-extrabold text-base hover:bg-coral-dark transition-all shadow-[0_4px_15px_rgba(242,112,109,0.25)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
