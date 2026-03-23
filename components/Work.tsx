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
    desc: "Differential Evolution over XGBoost's config space. Better accuracy, no grid search.",
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
    desc: "Real-time voice translation. Speak in your language, hear it back in 20+ others. Whisper, GPT-4, ElevenLabs. Live on the App Store.",
    live: true,
    link: "https://apps.apple.com/us/app/nedil-ai/id6757962583",
  },
  {
    name: "Zenin AI",
    desc: "AI voice agent that makes phone calls on your behalf. Appointments, reservations, inquiries. LangGraph + ElevenLabs + Twilio.",
    live: false,
    link: "https://github.com/TheStartUp-ADK/Voro",
  },
  {
    name: "Voro AI",
    desc: "AI desktop automation. Describe what you want in plain English, it sees your screen, plans the steps, and executes. Works on any app.",
    live: false,
    link: "https://kirankannan.com/Voro%20AI/Voro_OnePager.pdf",
  },
  {
    name: "Poligovern",
    desc: "Open-source AI governance library. PII redaction before LLM calls, policy as code, audit trails to your data warehouse.",
    live: false,
    link: "https://kirankannan.com/Poligovern/Poligovern_PitchDeck.pdf",
  },
];

const Arrow = () => (
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
        <span className="font-mono text-sm text-accent/60 tabular-nums">
          {number}
        </span>
        <span className="text-sm font-medium tracking-[0.2em] uppercase text-fg-primary">
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
        <div id="research" className="mb-20 sm:mb-28">
          <SectionHeader number="01" label="Research">
            <p className="text-lg text-fg-muted leading-relaxed mb-8 max-w-lg">
              I like figuring out how to make ML algorithms work better.
              Not more data, not bigger models. Better mechanics.
            </p>
          </SectionHeader>

          <StaggerContainer className="space-y-0" staggerDelay={0.04}>
            {papers.map((paper, i) => (
              <StaggerItem key={i}>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 py-4 border-b border-[var(--divider)] hover:border-accent/20 transition-colors duration-300"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[17px] font-medium text-fg-primary leading-snug group-hover:text-accent transition-colors duration-200">
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
            <p className="text-lg text-fg-muted leading-relaxed mb-8 max-w-lg">
              Co-founded with{" "}
              <a
                href="https://kirankannan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-secondary hover:text-accent transition-colors duration-200 underline decoration-accent/20 underline-offset-[3px]"
              >
                Kiran
              </a>{" "}
              and{" "}
              <a
                href="https://portfolio.zezekay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-secondary hover:text-accent transition-colors duration-200 underline decoration-accent/20 underline-offset-[3px]"
              >
                Dharun
              </a>
              . I own the engineering end to end.
            </p>
          </SectionHeader>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            staggerDelay={0.06}
          >
            {ventures.map((v) => {
              const card = (
                <div className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 hover:border-accent/20 hover:bg-[var(--card-hover-bg)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-medium text-fg-primary group-hover:text-accent transition-colors duration-200">
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
                    <div className="shrink-0">
                      <Arrow />
                    </div>
                  </div>
                  <p className="text-[15px] text-fg-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );

              return (
                <StaggerItem key={v.name}>
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {card}
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
