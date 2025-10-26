import { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";

// Criando links de navegação
const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testmonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      {/* Navbar */}

      <header className="sticky top-0 z-40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha Marca</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-fuchsia-300 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg transition"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div
              className="fixed bg-black/60 transition"
              onClick={() => setOpen(false)}
            >
              <div className="fixed right-0 top-0 h-full w-60 bg-slate-900 border-l border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-6 text-fuchsia-400" />
                    <span className="font-semibold">Minha Marca</span>
                  </div>
                  <button
                    className="p-2 rounded-lg transition"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-6" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-slate-200"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold"
          >
            Acelere sua presença online com uma landing page
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-fuchsia-700">
              {" "}
              simples e eficaz
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-4 text-slate-400 max-w-2xl"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, sunt
            harum corrupti laudantium illo laborum necessitatibus.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-8 flex flex-row gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2
               rounded-2xl bg-fuchsia-600 px-6 py-3
                font-medium hover:bg-fuchsia-800 transition"
            >
              Comece Agora <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2
              rounded-2xl px-6 py-3 font-medium border 
              border-white/10 hover:bg-white/5 transition"
            >
              Ver Recursos
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="mt-14 grid grid-cols-3 gap-4"
          >
            {["Velocidade", "Segurança", "Conversão"].map((label, i) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="flex items-center gap-3">
                  {i == 0 && <Zap className="size-5 text-emerald-400" />}
                  {i == 1 && <Shield className="size-5 text-sky-400" />}
                  {i == 2 && <Star className="size-5 text-amber-400" />}
                  <div className="font-semibold">{label}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      
    </div>
  );
}

export default App;
