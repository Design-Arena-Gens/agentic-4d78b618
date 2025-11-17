import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.2),_transparent_60%)]" />
      <div className="absolute left-[10%] top-[18%] h-24 w-24 rounded-full border border-cyan-500/30 opacity-40" />
      <div className="absolute right-[14%] bottom-[20%] h-28 w-28 rounded-full border border-indigo-400/40 opacity-40" />

      <main className="relative flex flex-col items-center gap-12 px-8 text-center">
        <Logo className="h-72 w-72" />
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-cyan-200">
            Cyber + Photography
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            YC Studio
          </h1>
          <p className="max-w-xl text-balance text-base text-slate-200 sm:text-lg">
            Futuristic imaging studio crafting immersive visuals, neon portraits, and cybernetic
            brand experiences.
          </p>
        </div>
      </main>
    </div>
  );
}
