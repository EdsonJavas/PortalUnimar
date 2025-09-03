import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { loginWithGoogle } from "../../../firebase";
import {
  GraduationCap,
  Brain,
  ShoppingBag,
  Users,
  Lightbulb,
  ArrowRight,
  Sun,
  Moon,
  Target,
  Star,
  Globe,
  Rocket,
  Shield,
  TrendingUp,
  DollarSign,
  Coffee,
  Code,
  Camera,
} from "lucide-react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  // Fonts are now loaded globally in index.html

  const handleLogin = async () => {
    try {
      const { user } = await loginWithGoogle();
      if (user) {
        console.log("Usuário logado:", user);
        navigate("/dashboard");
      }
    } catch (e) {
      console.error("Erro ao fazer login:", e);
    }
  };

  const revolutionaryFeatures = [
    {
      icon: Brain,
      title: "IA Study Assistant",
      description:
        "Assistente pessoal que adapta estudos ao seu perfil, sugere cronogramas e responde dúvidas em tempo real.",
      color: "from-purple-500 to-indigo-600",
      benefits: [
        "Estudos 3x mais eficientes",
        "Planos personalizados",
        "Dúvidas 24/7",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Knowledge Marketplace",
      description:
        "Primeira plataforma onde estudantes monetizam conhecimento: venda notas, tutoriais e materiais exclusivos.",
      color: "from-green-500 to-emerald-600",
      benefits: [
        "Renda extra estudando",
        "Materiais únicos",
        "Economia colaborativa",
      ],
    },
    {
      icon: Users,
      title: "Smart Networking",
      description:
        "IA conecta você com pessoas certas baseado em projetos, interesses e objetivos de carreira compatíveis.",
      color: "from-blue-500 to-cyan-600",
      benefits: [
        "Networking inteligente",
        "Oportunidades direcionadas",
        "Colaborações estratégicas",
      ],
    },
    {
      icon: Lightbulb,
      title: "Project Collaboration Hub",
      description:
        "Plataforma para projetos cross-curso com matching automático de habilidades e interesses.",
      color: "from-yellow-500 to-orange-600",
      benefits: [
        "Projetos interdisciplinares",
        "Portfolio robusto",
        "Experiência real",
      ],
    },
    {
      icon: Target,
      title: "Opportunity Engine",
      description:
        "IA analisa seu perfil e recomenda estágios, bolsas e oportunidades com alta compatibilidade.",
      color: "from-red-500 to-pink-600",
      benefits: [
        "Oportunidades personalizadas",
        "Matching 90%+",
        "Carreira acelerada",
      ],
    },
    {
      icon: Coffee,
      title: "Virtual Co-working",
      description:
        "Salas de estudo virtuais com Pomodoro sincronizado, gamificação e interação social.",
      color: "from-amber-500 to-yellow-600",
      benefits: [
        "Foco multiplicado",
        "Comunidade ativa",
        "Produtividade gamificada",
      ],
    },
  ];

  const stats = [
    { label: "Estudantes Conectados", value: "2.847", icon: Users },
    { label: "Materiais Comercializados", value: "15.302", icon: ShoppingBag },
    { label: "Projetos Colaborativos", value: "1.156", icon: Lightbulb },
    { label: "Oportunidades Descobertas", value: "892", icon: Target },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      course: "Engenharia Civil - 4º ano",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      quote:
        "Ganhei R$ 800 no primeiro mês vendendo minhas notas de Cálculo. A IA do Santuário me conectou com 3 projetos incríveis!",
    },
    {
      name: "João Santos",
      course: "Ciência da Computação - 3º ano",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      quote:
        "Consegui estágio no Google através das recomendações da IA. O networking inteligente mudou minha carreira!",
    },
    {
      name: "Ana Costa",
      course: "Medicina - 2º ano",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      quote:
        "O assistente de IA personalizou meus estudos e minha performance melhorou 40%. Revolucionário!",
    },
  ];

  const quickActionsData = [
    {
      icon: Brain,
      label: "IA Assistant",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: ShoppingBag,
      label: "Marketplace",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Lightbulb,
      label: "Projetos",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Coffee,
      label: "Co-working",
      color: "from-amber-500 to-yellow-600",
    },
    {
      icon: Code,
      label: "Desenvolver",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Camera,
      label: "Scan Notes",
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent brand-text">
                  Portal Unimar
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  O Futuro da Educação
                </p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-blue-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400/20 dark:bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
                <Rocket className="h-4 w-4 mr-2" />
                Revolucionando a Educação Superior no Brasil
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                O Primeiro{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Ecossistema
                </span>
                <br />
                Acadêmico Inteligente
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                IA personalizada, marketplace de conhecimento, networking
                inteligente e projetos colaborativos.
                <strong className="text-gray-900 dark:text-white">
                  {" "}
                  Monetize seu conhecimento enquanto estuda.
                </strong>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleLogin}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <span>Começar Gratuitamente</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Gratuito para sempre</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>100% Seguro</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Preview */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
              {quickActionsData.map((action, index) => {
                const Icon = action.icon;
                return (
                  <div key={index} className="group cursor-pointer">
                    <div
                      className={`p-4 bg-gradient-to-r ${action.color} rounded-2xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300 mb-2`}
                    >
                      <Icon className="h-6 w-6 text-white mx-auto" />
                    </div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {action.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-blue-200/50 dark:border-slate-700/50 shadow-xl"
                >
                  <div className="inline-flex p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Funcionalidades que{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revolucionam
              </span>
              <br />a Educação
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tecnologias disruptivas que transformam a forma como você estuda,
              colabora e constrói sua carreira
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {revolutionaryFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-blue-200/50 dark:border-slate-700/50 transform hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-indigo-400/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Estudantes já estão{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Ganhando Dinheiro
              </span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Resultados reais de quem já usa o Portal Unimar
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-blue-200/50 dark:border-slate-700/50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-blue-200 dark:border-slate-600"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-indigo-400/5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-blue-200/50 dark:border-slate-700/50">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Seja Pioneiro na{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revolução Educacional
              </span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Entre agora no Portal Unimar e tenha acesso antecipado às
              funcionalidades que vão transformar a Unimar na universidade mais
              inovadora do Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleLogin}
                className="group inline-flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <span>Entrar Gratuitamente</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-blue-500" />
                <span>Acesso mundial</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>Performance garantida</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-yellow-500" />
                <span>Monetização imediata</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
