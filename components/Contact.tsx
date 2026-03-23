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
            <span className="font-mono text-sm text-accent/60 tabular-nums">
              03
            </span>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-fg-primary">
              Contact
            </span>
          </div>
          <p className="text-lg text-fg-muted mb-10">
            Always happy to chat!
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
                className="group flex items-center justify-between py-5 border-b border-[var(--divider)] hover:border-accent/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[13px] tracking-[0.15em] uppercase text-fg-muted w-20">
                    {link.label}
                  </span>
                  <span className="text-lg text-fg-primary group-hover:text-accent transition-colors duration-200">
                    {link.value}
                  </span>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-fg-muted/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
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
