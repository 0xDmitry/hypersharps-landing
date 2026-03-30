import LogoIcon from "./icons/Logo"
import XIcon from "./icons/X"

type FooterProps = {
  isApplicationSubmitted: boolean
}

export default function Footer({ isApplicationSubmitted }: FooterProps) {
  return (
    <footer className="w-full border-t border-white/5 bg-black px-6 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-2 sm:space-y-6">
          <div className="text-primary font-headline flex items-center gap-3 text-2xl font-medium tracking-tight uppercase">
            <LogoIcon className="h-8 w-8" />
            HyperSharps
          </div>
          <p className="text-on-surface-variant max-w-xs text-sm uppercase">
            The allocation and discovery layer for prediction market talent
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 md:flex-row md:justify-end lg:gap-16">
          <div className="space-y-3 sm:space-y-4 md:flex md:flex-col md:items-end">
            <h4 className="font-headline text-primary text-sm tracking-[0.3em] uppercase">
              Socials
            </h4>
            <div className="flex w-full md:justify-end">
              <a
                href="https://x.com/HyperSharps"
                target="_blank"
                rel="noreferrer"
                aria-label="HyperSharps on X"
                className="text-on-surface-variant hover:text-primary inline-flex h-11 w-11 items-center justify-center text-sm uppercase transition-colors"
              >
                <XIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/5 pt-4 sm:mt-8 sm:gap-4 sm:pt-8 md:flex-row md:items-center lg:mt-14">
        <div className="text-on-surface-variant font-headline order-2 text-[10px] tracking-[0.4em] uppercase md:order-1">
          © 2026 HyperSharps
        </div>
        <div className="text-on-surface-variant font-headline order-1 text-[10px] tracking-[0.4em] uppercase md:order-2">
          <span className="block md:inline">
            {isApplicationSubmitted
              ? "System: Activated / "
              : "System: Initializing / "}
          </span>
          <span className="block md:inline">Protocol: Early access</span>
        </div>
      </div>
    </footer>
  )
}
