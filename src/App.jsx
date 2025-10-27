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
  Clock,
  Edit3,
  MessageCircle,
  MessageCircleQuestion,
  Info,
} from "lucide-react";

// Criando links de navegação
const navLinks = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#testmonials", label: "Clientes" },
  { href: "#pricing", label: "Planos" },
  { href: "#faq", label: "Dúvidas" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      {/* Navbar */}

      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Brandify</span>
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
                    <span className="font-semibold">Brandify</span>
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
            Crie uma presença digital autêntica, com design elegante,
            performance otimizada e resultados que realmente fazem diferença.
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
            className="mt-14 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"
          >
            {[
              {
                label: "Velocidade",
                desc: "Carregamento instantâneo e navegação fluida em qualquer dispositivo.",
              },
              {
                label: "Segurança",
                desc: "Seu site protegido com criptografia e práticas modernas de proteção.",
              },
              {
                label: "Conversão",
                desc: "Layouts estratégicos que aumentam cliques e resultados de vendas.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="rounded-2xl border flex flex-col border-white/10 bg-white/[0.02] p-6"
              >
                <div className="flex items-center gap-3">
                  {i == 0 && <Zap className="size-5 text-emerald-400" />}
                  {i == 1 && <Shield className="size-5 text-sky-400" />}
                  {i == 2 && <Star className="size-5 text-amber-400" />}
                  <div className="font-semibold">{item.label}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}

      <section id="features" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">
          Tudo o que você precisa em um só lugar
        </h2>
        <p className="text-slate-300 mt-2 max-w-2xl">
          Recursos pensados para ajudar você a construir páginas incríveis,
          rápidas e totalmente personalizáveis, sem complicações.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Design Responsivo",
              desc: "Seu site se adapta perfeitamente a qualquer dispositivo, do celular ao desktop.",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              title: "Performance Otimizada",
              desc: "Carregamento rápido com boas práticas de código e otimização de assets.",
              icon: <Zap className="size-5 text-emerald-400" />,
            },
            {
              title: "Segurança Garantida",
              desc: "Proteção de dados e conexões seguras com HTTPS e criptografia.",
              icon: <Shield className="size-5 text-sky-400" />,
            },
            {
              title: "SEO Integrado",
              desc: "Apareça nos resultados do Google com técnicas modernas de otimização.",
              icon: <Star className="size-5 text-amber-400" />,
            },
            {
              title: "Fácil Personalização",
              desc: "Edite cores, textos e imagens sem precisar alterar o código-fonte.",
              icon: <Edit3 className="size-5 text-red-400" />,
            },
            {
              title: "Suporte Dedicado",
              desc: "Conte com uma equipe pronta pra te ajudar em cada etapa do projeto.",
              icon: <MessageCircle className="size-5 text-pink-400" />,
            },
          ].map((f, i) => (
            <div
              key={`${f.title}-${i}`}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3">
                {f.icon}
                <p className="font-semibold">{f.title}</p>
              </div>
              <p className="text-sm font-slate-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="testmonials" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Quem usou, Aprovou</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              coment:
                "A interface ficou incrível! O site carrega rápido e o design é exatamente o que eu queria.",
              person: " — Lucas Ferreira, Desenvolvedor Front-end",
            },
            {
              coment:
                "Depois que lancei meu site com essa plataforma, as conversões aumentaram em 30%!",
              person: "— Ana Smith, Empreendedora Digital",
            },
            {
              coment:
                "Fiquei impressionado com a praticidade. Em menos de uma hora, minha landing page estava pronta e otimizada para SEO.",
              person: "— Rodrigo Martins, Desenvolvedor FullStack",
            },
          ].map((i, index) => (
            <blockquote
              key={`testimonial-${index}`}
              className="rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-300">{i.coment}</p>
              <footer className="mt-3 text-sm text-slate-300">
                {i.person}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Preço */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-8 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold">Preço único, Sem Complicação</h2>
            <p className="text-slate-300 mt-6 max-w-2xl">
              Pague apenas uma vez e tenha acesso a todos os recursos que
              precisa para lançar, gerenciar e evoluir seu site com facilidade.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Acesso vitalício
                às atualizações
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Suporte técnico
                sempre disponível
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Painel simples e
                intuitivo para gerenciar tudo
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <div className="text-sm text-slate-400">A partir de</div>
            <div className="text-5xl font-extrabold mt-2">R$ 199,90</div>
            <div className="flex text-sm text-slate-300 mt-4 gap-2 items-center">
              {" "}
              <Clock className="size-4 text-fuchsia-400" /> Somente Hoje!
            </div>
            <button className="mt-6 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-700 px-6 py-3 font-medium cursor-pointer transition">
              Comprar
            </button>
          </div>
        </div>
      </section>

      {/* FAQ - Ajuda */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Profissional e direto</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              question: "Preciso saber programar para usar o site da Brandify?",
              response:
                "Não! A plataforma foi desenvolvida para ser totalmente intuitiva. Você pode personalizar textos, cores e imagens facilmente, sem precisar escrever uma única linha de código.",
            },
            {
              question: "O site é otimizado para dispositivos móveis?",
              response:
                "Sim. Todos os layouts são responsivos e se adaptam automaticamente a qualquer tamanho de tela, seja celular, tablet ou computador.",
            },
            {
              question: "Terei suporte caso precise de ajuda?",
              response:
                "Claro! Oferecemos suporte dedicado via chat e e-mail, pronto para te auxiliar em cada etapa da sua jornada digital.",
            },
          ].map((i, index) => (
            <blockquote
              key={`faq-${index}`}
              className="rounded-2xl border border-white/10 p-6"
            >
              <h2 className="mt-3 text-slate-300 font-extrabold text-2xl">
                {i.question}
              </h2>

              <p className="mt-3 text-sm text-slate-400">{i.response}</p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-wrap items-center justify-center lg:justify-between md:justify-between gap-4">
          <div>Brandify @ {new Date().getFullYear()}</div>
          <div className="flex flex-wrap gap-4 justify-center items-center lg:justify-between md:justify-between">
            <a
              href="#"
              className="text-slate-300 hover:text-fuchsia-300 transition"
            >
              Política de privacidade
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-fuchsia-300 transition"
            >
              Contato
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-fuchsia-300 transition"
            >
              Ajuda
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
