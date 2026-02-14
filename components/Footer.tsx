"use client";

export function Footer() {
  return (
    <footer className="pb-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[var(--divider)] mb-8" />
        <p className="text-[14px] text-fg-muted/40">
          &copy; {new Date().getFullYear()} Agash Uthayasuriyan
        </p>
      </div>
    </footer>
  );
}
