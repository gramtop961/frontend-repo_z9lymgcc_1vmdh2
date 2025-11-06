import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

export default function About() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Three.js / Spline',
    'Tailwind CSS',
    'Framer Motion',
    'Node.js',
    'FastAPI',
  ];

  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-white">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            ABOUT
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Creative developer with a love for playful interfaces
          </h2>
          <p className="mt-4 text-slate-300">
            I blend engineering with design to build immersive, performant websites. My focus is on
            clean architectures, smooth motion, and accessible experiences that feel alive.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <Code2 className="h-4 w-4 text-cyan-400" /> Tech Stack
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-lg bg-slate-800/60 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <p className="text-4xl font-extrabold text-cyan-400">4+</p>
            <p className="mt-1 text-sm text-slate-300">Years building for the web</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <p className="text-4xl font-extrabold text-cyan-400">20+</p>
            <p className="mt-1 text-sm text-slate-300">Projects shipped</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <p className="text-4xl font-extrabold text-cyan-400">3D</p>
            <p className="mt-1 text-sm text-slate-300">Interactive experiences</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <p className="text-4xl font-extrabold text-cyan-400">∞</p>
            <p className="mt-1 text-sm text-slate-300">Curiosity & craft</p>
          </div>
        </div>
      </div>
    </section>
  );
}
