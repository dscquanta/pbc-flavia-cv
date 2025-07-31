import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Briefcase,
  Star,
  GraduationCap,
  Target,
  Award,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Zap,
  Globe,
  Brain,
  Rocket,
  Building2,
  Users,
  Lightbulb,
} from "lucide-react";

export default function Index() {
  const [activeSection, setActiveSection] = useState("sobre");
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      category: "🤝 Comunicação & Relacionamento",
      icon: <Globe className="w-6 h-6" />,
      color: "from-slate-600 to-slate-800",
      items: [
        "Comunicação clara e empática",
        "Atendimento humanizado",
        "Facilidade com ferramentas digitais",
        "Trabalho remoto (home office)",
      ],
    },
    {
      category: "👶 Cuidado & Educação",
      icon: <Brain className="w-6 h-6" />,
      color: "from-slate-500 to-slate-700",
      items: [
        "Cuidados diários com crianças",
        "Atividades lúdicas e educativas",
        "Comunicação com responsáveis",
        "Atenção ao bem-estar infantil",
      ],
    },
    {
      category: "💼 Gestão & Organização",
      icon: <Zap className="w-6 h-6" />,
      color: "from-slate-700 to-slate-900",
      items: [
        "Organização e foco",
        "Agilidade e responsabilidade",
        "Gestão Industrial (em formação)",
        "Rotinas operacionais",
      ],
    },
    {
      category: "🌟 Comportamento Humano",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-slate-400 to-slate-600",
      items: [
        "Interesse em Psicologia",
        "Atendimento remoto personalizado",
        "Aprendizado contínuo",
        "Propósito e qualidade de vida",
      ],
    },
  ];

  const experience = [
    {
      title: "Babá",
      company: "Autônoma",
      period: "Experiência Relevante",
      location: "Capitão Enéas - MG",
      impact: "Cuidado integral e responsável",
      responsibilities: [
        "Cuidados diários com crianças, promovendo rotinas seguras e atividades lúdicas",
        "Comunicação constante com os responsáveis",
        "Responsabilidade e atenção ao bem-estar infantil",
        "Desenvolvimento de vínculos afetivos seguros",
        "Criação de ambiente acolhedor e educativo",
      ],
    },
    {
      title: "Auxiliar de Restaurante",
      company: "Estabelecimento Local",
      period: "Experiência Profissional",
      location: "Capitão Enéas - MG",
      impact: "Atendimento ao cliente com excelência",
      responsibilities: [
        "Atendimento ao cliente com simpatia e eficiência",
        "Apoio nas rotinas de cozinha e organização do espaço",
        "Trabalho em equipe e cumprimento de prazos sob pressão",
        "Manutenção de padrões de qualidade e limpeza",
        "Gestão de múltiplas tarefas simultaneamente",
      ],
    },
  ];

  const visionItems = [
    {
      title: "🎓 Formação Acadêmica",
      icon: <GraduationCap className="w-8 h-8" />,
      items: [
        "Gestão Industrial - SENAI (em andamento)",
        "Graduação em Psicologia (objetivo futuro)",
        "Especialização em Comportamento Humano",
        "Certificações em Atendimento Remoto",
      ],
      gradient: "from-slate-600 to-slate-800",
    },
    {
      title: "💼 Carreira Home Office",
      icon: <Globe className="w-8 h-8" />,
      items: [
        "Atendimento remoto humanizado",
        "Consultoria em comportamento humano",
        "Trabalho com flexibilidade",
        "Autonomia profissional",
      ],
      gradient: "from-slate-500 to-slate-700",
    },
    {
      title: "❤️ Desenvolvimento Pessoal",
      icon: <Sparkles className="w-8 h-8" />,
      items: [
        "Aprendizado contínuo",
        "Construção de carreira sólida",
        "Alinhamento com valores pessoais",
        "Crescimento pessoal e profissional",
      ],
      gradient: "from-slate-700 to-slate-900",
    },
    {
      title: "🚀 Visão de Futuro",
      icon: <TrendingUp className="w-8 h-8" />,
      items: [
        "Psicologia aplicada ao trabalho",
        "Carreira com propósito",
        "Qualidade de vida",
        "Impacto positivo nas pessoas",
      ],
      gradient: "from-slate-400 to-slate-600",
    },
  ];

  const sections = [
    "sobre",
    "experiencia",
    "habilidades",
    "projetos",
    "contato",
  ];

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isContactFormOpen) {
        setIsContactFormOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isContactFormOpen]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Usando Web3Forms (100% gratuito, sem limites)
      const formData = new FormData();
      formData.append("access_key", "e74a5b4c-8b4a-4c5c-9a8c-2b5d6e7f8a9b"); // Chave pública Web3Forms
      formData.append("name", contactForm.name);
      formData.append("email", contactForm.email);
      formData.append("message", contactForm.message);
      formData.append("subject", `Contato do Portfólio - ${contactForm.name}`);
      formData.append("from_name", contactForm.name);
      formData.append("to_email", "flaviamicaely55@gmail.com");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "✅ Mensagem enviada com sucesso! Flávia receberá seu contato em breve. Obrigada!",
        );
        setIsContactFormOpen(false);
        setContactForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erro no envio: " + result.message);
      }
    } catch (error) {
      alert(
        "❌ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email: flaviamicaely55@gmail.com",
      );
      console.error("Erro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(148, 163, 184, 0.1), transparent 40%)`,
          }}
        ></div>
        {/* Granular texture overlay */}
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/%3E%3C/filter%3E%3C/defs%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E\')] opacity-30'
          }
        ></div>
        {/* Additional grain pattern */}
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.01"%3E%3Ccircle cx="10" cy="10" r="0.5"/%3E%3Ccircle cx="30" cy="20" r="0.3"/%3E%3Ccircle cx="50" cy="15" r="0.4"/%3E%3Ccircle cx="70" cy="35" r="0.2"/%3E%3Ccircle cx="20" cy="40" r="0.3"/%3E%3Ccircle cx="80" cy="50" r="0.4"/%3E%3Ccircle cx="40" cy="60" r="0.2"/%3E%3Ccircle cx="90" cy="70" r="0.3"/%3E%3Ccircle cx="15" cy="80" r="0.4"/%3E%3Ccircle cx="60" cy="90" r="0.2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] animate-pulse'
          }
        ></div>
      </div>

      {/* Glassmorphic Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold relative">
              <span className="bg-gradient-to-r from-blue-300 via-slate-200 to-blue-400 bg-clip-text text-transparent">
                FLÁVIA MICAELLY
              </span>
              <span
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.8) 30%, rgba(147, 197, 253, 0.6) 50%, rgba(59, 130, 246, 0.8) 70%, transparent 100%)',
                  backgroundSize: '300% 100%',
                  animation: 'spotlight 4s ease-in-out infinite',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                FLÁVIA MICAELLY
              </span>
            </div>
            <div className="hidden lg:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 capitalize backdrop-blur-sm ${
                    activeSection === section
                      ? "bg-gradient-to-r from-slate-800/60 to-slate-700/60 text-slate-200 border border-slate-400/50"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/20 border border-transparent"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Ultra Modern */}
      <section className={`relative z-10 px-8 transition-all duration-700 ${
        activeSection === "sobre" ? "pt-32 pb-24" : "pt-32 pb-8"
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Floating geometric elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-xl animate-pulse">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: 'linear-gradient(45deg, rgba(148, 163, 184, 0.15), rgba(59, 130, 246, 0.1))',
                  animation: 'spotlight-glow 5s ease-in-out infinite'
                }}
              ></div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-xl animate-pulse delay-1000">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: 'linear-gradient(-45deg, rgba(148, 163, 184, 0.15), rgba(59, 130, 246, 0.1))',
                  animation: 'spotlight-glow 6s ease-in-out infinite 2s'
                }}
              ></div>
            </div>

            <div className="text-center relative z-10">
              {/* Executive Avatar */}
              <div className={`relative inline-block transition-all duration-700 ${
                activeSection === "sobre" ? "mb-12" : "mb-6"
              }`}>
                <div className={`mx-auto rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 border-4 border-slate-400 ${
                  activeSection === "sobre" ? "w-48 h-48" : "w-32 h-32"
                }`}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F351921402a5244db8c095e012b3e1ae5%2Fb215661fca554362967ff585765adecc?format=webp&width=800"
                    alt="Flávia Micaelly Cardoso Santos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -inset-4 rounded-3xl blur-lg opacity-25"
                  style={{
                    background: 'linear-gradient(90deg, rgba(148, 163, 184, 0.3), rgba(59, 130, 246, 0.4), rgba(148, 163, 184, 0.3))',
                    backgroundSize: '200% 100%',
                    animation: 'spotlight 4s ease-in-out infinite 0.5s'
                  }}
                ></div>
              </div>

              {/* Executive Title */}
              <div className={`transition-all duration-700 ${
                activeSection === "sobre" ? "mb-8" : "mb-4"
              }`}>
                <h1 className={`font-black leading-tight transition-all duration-700 relative ${
                  activeSection === "sobre"
                    ? "text-7xl lg:text-8xl mb-6"
                    : "text-4xl lg:text-5xl mb-3"
                }`}>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-200 via-slate-100 to-blue-300 bg-clip-text text-transparent">
                      FLÁVIA MICAELLY
                    </span>
                    <span
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.9) 25%, rgba(147, 197, 253, 0.7) 50%, rgba(59, 130, 246, 0.9) 75%, transparent 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'spotlight 3s ease-in-out infinite',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                      }}
                    >
                      FLÁVIA MICAELLY
                    </span>
                  </span>
                  {activeSection === "sobre" && <br />}
                  <span className={`relative inline-block ${
                    activeSection === "sobre" ? "text-5xl lg:text-6xl" : "text-3xl lg:text-4xl"
                  }`}>
                    <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-300 bg-clip-text text-transparent">
                      {activeSection === "sobre" ? "CARDOSO SANTOS" : " CARDOSO SANTOS"}
                    </span>
                    <span
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.8) 30%, rgba(59, 130, 246, 0.6) 50%, rgba(147, 197, 253, 0.8) 70%, transparent 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'spotlight 3s ease-in-out infinite 1.5s',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                      }}
                    >
                      {activeSection === "sobre" ? "CARDOSO SANTOS" : " CARDOSO SANTOS"}
                    </span>
                  </span>
                </h1>
                <p className={`font-light transition-all duration-700 ${
                  activeSection === "sobre"
                    ? "text-2xl lg:text-3xl mb-4"
                    : "text-lg lg:text-xl mb-2"
                }`}>
                  <span className="bg-gradient-to-r from-blue-300 via-slate-300 to-blue-400 bg-clip-text text-transparent">
                    Gestão Industrial • Atendimento Remoto • Comportamento Humano
                  </span>
                </p>
                {activeSection === "sobre" && (
                  <div className="flex items-center justify-center gap-4 text-lg">
                    <Sparkles className="w-6 h-6 animate-spin text-blue-400" />
                    <span className="bg-gradient-to-r from-slate-300 via-blue-300 to-slate-400 bg-clip-text text-transparent">
                      Construindo carreira com propósito em modelo home office
                    </span>
                    <Sparkles className="w-6 h-6 animate-spin text-blue-400" />
                  </div>
                )}
              </div>

              {/* Executive Contact Cards */}
              <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 ${
                activeSection === "sobre" ? "mb-12" : "mb-6"
              }`}>
                {[
                  {
                    icon: Phone,
                    text: "(38) 99837-2759",
                    color: "from-slate-400 to-slate-500",
                  },
                  {
                    icon: Mail,
                    text: "flaviamicaely55@gmail.com",
                    color: "from-slate-500 to-slate-600",
                  },
                  {
                    icon: MapPin,
                    text: "Capitão Enéas - MG",
                    color: "from-slate-600 to-slate-700",
                  },
                ].map((contact, index) => (
                  <div key={index} className="group relative">
                    <div className="backdrop-blur-xl bg-slate-900/30 rounded-2xl p-6 border border-slate-700/40 hover:border-slate-400/60 transition-all duration-500 transform hover:scale-105">
                      <div
                        className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center`}
                      >
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-medium">{contact.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission Statement */}
              {activeSection === "sobre" && (
                <div className="backdrop-blur-xl bg-gradient-to-r from-slate-900/40 to-slate-800/30 rounded-3xl p-8 max-w-5xl mx-auto border border-slate-700/40 mb-12">
                  <h3 className="text-3xl font-bold mb-6 text-white flex items-center justify-center gap-3">
                    <Target className="w-8 h-8 text-slate-300" />
                    OBJETIVO PROFISSIONAL
                  </h3>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    Atuar em modelo{" "}
                    <span className="text-slate-300 font-semibold">home office</span>, com foco em{" "}
                    <span className="text-slate-400 font-semibold">aprendizado contínuo</span>{" "}
                    e construção de uma carreira na área de{" "}
                    <span className="text-slate-200 font-semibold">comportamento humano e atendimento remoto</span>, buscando flexibilidade e desenvolvimento de novas habilidades.
                  </p>
                </div>
              )}

              {/* CTA Buttons */}
              {activeSection === "sobre" && (
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    onClick={() => setIsContactFormOpen(true)}
                    className="group relative px-12 py-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl font-bold text-xl text-slate-200 overflow-hidden transform hover:scale-105 transition-all duration-300 border border-slate-400/40"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Entre em Contato
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pb-24">
        {/* About Section */}
        {activeSection === "sobre" && (
          <section className="space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                Resumo Profissional
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-cyan-500/10 rounded-3xl p-10 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                  Perfil Profissional
                </h3>
                <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                  <p>
                    <span className="font-bold text-cyan-400">Flávia Micaelly</span> é
                    uma profissional em formação,
                    <span className="font-semibold text-white">
                      {" "}
                      comprometida e comunicativa
                    </span>
                    , voltada ao crescimento pessoal e profissional. Atualmente cursando
                    <span className="font-semibold text-cyan-300">
                      {" "}
                      Gestão Industrial pelo SENAI
                    </span>
                    , possui perfil voltado para
                    <span className="font-semibold text-purple-300">
                      {" "}
                      desenvolvimento contínuo e construção de uma carreira sólida
                    </span>
                    .
                  </p>
                  <p>
                    Com experiências anteriores como{" "}
                    <span className="font-semibold text-white">
                      babá e auxiliar em restaurante
                    </span>
                    , desenvolveu competências como
                    <span className="font-semibold text-cyan-300">
                      {" "}
                      empatia, organização, agilidade e atendimento ao público
                    </span>
                    . Demonstra forte interesse pelo
                    <span className="font-semibold text-purple-300">
                      {" "}
                      comportamento humano
                    </span>
                    {" "}e tem como meta futura cursar Psicologia, buscando uma atuação que una
                    <span className="font-semibold text-pink-300">
                      {" "}
                      sensibilidade e estratégia
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Localização",
                    value: "Capitão Enéas - MG",
                    icon: Globe,
                  },
                  {
                    title: "Formação Atual",
                    value: "Gestão Industrial - SENAI",
                    icon: TrendingUp,
                  },
                  {
                    title: "Modelo de Trabalho",
                    value: "Home Office",
                    icon: Rocket,
                  },
                  {
                    title: "Área de Interesse",
                    value: "Comportamento Humano",
                    icon: Star,
                  },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <metric.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {metric.title}
                        </h4>
                        <p className="text-cyan-300 font-medium">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === "experiencia" && (
          <section>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                Experiência Profissional
              </h2>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="group relative">
                  <div className="backdrop-blur-xl bg-gradient-to-r from-white/10 to-purple-500/10 rounded-3xl p-10 border border-white/20 hover:border-purple-400/50 transition-all duration-700 transform hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {job.title}
                        </h3>
                        <h4 className="text-2xl text-purple-400 font-semibold mb-2">
                          {job.company}
                        </h4>
                        <p className="text-gray-300 flex items-center gap-2 mb-4">
                          <MapPin className="w-5 h-5" />
                          {job.location}
                        </p>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl px-4 py-2 border border-green-400/30">
                          <TrendingUp className="w-5 h-5 text-green-400" />
                          <span className="text-green-300 font-semibold">
                            {job.impact}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold text-lg">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {job.responsibilities.map((responsibility, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-3 flex-shrink-0"></div>
                          <span className="text-gray-200 font-medium">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "habilidades" && (
          <section>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                Habilidades e Competências
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {skills.map((skillGroup, index) => (
                <div key={index} className="group relative">
                  <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-700 transform hover:scale-105">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${skillGroup.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                      >
                        {skillGroup.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {skillGroup.items.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-4 backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillGroup.color}`}
                          ></div>
                          <span className="text-gray-200 font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Executive Education */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-3xl p-10 border border-emerald-400/30">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-emerald-400" />
                Formação Acadêmica
              </h3>
              <div className="grid md:grid-cols-1 gap-6">
                <div className="text-center backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-emerald-400/30">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Curso Técnico em Gestão Industrial
                  </h4>
                  <p className="text-emerald-300 font-semibold mb-4">
                    📚 SENAI Luiz de Paula - Montes Claros - MG
                  </p>
                  <p className="text-gray-300">
                    <strong>Status:</strong> Em andamento - Comprometida com excelência acadêmica e aplicação prática dos conhecimentos
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Vision Section */}
        {activeSection === "projetos" && (
          <section>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                Objetivos e Visão de Futuro
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                Flávia possui uma visão clara e estruturada para seu
                desenvolvimento através de
                <span className="text-cyan-400 font-semibold"> educação</span>,
                <span className="text-purple-400 font-semibold">
                  {" "}
                  trabalho remoto
                </span>{" "}
                e
                <span className="text-pink-400 font-semibold">
                  {" "}
                  psicologia aplicada
                </span>
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {visionItems.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-700 transform hover:scale-105">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {item.items.map((goal, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10"
                        >
                          <ChevronRight className="w-5 h-5 text-cyan-400" />
                          <span className="text-gray-200 font-medium">
                            {goal}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Executive Impact Metrics */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-10 border border-cyan-400/30">
              <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-cyan-400" />
                Diferenciais Competitivos
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { metric: "Aprendizado Contínuo", value: "🎯", icon: Building2 },
                  { metric: "Flexibilidade", value: "💪", icon: Users },
                  { metric: "Empatia", value: "❤️", icon: Lightbulb },
                  { metric: "Propósito", value: "🌟", icon: Globe },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {stat.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contato" && (
          <section>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                Vamos nos Conectar
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "flaviamicaely55@gmail.com",
                  gradient: "from-blue-500 to-cyan-500",
                  link: "mailto:flaviamicaely55@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  info: "(38) 99837-2759",
                  gradient: "from-green-500 to-emerald-500",
                  link: "tel:(38)99837-2759",
                },
                {
                  icon: Globe,
                  title: "Localização",
                  info: "Capitão Enéas - MG",
                  gradient: "from-purple-500 to-pink-500",
                  link: "#",
                },
              ].map((contact, index) => (
                <a key={index} href={contact.link} className="group block">
                  <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-700 transform hover:scale-105 text-center">
                    <div
                      className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                    >
                      <contact.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {contact.title}
                    </h3>
                    <p className="text-xl text-gray-300 font-medium">
                      {contact.info}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Executive Contact Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 to-purple-500/20 rounded-3xl p-10 max-w-2xl w-full border border-white/30">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                Enviar Mensagem
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                📧 Sua mensagem será enviada diretamente para Flávia Micaelly
              </p>
              <button
                onClick={() => setIsContactFormOpen(false)}
                className="text-3xl text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className="w-full p-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-lg disabled:opacity-50"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  className="w-full p-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-lg disabled:opacity-50"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  disabled={isSubmitting}
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  className="w-full p-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-lg resize-vertical disabled:opacity-50"
                  placeholder="Sua mensagem para a Flávia..."
                />
              </div>

              <div className="flex gap-4 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setIsContactFormOpen(false)}
                  className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold text-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold text-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isSubmitting ? "animate-pulse" : ""
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Executive Footer */}
      <footer className="relative z-10 backdrop-blur-xl bg-blue-950/50 border-t border-blue-800/20 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              FLÁVIA MICAELLY CARDOSO SANTOS
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              "Comprometida com o crescimento contínuo e construção de uma carreira com propósito no modelo home office"
            </p>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 Portfólio Profissional • Desenvolvido com Excelência
          </div>
        </div>
      </footer>
    </div>
  );
}
