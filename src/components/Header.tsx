import LogoIcon from "./icons/Logo"

type HeaderProps = {
  isApplicationSubmitted: boolean
}

export default function Header({ isApplicationSubmitted }: HeaderProps) {
  return (
    <header className="absolute top-0 z-50 w-full border-b border-white/5 bg-black/90 backdrop-blur-xl sm:fixed">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="/"
          aria-label="Go to home page"
          className="text-primary font-headline flex items-center gap-5 text-[2rem] font-medium tracking-tight md:text-[2.5rem]"
        >
          <LogoIcon className="h-11 w-11 md:h-12 md:w-12" />
          HYPERSHARPS
        </a>
        {!isApplicationSubmitted && (
          <a
            href="#waitlist"
            className="bg-primary text-on-primary font-headline hidden px-6 py-2.5 text-sm font-bold tracking-wider uppercase transition-all hover:brightness-110 md:inline-block"
          >
            Request Access
          </a>
        )}
      </div>
    </header>
  )
}
