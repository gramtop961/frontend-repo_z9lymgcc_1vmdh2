import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const items = [
  {
    title: 'Immersive 3D Landing',
    desc: 'WebGL + motion-driven hero with Spline/Three.js and responsive UI.',
    tags: ['Spline', 'Framer Motion', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Data-rich dashboards with delightful micro-interactions and charts.',
    tags: ['React', 'TypeScript', 'API'],
    link: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Motion Store',
    desc: 'High-performance storefront with animated product exploration.',
    tags: ['Next.js', 'Stripe', 'Animations'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-white">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Selected Work</h2>
        <a href="#contact" className="text-sm text-cyan-400 hover:text-cyan-300">Start a project →</a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-slate-800 to-slate-900" />
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
              {p.tags.map((t) => (
                <li key={t} className="rounded-md bg-slate-800/60 px-2 py-0.5 ring-1 ring-white/10">{t}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <a href={p.link} className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="h-4 w-4" /> Live
              </a>
              <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white">
                <Github className="h-4 w-4" /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
