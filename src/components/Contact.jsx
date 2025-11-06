import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-white">
      <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
        <Mail className="h-4 w-4 text-cyan-400" /> Let's build something great
      </div>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Contact</h2>
      <p className="mt-2 text-slate-300">Have an idea or opportunity? Drop a message and I’ll reply within 24 hours.</p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <input required name="name" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        <textarea required name="message" rows="5" placeholder="Tell me about your project" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-cyan-400">
          Send Message
          <Send className="h-4 w-4" />
        </button>
      </form>
      {status && (
        <p className="mt-4 text-sm text-cyan-300">{status}</p>
      )}

      <p className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Victor Chiromo. All rights reserved.</p>
    </section>
  );
}
