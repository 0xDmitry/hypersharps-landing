import LogoIcon from './icons/LogoIcon';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <a
          href="/"
          aria-label="Go to home page"
          className="flex items-center gap-5 text-[2rem] md:text-[2.5rem] font-medium tracking-tighter text-primary font-headline"
        >
          <LogoIcon className="h-11 w-11 md:h-12 md:w-12" />
          HYPERSHARPS
        </a>
        <a
          href="#application"
          className="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 font-headline font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
        >
          Request Early Access
        </a>
      </div>
    </nav>
  );
}
