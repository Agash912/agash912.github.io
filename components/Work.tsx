"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const papers = [
  {
    title:
      "Hybridizing Differential Evolution with Deep Reinforcement Learning",
    desc: "Combined evolutionary search with deep RL for NP-hard seed set optimization.",
    link: "https://oaji.net/articles/2023/3603-1719547116.pdf",
  },
  {
    title: "Evolving XGBoost Hyperparameters for Link Prediction",
    desc: "Differential Evolution over XGBoost\u2019s config space. Better accuracy, no grid search.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-28180-8_11",
  },
  {
    title: "Flow Pattern Prediction in Two-Phase Liquids",
    desc: "Collaboration with Federal University of Technology, Nigeria. Tree-based AutoML for multiphase pipe flow.",
    link: "https://ojs.srce.hr/rgn/article/view/29467",
  },
  {
    title: "Evaluation of Evolutionary Algorithms on Solving the Influence Maximization",
    desc: "Systematic evaluation of evolutionary metaheuristics on large-scale networks.",
    link: "https://mecs-press.net/ijmecs/ijmecs-v16-n2/v16n2-7.html",
  },
  {
    title: "Genetic Algorithms vs. Reinforcement Learning",
    desc: "Two optimization paradigms head-to-head. Where each wins, where assumptions break.",
    link: "https://ojs.wiserpub.com/index.php/RRCS/article/view/2642/1334",
  },
  {
    title: "Influence Propagation Models in Social Networks",
    desc: "Evaluating IC, LT, and variants. Which propagation assumptions hold at scale.",
    link: "https://doi.org/10.1109/InCACCT57535.2023.10141772",
  },
];

const ventures = [
  {
    name: "Nedil AI",
    desc: "Real-time AI voice translation. On the App Store.",
    live: true,
    link: "https://apps.apple.com/us/app/nedil-ai/id6738028938",
  },
  {
    name: "Highten AI",
    desc: "Describe a SaaS idea in plain English. Get the app, billing, analytics.",
    live: false,
    link: "https://highten.ink",
  },
  {
    name: "Alpha Channel",
    desc: "Product screenshots in, cinematic launch video out. Seconds, not weeks.",
    live: false,
    link: null,
  },
  {
    name: "Poligovern",
    desc: "Open-source AI governance. Policy as code, PII redaction, audit trails.",
    live: false,
    link: null,
  },
  {
    name: "Spectra AI",
    desc: "Plain English to valid SysML v2 models, diagrams, and compliance docs.",
    live: false,
    link: null,
  },
  {
    name: "Voro AI",
    desc: "AI agent that sees your screen and acts through natural language.",
    live: false,
    link: null,
  },
];

const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-fg-muted/30 group-hover:text-fg-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
  >
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

function SectionHeader({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <AnimatedSection>
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[13px] text-fg-secondary tabular-nums">
          {number}
        </span>
        <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-fg-primary">
          {label}
        </span>
      </div>
      {children}
    </AnimatedSection>
  );
}

export function Work() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Research */}
        <div id="research" className="mb-24 sm:mb-32">
          <SectionHeader number="01" label="Research">
            <p className="text-[17px] text-fg-muted leading-relaxed mb-8 max-w-lg">
              How do you make ML algorithms work better? Not more data, not
              bigger models. Better mechanics.
            </p>
          </SectionHeader>

          <StaggerContainer className="space-y-0" staggerDelay={0.04}>
            {papers.map((paper, i) => (
              <StaggerItem key={i}>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 py-4 border-b border-[var(--divider)]"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[17px] font-medium text-fg-primary leading-snug group-hover:text-fg-primary transition-colors duration-200">
                      {paper.title}
                    </h3>
                    <p className="text-[15px] text-fg-muted leading-relaxed mt-1.5">
                      {paper.desc}
                    </p>
                  </div>
                  <div className="pt-1 shrink-0">
                    <Arrow />
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Ventures */}
        <div id="ventures">
          <SectionHeader number="02" label="Ventures">
            <p className="text-[17px] text-fg-muted leading-relaxed mb-8 max-w-lg">
              Building products with{" "}
              <a
                href="https://kirankannan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-secondary hover:text-fg-primary transition-colors duration-200 underline decoration-[var(--divider-strong)] underline-offset-[3px]"
              >
                Kiran
              </a>{" "}
              and{" "}
              <a
                href="https://portfolio.zezekay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-secondary hover:text-fg-primary transition-colors duration-200 underline decoration-[var(--divider-strong)] underline-offset-[3px]"
              >
                Dharun
              </a>
              . I run the technical side.
            </p>
          </SectionHeader>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            staggerDelay={0.06}
          >
            {ventures.map((v) => {
              const card = (
                <div className="group rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 hover:border-[var(--card-border-hover)] hover:bg-[var(--card-hover-bg)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-[17px] sm:text-lg font-medium text-fg-primary group-hover:text-fg-primary transition-colors duration-200">
                        {v.name}
                      </h3>
                      {v.live && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--emerald-bg)] border border-[var(--emerald-border)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="font-mono text-[11px] tracking-wider text-emerald-400/80">
                            LIVE
                          </span>
                        </span>
                      )}
                    </div>
                    {v.link && (
                      <div className="shrink-0">
                        <Arrow />
                      </div>
                    )}
                  </div>
                  <p className="text-[15px] text-fg-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );

              return (
                <StaggerItem key={v.name}>
                  {v.link ? (
                    <a
                      href={v.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
