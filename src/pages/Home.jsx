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
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  TOKENS & CSS REESTRUTURADO EM AZUL                                */
/* ------------------------------------------------------------------ */
const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');
:root{
  --bg-deep: #00132b;
  --bg-base: #00244e;
  --bg-panel: #003b85;
  --blue-accent: #1e90ff;
  --blue-soft: #4a78c4;
  --orange: #ff7a1a;
  --mist: #e2eaf4;
}
.font-display{font-family:'Space Grotesk',sans-serif;}
.font-body{font-family:'Inter',sans-serif;}
`;

/* BANNERS ORIGINAIS .PNG */
const SLIDES = [
  {
    image: "https://i.ibb.co/fzxX1D4p/1.png",
    alt: "Banner 1 - WiaFibra",
  },
  {
    image: "https://i.ibb.co/q3CsW42C/2.png",
    alt: "Banner 2 - WiaFibra",
  },
  {
    image: "https://i.ibb.co/Ndg207Kd/3.png",
    alt: "Banner 3 - WiaFibra",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Planos", href: "#planos" },
  { label: "Fale Conosco", href: "#contato" },
  { label: "Trabalhe Conosco", href: "#trabalhe" },
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
/*  LOGO                                                                */
/* ------------------------------------------------------------------ */
function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--bg-panel)] border border-[var(--blue-accent)]/40 shadow-md">
        <Wifi size={20} className="text-[var(--blue-accent)]" strokeWidth={2.5} />
      </div>
      <span className="font-display font-bold text-xl tracking-tight text-white drop-shadow">
        Wia<span className="text-[var(--blue-accent)]">Fibra</span>
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 font-body transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-deep)]/95 backdrop-blur border-b border-white/10 shadow-lg py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                i === 0
                  ? "text-white border-b-2 border-[var(--blue-accent)] pb-1"
                  : "text-white/90 hover:text-[var(--blue-accent)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--blue-accent)] text-white font-semibold text-sm px-5 py-2 hover:bg-[var(--blue-soft)] transition-colors shadow-[0_0_20px_-4px_var(--blue-accent)]"
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
        <div className="lg:hidden bg-[var(--bg-deep)] border-t border-white/10 px-5 py-4 flex flex-col gap-4 mt-3">
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-accent)] text-white font-semibold text-sm px-5 py-2.5"
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
/*  HERO BANNER                                                         */
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

  return (
    <section id="home" className="relative font-body w-full bg-[var(--bg-deep)] overflow-hidden">
      <div className="relative w-full aspect-[1920/800] min-h-[280px] max-h-[800px] flex items-center justify-center">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* SETAS LATERAIS */}
        <button
          onClick={() => go(-1)}
          className="z-30 absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition backdrop-blur"
          aria-label="Banner anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => go(1)}
          className="z-30 absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition backdrop-blur"
          aria-label="Próximo banner"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* PONTINHOS NAVEGADORES */}
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                clearInterval(timer.current);
                setIdx(i);
              }}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                i === idx ? "w-6 sm:w-8 bg-[var(--blue-accent)]" : "w-2 sm:w-2.5 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Banner ${i + 1}`}
            />
          ))}
        </div>

        {/* LINHA SEPARADORA/DIVISÃO */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] sm:h-[6px] bg-[var(--blue-accent)] z-40 shadow-[0_0_12px_var(--blue-accent)]" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PLANOS                                                              */
/* ------------------------------------------------------------------ */
function Plans() {
  return (
    <section id="planos" className="bg-[var(--bg-deep)] font-body py-12 md:py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white text-center tracking-tight mb-4">
          CONHEÇA NOSSOS PLANOS DE{" "}
          <span className="text-[var(--blue-accent)]">INTERNET</span>
        </h2>
        <p className="text-[var(--mist)]/75 text-center text-base sm:text-lg max-w-2xl mx-auto mb-14">
          Fibra óptica de ponta a ponta, equipamentos premium inclusos e sem
          fidelidade escondida no contrato.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.speed}
              className={`relative rounded-3xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                p.highlight
                  ? "bg-[var(--bg-panel)] border-[var(--blue-accent)] shadow-[0_0_40px_-10px_rgba(30,144,255,0.4)] md:scale-105"
                  : "bg-[var(--bg-base)] border-white/10 hover:border-[var(--blue-accent)]/50"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--orange)] text-white text-xs font-bold px-4 py-1 uppercase tracking-wide">
                  Mais Escolhido
                </span>
              )}
              <div className="mb-6">
                <span className="font-display font-bold text-5xl text-white">
                  {p.speed}
                </span>
                <p className="font-display font-bold text-lg tracking-widest text-[var(--blue-accent)]">
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
                    ? "bg-[var(--blue-accent)] text-white hover:bg-[var(--blue-soft)] shadow-lg"
                    : "bg-white/5 text-white border border-white/15 hover:border-[var(--blue-accent)]/60"
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
      <span className="w-7 h-7 rounded-lg bg-[var(--blue-accent)]/15 flex items-center justify-center shrink-0">
        <Icon size={14} className="text-[var(--blue-accent)]" />
      </span>
      {text}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  EMPRESARIAL (BANNER DE IMAGEM)                                     */
/* ------------------------------------------------------------------ */
function Business() {
  return (
    <section id="sobre" className="font-body">
      <div className="w-full overflow-hidden leading-none">
        <a href="#contato" className="block w-full">
          <img
            src="https://i.ibb.co/SX3zmcnd/plano-empresarial.png"
            alt="Banner Plano Empresarial WiaFibra"
            className="w-full h-auto object-cover block"
          />
        </a>
      </div>

      <div className="bg-[var(--bg-base)] py-16 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-12">
            PLANOS <span className="text-[var(--blue-accent)]">PERSONALIZADOS</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUSINESS_FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-[var(--bg-panel)]/60 border border-white/10 p-6 hover:border-[var(--blue-accent)]/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--blue-accent)]/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[var(--blue-accent)]" />
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
/*  COBERTURA + PLANO RENOVA (AGORA AMBOS COM BANNER DE IMAGEM)        */
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
      {/* CONSULTA DE COBERTURA */}
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
              className="flex-1 rounded-full bg-white text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-5 py-3 outline-none focus:ring-2 focus:ring-[var(--blue-accent)]"
            />
            <input
              value={form.endereco}
              onChange={(e) => setForm({ ...form, endereco: e.target.value })}
              placeholder="Endereço"
              className="flex-1 rounded-full bg-white text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-5 py-3 outline-none focus:ring-2 focus:ring-[var(--blue-accent)]"
            />
            <input
              value={form.cep}
              onChange={(e) => setForm({ ...form, cep: e.target.value })}
              placeholder="CEP"
              className="md:w-40 rounded-full bg-white text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-5 py-3 outline-none focus:ring-2 focus:ring-[var(--blue-accent)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--blue-accent)] text-white font-semibold text-sm px-7 py-3 hover:bg-[var(--blue-soft)] transition shadow-md"
            >
              {sent ? "Enviado!" : "Enviar"}
            </button>
          </form>
        </div>
      </div>

      {/* BANNER PLANO RENOVA */}
      <div className="w-full overflow-hidden leading-none">
        <a href="#contato" className="block w-full">
          <img
            src="https://i.ibb.co/TDjNCqWc/plano-renova.png"
            alt="Banner Plano Renova WiaFibra"
            className="w-full h-auto object-cover block"
          />
        </a>
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
          className={`shrink-0 text-[var(--blue-accent)] transition-transform duration-300 ${
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
            Perguntas <span className="text-[var(--blue-accent)]">Frequentes</span>
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

        <div className="bg-[var(--bg-panel)] rounded-3xl p-8 border border-white/10 h-fit shadow-xl">
          <h3 className="font-display font-bold text-2xl text-white mb-6">
            Quero a melhor Internet da Região!
          </h3>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <input
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Nome"
              className="rounded-xl bg-white/95 text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--blue-accent)]"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="E-mail"
              className="rounded-xl bg-white/95 text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--blue-accent)]"
            />
            <textarea
              required
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              placeholder="Mensagem"
              rows={4}
              className="rounded-xl bg-white/95 text-[var(--bg-deep)] placeholder:text-[var(--bg-deep)]/50 text-sm px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[var(--blue-accent)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--orange)] text-white font-semibold text-sm px-6 py-3.5 hover:brightness-110 transition shadow-lg"
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
                  ? "bg-[var(--blue-accent)] text-white shadow-md"
                  : "bg-[var(--bg-panel)] text-[var(--mist)]/80 border border-white/10 hover:border-[var(--blue-accent)]/50"
              }`}
            >
              {c2.name}
            </button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[var(--bg-panel)] relative h-72 flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(30,144,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.15) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative flex flex-col items-center gap-3 text-center px-6">
            <div className="w-12 h-12 rounded-full bg-[var(--orange)] flex items-center justify-center shadow-md">
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
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[var(--blue-accent)]/60 hover:text-[var(--blue-accent)] text-white transition"
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
              <Phone size={15} className="text-[var(--blue-accent)]" />
              (16) 3509-8888
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-[var(--blue-accent)]" />
              atendimento@wiafibra.com.br
            </li>
            {CITIES.map((c) => (
              <li key={c.name} className="flex items-start gap-2">
                <MapPin size={15} className="text-[var(--blue-accent)] mt-0.5 shrink-0" />
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
                <a href={l.href} className="hover:text-[var(--blue-accent)] transition-colors">
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
