import LogoIcon from "./icons/Logo"
import XIcon from "./icons/X"

type FooterProps = {
  isApplicationSubmitted: boolean
}

export default function Footer({ isApplicationSubmitted }: FooterProps) {
  return (
    <footer className="w-full border-t border-white/5 bg-black px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div className="text-primary font-headline flex items-center gap-3 text-2xl font-medium tracking-tight uppercase">
            <LogoIcon className="h-8 w-8" />
            HyperSharps
          </div>
          <p className="text-on-surface-variant max-w-sm text-sm uppercase">
            The allocation and discovery layer for prediction market talent
          </p>
        </div>
        <div className="flex flex-col gap-16 md:flex-row md:justify-end">
          <div className="space-y-4">
            <h4 className="font-headline text-primary text-xs tracking-[0.3em] uppercase">
              Socials
            </h4>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="https://x.com/HyperSharps"
                target="_blank"
                rel="noreferrer"
                aria-label="HyperSharps on X"
                className="text-on-surface-variant hover:text-primary flex h-11 w-11 items-center justify-center gap-2 text-sm uppercase transition-colors"
              >
                <XIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center md:flex-row md:text-left">
        <div className="text-on-surface-variant font-headline text-[10px] tracking-[0.4em] uppercase">
          © 2026 HyperSharps
        </div>
        <div className="text-on-surface-variant font-headline text-[10px] tracking-[0.4em] uppercase">
          {isApplicationSubmitted
            ? "System: Activated / "
            : "System: Initializing / "}
          Protocol: Early access
        </div>
      </div>
    </footer>
  )
}
