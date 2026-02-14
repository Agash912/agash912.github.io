"use client";

import { AnimatedSection } from "./AnimatedSection";

const links = [
  {
    label: "Email",
    value: "agash912@gmail.com",
    href: "mailto:agash912@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "agash-uthayasuriyan",
    href: "https://www.linkedin.com/in/agash-uthayasuriyan/",
  },
  {
    label: "GitHub",
    value: "Agash912",
    href: "https://github.com/Agash912",
  },
];

export function Contact() {
  return (
    <section id="contact" className="pb-24 sm:pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[11px] text-text-muted/40 tabular-nums">
              03
            </span>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-muted/60">
              Contact
            </span>
          </div>
          <p className="text-[15px] text-text-muted mb-8">
            Always happy to chat.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-white/[0.06]"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-muted/40 w-16">
                    {link.label}
                  </span>
                  <span className="text-[15px] text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                    {link.value}
                  </span>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-text-muted/30 group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
