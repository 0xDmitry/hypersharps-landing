import LogoIcon from './icons/LogoIcon';
import XIcon from './icons/XIcon';

export default function Footer() {
  return (
    <footer className="bg-black w-full px-6 py-8 sm:py-12 lg:py-16 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-2 gap-4 sm:gap-10 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
        <div className="space-y-2 sm:space-y-6">
          <div className="flex items-center gap-3 text-2xl font-medium tracking-tighter text-primary font-headline uppercase">
            <LogoIcon className="h-8 w-8" />
            HyperSharps
          </div>
          <p className="text-on-surface-variant text-sm max-w-sm uppercase">
            Permissionless prediction markets infrastructure for the next generation of truth seekers
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-end gap-6 sm:gap-10 lg:gap-16">
          <div className="space-y-3 sm:space-y-4 md:items-end md:flex md:flex-col">
            <h4 className="font-headline text-sm uppercase tracking-[0.3em] text-primary">Socials</h4>
            <div className="flex md:justify-end w-full">
              <a
                href="#"
                aria-label="HyperSharps on X"
                className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase inline-flex h-11 w-11 items-center justify-center"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:mt-8 lg:mt-14 pt-4 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
        <div className="order-2 md:order-1 text-on-surface-variant font-headline text-[10px] uppercase tracking-[0.4em]">
          © 2026 HyperSharps
        </div>
        <div className="order-1 md:order-2 text-on-surface-variant font-headline text-[10px] uppercase tracking-[0.4em]">
          <span className="block md:inline">System: Initializing / </span>
          <span className="block md:inline">Protocol: Early access</span>
        </div>
      </div>
    </footer>
  );
}
