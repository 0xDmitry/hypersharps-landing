type WaitlistFormProps = {
  activeTab: "sharp" | "allocator"
  onSelectWaitlistTab: (tab: "sharp" | "allocator") => void
}

function SharpForm() {
  return (
    <form className="space-y-10 p-8 md:p-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
            Name
          </label>
          <input
            className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
            placeholder="Full Name / Handle"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
            Email
          </label>
          <input
            className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
            placeholder="example@email.com"
            type="email"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
          X profile
        </label>
        <input
          className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
          Discord or Telegram
        </label>
        <input
          className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
          Polymarket profile
        </label>
        <input
          className="bg-background focus:border-primary text-on-surface w-full resize-none border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
          placeholder="https://polymarket.com/@username"
          type="url"
        ></input>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
          Describe your edge
        </label>
        <textarea
          className="bg-background focus:border-primary text-on-surface w-full resize-none border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
          placeholder="Brief description of trading edge / market focus"
          rows={5}
        ></textarea>
      </div>
      <button
        className="bg-primary text-on-primary font-headline kinetic-glow w-full cursor-pointer py-6 text-xl font-bold tracking-[0.2em] uppercase transition-all hover:brightness-110"
        type="button"
      >
        Submit
      </button>
    </form>
  )
}

function AllocatorForm() {
  return (
    <form className="space-y-10 p-8 md:p-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
            Name
          </label>
          <input
            className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
            placeholder="Full Name / Handle"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
            Email
          </label>
          <input
            className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
            placeholder="example@email.com"
            type="email"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
          X profile
        </label>
        <input
          className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
          Discord or Telegram
        </label>
        <input
          className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-headline text-primary block text-xs tracking-[0.3em] uppercase">
          Type of allocation
        </label>
        <input
          className="bg-background focus:border-primary text-on-surface w-full border border-white/10 px-6 py-4 uppercase transition-all outline-none placeholder:text-white/20 focus:ring-0"
          placeholder="individual / DAO / protocol / prop firm"
          type="text"
        />
      </div>
      <button
        className="bg-primary text-on-primary font-headline kinetic-glow w-full cursor-pointer py-6 text-xl font-bold tracking-[0.2em] uppercase transition-all hover:brightness-110"
        type="button"
      >
        Submit
      </button>
    </form>
  )
}

export default function WaitlistForm({
  activeTab,
  onSelectWaitlistTab,
}: WaitlistFormProps) {
  return (
    <section
      className="bg-background px-6 py-24 sm:py-28 md:py-40"
      id="application"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <h2 className="font-headline mb-6 text-4xl font-bold tracking-tighter uppercase sm:mb-8 sm:text-5xl md:text-7xl">
            Join the Vanguard
          </h2>
        </div>
        <div className="bg-surface border border-white/10">
          <div className="bg-surface border-b border-white/10 px-8 pt-8 md:px-16 md:pt-10">
            <div className="bg-background flex p-1">
              <button
                onClick={() => onSelectWaitlistTab("sharp")}
                className={`font-headline flex-1 py-5 font-bold tracking-widest uppercase transition-all ${activeTab === "sharp" ? "text-primary border-primary bg-surface-container border-b-2" : "text-on-surface-variant hover:text-on-surface"} cursor-pointer`}
              >
                Sharp Application
              </button>
              <button
                onClick={() => onSelectWaitlistTab("allocator")}
                className={`font-headline flex-1 py-5 font-bold tracking-widest uppercase transition-all ${activeTab === "allocator" ? "text-primary border-primary bg-surface-container border-b-2" : "text-on-surface-variant hover:text-on-surface"} cursor-pointer`}
              >
                Allocators Waitlist
              </button>
            </div>
          </div>
          {activeTab === "sharp" ? <SharpForm /> : <AllocatorForm />}
        </div>
      </div>
    </section>
  )
}
