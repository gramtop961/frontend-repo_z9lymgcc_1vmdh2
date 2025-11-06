import React from 'react';
import { Rocket, User, FolderGit2, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-md">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-tight">Victor</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white inline-flex items-center gap-1"><User className="h-4 w-4"/>About</a>
            <a href="#projects" className="hover:text-white inline-flex items-center gap-1"><FolderGit2 className="h-4 w-4"/>Projects</a>
            <a href="#contact" className="hover:text-white inline-flex items-center gap-1"><Mail className="h-4 w-4"/>Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
