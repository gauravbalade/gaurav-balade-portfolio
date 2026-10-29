import { useState } from "react";
import { navItems } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-primary focus:px-3 focus:py-1 focus:text-primary-foreground">
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Gaurav Balade, back to top" className="font-display text-xl font-semibold">
          G<span className="text-primary">B</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="min-h-11 min-w-11 rounded-md border p-3 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden className="block h-0.5 w-5 bg-foreground" />
          <span aria-hidden className="mt-1.5 block h-0.5 w-5 bg-foreground" />
          <span aria-hidden className="mt-1.5 block h-0.5 w-5 bg-foreground" />
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t bg-background px-5 py-4 md:hidden">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-base">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
