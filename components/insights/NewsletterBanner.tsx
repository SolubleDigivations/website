"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(result.error ?? "We could not subscribe you. Please try again.");
        return;
      }

      setEmail("");
      setStatus("success");
      setMessage(result.message);
    } catch {
      setStatus("error");
      setMessage("We could not subscribe you. Please try again.");
    }
  }

  return (
    <section id="newsletter" className="container-soluble pb-20">
      <div className="relative overflow-hidden rounded-2xl bg-[#f0f0ff] px-7 py-10 md:px-12 md:py-12">
        <span className="absolute left-8 top-6 rotate-[-8deg] font-caveat text-xl">Stay in the loop. ↗</span>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div className="md:pl-28">
            <h2 className="text-3xl font-extrabold leading-none tracking-[-0.06em] md:text-4xl">
              Get new insights
              <br />
              in your inbox<span className="text-[#ff8b3d]">.</span>
            </h2>
            <p className="mt-3 text-sm">No spam. Just practical insights, case studies and updates from Soluble.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-sm rounded-full border border-border bg-white p-1.5">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={status === "submitting"}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-bold text-white disabled:cursor-wait disabled:opacity-60"
            >
              {status === "submitting" ? "Saving..." : "Subscribe"} <ArrowUpRight size={14} />
            </button>
          </form>
          {message && (
            <p className={`text-xs ${status === "error" ? "text-red-600" : "text-green-700"}`} role="status">
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
