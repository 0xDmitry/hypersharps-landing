type WaitlistFormProps = {
  activeTab: 'sharp' | 'allocator';
  onSelectWaitlistTab: (tab: 'sharp' | 'allocator') => void;
};

function SharpForm() {
  return (
    <form className="p-8 md:p-16 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Name</label>
          <input
            className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
            placeholder="Full Name / Handle"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Email</label>
          <input
            className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
            placeholder="example@email.com"
            type="email"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">X profile</label>
        <input
          className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Discord or Telegram</label>
        <input
          className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Polymarket profile</label>
        <input
          className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none resize-none"
          placeholder="https://polymarket.com/@username"
          type="url"
        ></input>
      </div>
      <div className="flex flex-col gap-4">
        <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Describe your edge</label>
        <textarea
          className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none resize-none"
          placeholder="Brief description of trading edge / market focus"
          rows={5}
        ></textarea>
      </div>
      <button
        className="w-full bg-primary text-on-primary py-6 font-headline font-bold text-xl uppercase tracking-[0.2em] hover:brightness-110 transition-all kinetic-glow cursor-pointer"
        type="button"
      >
        Submit
      </button>
    </form>
  );
}

function AllocatorForm() {
  return (
    <form className="p-8 md:p-16 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Name</label>
          <input
            className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
            placeholder="Full Name / Handle"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Email</label>
          <input
            className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
            placeholder="example@email.com"
            type="email"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">X profile</label>
        <input
          className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Discord or Telegram</label>
        <input
          className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="block font-headline text-xs uppercase tracking-[0.3em] text-primary">Type of allocation</label>
        <input
          className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none"
          placeholder="individual / DAO / protocol / prop firm"
          type="text"
        />
      </div>
      <button
        className="w-full bg-primary text-on-primary py-6 font-headline font-bold text-xl uppercase tracking-[0.2em] hover:brightness-110 transition-all kinetic-glow cursor-pointer"
        type="button"
      >
        Submit
      </button>
    </form>
  );
}

export default function WaitlistForm({ activeTab, onSelectWaitlistTab }: WaitlistFormProps) {
  return (
    <section className="px-6 py-24 sm:py-28 md:py-40 bg-background" id="application">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter mb-6 sm:mb-8">Join the Vanguard</h2>
        </div>
        <div className="bg-surface border border-white/10">
          <div className="border-b border-white/10 bg-surface px-8 pt-8 md:px-16 md:pt-10">
            <div className="flex bg-background p-1">
              <button
                onClick={() => onSelectWaitlistTab('sharp')}
                className={`flex-1 py-5 font-headline font-bold uppercase tracking-widest transition-all ${activeTab === 'sharp' ? 'text-primary border-b-2 border-primary bg-surface-container' : 'text-on-surface-variant hover:text-on-surface'} cursor-pointer`}
              >
                Sharp Application
              </button>
              <button
                onClick={() => onSelectWaitlistTab('allocator')}
                className={`flex-1 py-5 font-headline font-bold uppercase tracking-widest transition-all ${activeTab === 'allocator' ? 'text-primary border-b-2 border-primary bg-surface-container' : 'text-on-surface-variant hover:text-on-surface'} cursor-pointer`}
              >
                Allocators Waitlist
              </button>
            </div>
          </div>
          {activeTab === 'sharp' ? (
            <SharpForm />
          ) : (
            <AllocatorForm />
          )}
        </div>
      </div>
    </section>
  );
}
