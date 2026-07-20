import React, { useState, useEffect, useRef } from "react";
import {
  Wifi,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Router,
  Headphones,
  ShieldCheck,
  Building2,
  Network,
  RadioTower,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  RefreshCw,
  Check,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  TOKENS                                                             */
/* ------------------------------------------------------------------ */
const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
:root{
  --bg-deep:#002611;
  --bg-base:#003311;
  --bg-panel:#004d1a;
  --neon:#00e64d;
  --neon-soft:#33ff77;
  --orange:#ff7a1a;
  --mist:#d7ecdf;
}
.font-display{font-family:'Space Grotesk',sans-serif;}
.font-body{font-family:'Inter',sans-serif;}
.signal-pulse{
  animation: signalPulse 2.6s ease-in-out infinite;
}
@keyframes signalPulse{
  0%,100%{ opacity:.35; transform: scale(0.9);}
  50%{ opacity:1; transform: scale(1);}
}
.ring-sweep{
  animation: ringSweep 3.2s linear infinite;
}
@keyframes ringSweep{
  0%{ stroke-dashoffset: 340; }
  100%{ stroke-dashoffset: 0; }
}
@keyframes floatSlow{
  0%,100%{ transform: translateY(0px); }
  50%{ transform: translateY(-10px); }
}
.float-slow{ animation: floatSlow 5s ease-in-out infinite; }
`;

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Planos", href: "#planos" },
  { label: "Fale Conosco", href: "#contato" },
  { label: "Trabalhe Conosco", href: "#trabalhe" },
];

const SLIDES = [
  {
    badge: "100% fibra óptica",
    title: "Assine agora\na melhor internet\nda região!",
    sub: "Velocidade estável, sem quedas, com instalação rápida e suporte que atende de verdade.",
  },
  {
    badge: "Wi-Fi 6 incluso",
    title: "Sua casa toda\nconectada, sem\ntravar.",
    sub: "Equipamentos premium inclusos em todos os planos, sem taxa escondida.",
  },
  {
    badge: "Suporte humanizado",
    title: "Gente de verdade\nquando você\nprecisa.",
    sub: "Atendimento local, rápido e sem robô repetindo menu sem fim.",
  },
];

const PLANS = [
  {
    speed: "600",
    equip: "AC1200",
    wifi: "Wi-Fi 5 Premium",
    highlight: false,
  },
  {
    speed: "800",
    equip: "AX1800",
    wifi: "Wi-Fi 6 Premium",
    highlight: true,
  },
  {
    speed: "1000",
    equip: "AX3000",
    wifi: "Wi-Fi 6 Premium",
    highlight: false,
  },
];

const BUSINESS_FEATURES = [
  {
    icon: Network,
    title: "IP Fixo",
    text: "Presença constante e confiável na web, com estabilidade garantida.",
  },
  {
    icon: Router,
    title: "Link Dedicado",
    text: "Conexão exclusiva para sua empresa, sem concorrer banda com ninguém.",
  },
  {
    icon: Headphones,
    title: "Suporte 24Hrs",
    text: "Time técnico exclusivo, pronto para atender a qualquer hora.",
  },
  {
    icon: ShieldCheck,
    title: "Redundância de Fibra",
    text: "Rotas alternativas de fibra garantindo continuidade do serviço.",
  },
];

const FAQS = [
  {
    q: "O que é internet 100% fibra óptica?",
    a: "É uma conexão que utiliza cabos de fibra de vidro do início ao fim, entregando mais velocidade, estabilidade e menos interferência do que a internet via rádio ou cabo metálico.",
  },
  {
    q: "Como faço para alterar minha velocidade?",
    a: "Basta entrar em contato com nosso suporte pelo WhatsApp ou telefone. A alteração de plano pode ser feita a qualquer momento, sem burocracia.",
  },
  {
    q: "Como contratar nossos planos?",
    a: "Você pode contratar direto pelo site clicando em 'Contrate Online', ou preenchendo o formulário de cobertura para que nossa equipe entre em contato.",
  },
  {
    q: "Quais são os produtos que a WiaFibra trabalha?",
    a: "Trabalhamos com internet residencial em fibra óptica, planos empresariais personalizados, IP fixo, link dedicado e suporte técnico especializado.",
  },
];

const CITIES = [
  {
    name: "Ribeirão Bonito-SP",
    address: "Rua Dr. Pirajá da Silva, 523 - Centro, Ribeirão Bonito - SP, 13580-009",
  },
  {
    name: "Dourado-SP",
    address: "Rua Coronel Francisco Martins Bonilha, 925 - Centro - Dourado/SP",
  },
];

/* ------------------------------------------------------------------ */
/*  SIGNATURE VISUAL: animated fiber signal mark                       */
/* ------------------------------------------------------------------ */
function SignalMark({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="var(--neon)"
          strokeOpacity="0.18"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="var(--neon)"
          strokeWidth="2.5"
          strokeDasharray="340"
          strokeDashoffset="0"
          strokeLinecap="round"
          className="ring-sweep"
          transform="rotate(-90 60 60)"
        />
        <g className="signal-pulse" style={{ transformOrigin: "60px 60px" }}>
          <circle cx="60" cy="60" r="6" fill="var(--neon)" />
        </g>
        <path
          d="M40 78 Q60 40 80 78"
          fill="none"
          stroke="var(--orange)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LOGO                                                                */
/* ------------------------------------------------------------------ */
function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--bg-panel)] border border-[var(--neon)]/40">
        <Wifi size={20} className="text-[var(--neon)]" strokeWidth={2.5} />
      </div>
      <span className="font-display font-bold text-xl tracking-tight text-white">
        Wia<span className="text-[var(--neon)]">Fibra</span>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 font-body transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--bg-deep)]/90 backdrop-blur border-b border-white/10 !fixed"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                i === 0
                  ? "text-white border-b-2 border-[var(--neon)] pb-1"
                  : "text-[var(--mist)]/80 hover:text-[var(--neon)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--neon)] text-[var(--bg-deep)] font-semibold text-sm px-5 py-2.5 hover:bg-[var(--neon-soft)] transition-colors shadow-[0_0_20px_-4px_var(--neon)]"
          >
            <Zap size={16} strokeWidth={2.5} />
            Contrate Online
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--bg-deep)] border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[var(--mist)]/90 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#planos"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--neon)] text-[var(--bg-deep)] font-semibold text-sm px-5 py-2.5"
          >
            <Zap size={16} strokeWidth={2.5} />
            Contrate Online
          </a>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO CAROUSEL                                                       */
/* ------------------------------------------------------------------ */
function Hero() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer.current);
  }, []);

  const go = (dir) => {
    clearInterval(timer.current);
    setIdx((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };

  const slide = SLIDES[idx];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--bg-base)] font-body pt-28 md:pt-32"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 75% 30%, rgba(0,230,77,0.25), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 15% 80%, rgba(255,122,26,0.18), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center min-h-[520px]">
        <div className="relative z-10">
          <span className="inline-block rounded-full bg-[var(--neon)] text-[var(--bg-deep)] text-xs font-bold tracking-wide px-4 py-1.5 mb-6">
            {slide.badge}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white whitespace-pre-line mb-5">
            {slide.title}
          </h1>
          <p className="text-[var(--mist)]/80 text-base md:text-lg max-w-md mb-8">
            {slide.sub}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#planos"
              className="rounded-full bg-[var(--orange)] text-white font-semibold text-sm px-6 py-3 hover:brightness-110 transition"
            >
              Ver planos
            </a>
            <a
              href="#contato"
              className="rounded-full border border-[var(--neon)]/50 text-[var(--neon)] font-semibold text-sm px-6 py-3 hover:bg-[var(--neon)]/10 transition"
            >
              Falar com consultor
            </a>
          </div>

          <div className="flex gap-2 mt-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  clearInterval(timer.current);
                  setIdx(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-[var(--neon)]" : "w-3 bg-white/25"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="float-slow">
            <SignalMark className="w-64 h-64 md:w-80 md:h-80" />
          </div>
          <div className="absolute top-4 right-4 md:right-10 bg-[var(--bg-panel)]/80 backdrop-blur border border-white/10 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
            <div className="flex items-center gap-2 font-semibold">
              <Wifi size={16} className="text-[var(--neon)]" />
              Sinal estável
            </div>
            <p className="text-[var(--mist)]/70 text-xs mt-1">99.9% uptime</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => go(-1)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(1)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition"
        aria-label="Próximo slide"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PLANOS                                                              */
/* ------------------------------------------------------------------ */
function Plans() {
  return (
    <section id="planos" className="bg-[var(--bg-deep)] font-body py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-3">
          CONHEÇA NOSSOS PLANOS DE{" "}
          <span className="text-[var(--neon)]">INTERNET</span>
        </h2>
        <p className="text-[var(--mist)]/70 text-center max-w-xl mx-auto mb-14">
          Fibra óptica de ponta a ponta, equipamentos premium inclusos e sem
          fidelidade escondida no contrato.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.speed}
              className={`relative rounded-3xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                p.highlight
                  ? "bg-[var(--bg-panel)] border-[var(--neon)] shadow-[0_0_40px_-10px_var(--neon)] md:scale-105"
                  : "bg-[var(--bg-base)] border-white/10 hover:border-[var(--neon)]/50"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--orange)] text-white text-xs font-bold px-4 py-1">
                  MAIS ESCOLHIDO
                </span>
              )}
              <div className="mb-6">
                <span className="font-display font-bold text-5xl text-white">
                  {p.speed}
                </span>
                <p className="font-display font-bold text-lg tracking-widest text-[var(--neon)]">
                  MEGA
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <PlanItem icon={Wifi} text="100% Fibra Óptica" />
                <PlanItem icon={Router} text={`Equipamento ${p.equip}`} />
                <PlanItem icon={RadioTower} text={p.wifi} />
                <PlanItem icon={Headphones} text="Suporte Humanizado" />
              </ul>

              <a
                href="#contato"
                className={`text-center rounded-full font-semibold text-sm px-6 py-3 transition ${
                  p.highlight
                    ? "bg-[var(--neon)] text-[var(--bg-deep)] hover:bg-[var(--neon-soft)]"
                    : "bg-white/5 text-white border border-white/15 hover:border-[var(--neon)]/60"
                }`}
              >
                Contratar plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanItem({ icon: Icon, text }) {
  return (
    <li className="flex items-center gap-3 text-sm text-[var(--mist)]/90">
      <span className="w-7 h-7 rounded-lg bg-[var(--neon)]/10 flex items-center justify-center shrink-0">
        <Icon size={14} className="text-[var(--neon)]" />
      </span>
      {text}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  EMPRESARIAL                                                         */
/* ------------------------------------------------------------------ */
function Business() {
  return (
    <section id="sobre" className="font-body">
      <div className="relative bg-gradient-to-r from-[var(--bg-panel)] via-[var(--bg-panel)] to-[var(--orange)]/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <Building2 size={28} className="text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                Plano Empresarial
              </h3>
              <p className="text-white/85 text-sm mt-1">
                Projeto <strong>personalizado</strong> para sua empresa.
              </p>
            </div>
          </div>
          <div className="flex md:justify-end">
            <a
              href="#contato"
              className="rounded-full bg-white text-[var(--bg-deep)] font-semibold text-sm px-6 py-3 hover:bg-white/90 transition"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[var(--bg-base)] py-16 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-12">
            PLANOS <span className="text-[var(--neon)]">PERSONALIZADOS</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUSINESS_FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-[var(--bg-panel)]/60 border border-white/10 p-6 hover:border-[var(--neon)]/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--neon)]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[var(--neon)]" />
                </div>
                <h4 className="font-display font-semibold text-white mb-2">
                  {title}
                </h4>
                <p className="text-[var(--mist)]/70 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COBERTURA + RENOVA                                                  */
/* ------------------------------------------------------------------ */
function CoverageAndRenew() {
  const [form, setForm] = useState({ nome: "", endereco: "", cep: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="font-body">
      <div className="bg-[var(--bg-panel)] py-10 px-5 md:px-8 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-white font-display font-bold text-xl mb-6">
            Consulte área de cobertura
          </h3>
          <form
            onSubmit={submit}
            className="flex flex-col md:flex-row gap-3 md:items-center"
          >
            <input
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Nome"
              className="flex-1 rounded-full bg-white text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-5 py-3 outline-none focus:ring-2 focus:ring-[var(--neon)]"
            />
            <input
              value={form.endereco}
              onChange={(e) => setForm({ ...form, endereco: e.target.value })}
              placeholder="Endereço"
              className="flex-1 rounded-full bg-white text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-5 py-3 outline-none focus:ring-2 focus:ring-[var(--neon)]"
            />
            <input
              value={form.cep}
              onChange={(e) => setForm({ ...form, cep: e.target.value })}
              placeholder="CEP"
              className="md:w-40 rounded-full bg-white text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-5 py-3 outline-none focus:ring-2 focus:ring-[var(--neon)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--neon)] text-[var(--bg-deep)] font-semibold text-sm px-7 py-3 hover:bg-[var(--neon-soft)] transition"
            >
              {sent ? "Enviado!" : "Enviar"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[var(--bg-base)] to-[var(--orange)]/25 py-14 px-5 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-14 h-14 rounded-2xl bg-[var(--neon)]/15 flex items-center justify-center shrink-0">
            <RefreshCw size={26} className="text-[var(--neon)]" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              PLANO RENOVA
            </h3>
            <p className="text-[var(--mist)]/80 text-sm max-w-md">
              Você que já é cliente WiaFibra, temos uma oferta ainda mais{" "}
              <strong className="text-white">imperdível</strong> para você
              continuar conectado.
            </p>
          </div>
          <a
            href="#contato"
            className="rounded-full bg-[var(--neon)] text-[var(--bg-deep)] font-semibold text-sm px-6 py-3 whitespace-nowrap hover:bg-[var(--neon-soft)] transition"
          >
            Entre em contato e saiba mais!
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ + CONTATO                                                       */
/* ------------------------------------------------------------------ */
function FaqItem({ q, a, open, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-display font-semibold text-white text-base pr-4">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-[var(--neon)] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[var(--mist)]/70 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function FaqAndContact() {
  const [openIdx, setOpenIdx] = useState(0);
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ nome: "", email: "", mensagem: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contato" className="bg-[var(--bg-deep)] font-body py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        <div>
          <h3 className="font-display font-bold text-3xl text-white mb-8">
            Perguntas <span className="text-[var(--neon)]">Frequentes</span>
          </h3>
          <div>
            {FAQS.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        <div className="bg-[var(--bg-panel)] rounded-3xl p-8 border border-white/10 h-fit">
          <h3 className="font-display font-bold text-2xl text-white mb-6">
            Quero a melhor Internet da Região!
          </h3>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <input
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Nome"
              className="rounded-xl bg-white/95 text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--neon)]"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="E-mail"
              className="rounded-xl bg-white/95 text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--neon)]"
            />
            <textarea
              required
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              placeholder="Mensagem"
              rows={4}
              className="rounded-xl bg-white/95 text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[var(--neon)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--orange)] text-white font-semibold text-sm px-6 py-3.5 hover:brightness-110 transition"
            >
              {sent ? "Mensagem enviada!" : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MAPA + FOOTER                                                       */
/* ------------------------------------------------------------------ */
function MapSection() {
  const [city, setCity] = useState(0);
  const c = CITIES[city];

  return (
    <section className="bg-[var(--bg-base)] font-body py-16 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-center font-display font-bold text-2xl text-white mb-6">
          Selecione uma cidade
        </h3>
        <div className="flex justify-center gap-3 mb-6">
          {CITIES.map((c2, i) => (
            <button
              key={c2.name}
              onClick={() => setCity(i)}
              className={`rounded-full text-sm font-semibold px-5 py-2.5 transition ${
                city === i
                  ? "bg-[var(--neon)] text-[var(--bg-deep)]"
                  : "bg-[var(--bg-panel)] text-[var(--mist)]/80 border border-white/10 hover:border-[var(--neon)]/50"
              }`}
            >
              {c2.name}
            </button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[var(--bg-panel)] relative h-72 flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,230,77,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,77,0.08) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative flex flex-col items-center gap-3 text-center px-6">
            <div className="w-12 h-12 rounded-full bg-[var(--orange)] flex items-center justify-center signal-pulse">
              <MapPin size={22} className="text-white" />
            </div>
            <p className="text-white font-display font-semibold">
              WiaFibra Internet
            </p>
            <p className="text-[var(--mist)]/70 text-sm max-w-xs">
              {c.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="trabalhe" className="bg-[var(--bg-deep)] border-t border-white/10 font-body">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="text-[var(--mist)]/70 text-sm mt-4 leading-relaxed max-w-xs">
            Com rede 100% Fibra Óptica, temos capacidade para entregar alta
            velocidade, estabilidade e qualidade a todos os clientes.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[var(--neon)]/60 hover:text-[var(--neon)] text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">
            Entre em Contato
          </h4>
          <ul className="space-y-3 text-sm text-[var(--mist)]/75">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-[var(--neon)]" />
              (16) 3509-8888
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-[var(--neon)]" />
              atendimento@wiafibra.com.br
            </li>
            {CITIES.map((c) => (
              <li key={c.name} className="flex items-start gap-2">
                <MapPin size={15} className="text-[var(--neon)] mt-0.5 shrink-0" />
                <span>{c.address}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">
            Navegação
          </h4>
          <ul className="space-y-3 text-sm text-[var(--mist)]/75">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-[var(--neon)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-[var(--mist)]/50">
        © {new Date().getFullYear()} WiaFibra Internet. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  WHATSAPP FLOAT                                                      */
/* ------------------------------------------------------------------ */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5516999999999"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  APP                                                                 */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-deep)]">
      <style>{FONT_IMPORT}</style>
      <Navbar />
      <Hero />
      <Plans />
      <Business />
      <CoverageAndRenew />
      <FaqAndContact />
      <MapSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
