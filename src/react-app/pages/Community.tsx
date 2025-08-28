import React, { useState } from "react";
import { useAuth } from "@getmocha/users-service/react";
import { useNavigate } from "react-router";
import Layout from "@/react-app/components/Layout";
import {
  Users,
  MessageCircle,
  Heart,
  Share2,
  Star,
  Search,
  Brain,
  ShoppingBag,
  Lightbulb,
  Coffee,
  DollarSign,
  TrendingUp,
  Eye,
  Award,
  Rocket,
} from "lucide-react";

export default function Community() {
  const { user, isPending } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("feed");

  React.useEffect(() => {
    if (!isPending && !user) {
      navigate("/");
    }
  }, [user, isPending, navigate]);

  if (isPending || !user) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  const ecosystemStats = [
    {
      title: "Marketplace Ativo",
      value: "R$ 127.4k",
      subtitle: "Volume hoje",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      change: "+34%",
    },
    {
      title: "IA Interactions",
      value: "8.9k",
      subtitle: "Consultas hoje",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      change: "+67%",
    },
    {
      title: "Projetos Ativos",
      value: "234",
      subtitle: "Cross-curso",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-600",
      change: "+18%",
    },
    {
      title: "Conexões Smart",
      value: "1.2k",
      subtitle: "Matches hoje",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      change: "+89%",
    },
  ];

  const hotTopics = [
    {
      id: 1,
      title: "Quem quer comprar meu resumo completo de Machine Learning?",
      author: {
        name: "Sofia Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        course: "Ciência da Computação",
        level: "Gold Seller",
        rating: 4.9,
      },
      content:
        "150 páginas de resumo completo de ML com exemplos práticos, códigos Python e exercícios resolvidos. Aprovado por 95% dos compradores! 🚀",
      price: "R$ 89",
      originalPrice: "R$ 120",
      views: 342,
      interested: 89,
      timestamp: "3 horas atrás",
      tags: ["IA", "Python", "Premium"],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      type: "marketplace",
      hot: true,
    },
    {
      id: 2,
      title: "PROJETO URGENTE: EcoApp precisa de 2 designers UI/UX",
      author: {
        name: "João Silva",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        course: "Engenharia Ambiental",
        level: "Project Leader",
        rating: 4.8,
      },
      content:
        "App para sustentabilidade urbana. Já temos backend e IA prontos. Pagamos em equity + portfolio + networking! Startup já tem investimento.",
      reward: "Equity + Portfolio",
      participants: "12/15",
      deadline: "2 dias",
      timestamp: "1 hora atrás",
      tags: ["Design", "Startup", "Urgente"],
      type: "project",
      urgent: true,
    },
    {
      id: 3,
      title: "Ofereço tutoria de Cálculo III - aprovação garantida!",
      author: {
        name: "Ana Costa",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        course: "Engenharia",
        level: "Top Tutor",
        rating: 5.0,
      },
      content:
        "Monitor oficial há 3 semestres. 94% de aprovação dos meus alunos. Sessões personalizadas com exercícios exclusivos.",
      price: "R$ 45/hora",
      students: 67,
      successRate: "94%",
      timestamp: "30 min atrás",
      tags: ["Tutoria", "Matemática", "Garantia"],
      type: "service",
      verified: true,
    },
  ];

  const smartConnections = [
    {
      name: "Pedro Lima",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      course: "Ciência da Computação",
      year: "4º ano",
      compatibility: 96,
      reason: "Ambos interessados em IA e têm projeto similar",
      skills: ["Python", "Machine Learning", "React"],
      projects: 3,
      online: true,
    },
    {
      name: "Lucia Santos",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face",
      course: "Design Digital",
      year: "3º ano",
      compatibility: 92,
      reason: "Complementa suas habilidades técnicas",
      skills: ["UI/UX", "Figma", "Branding"],
      projects: 7,
      online: false,
    },
    {
      name: "Carlos Oliveira",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      course: "Administração",
      year: "2º ano",
      compatibility: 88,
      reason: "Ideal para parcerias de negócios",
      skills: ["Marketing", "Vendas", "Estratégia"],
      projects: 2,
      online: true,
    },
  ];

  const liveMarketplace = [
    {
      type: "sale",
      item: "Resumo Física Quântica",
      seller: "Maria",
      price: "R$ 67",
      buyer: "João",
      time: "2 min",
    },
    {
      type: "service",
      item: "Revisão de TCC",
      provider: "Ana",
      price: "R$ 150",
      client: "Pedro",
      time: "5 min",
    },
    {
      type: "collaboration",
      item: "App Delivery",
      leader: "Carlos",
      members: "+3",
      equity: "5%",
      time: "8 min",
    },
  ];

  const aiInsights = [
    {
      type: "opportunity",
      title: "Nova bolsa 98% match com seu perfil",
      description: "CNPq - Pesquisa em IA Aplicada",
      value: "R$ 1.200/mês",
      action: "Ver detalhes",
      urgency: "high",
    },
    {
      type: "connection",
      title: "Sofia quer colaborar em projeto similar",
      description: "Machine Learning para Educação",
      value: "96% compatibilidade",
      action: "Conectar",
      urgency: "medium",
    },
    {
      type: "market",
      title: "Suas notas de Cálculo estão em alta",
      description: "23 pessoas procurando este material",
      value: "Preço sugerido: R$ 78",
      action: "Vender agora",
      urgency: "low",
    },
  ];

  const getPostIcon = (type: string) => {
    switch (type) {
      case "marketplace":
        return ShoppingBag;
      case "project":
        return Lightbulb;
      case "service":
        return Star;
      default:
        return MessageCircle;
    }
  };

  const getPostColor = (type: string) => {
    switch (type) {
      case "marketplace":
        return "from-green-500 to-emerald-600";
      case "project":
        return "from-yellow-500 to-orange-600";
      case "service":
        return "from-blue-500 to-cyan-600";
      default:
        return "from-purple-500 to-indigo-600";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen p-6 space-y-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Dynamic Stats */}
          <div className="glass p-8 rounded-3xl shadow-xl mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
            <div className="relative">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Ecossistema Unimar 🚀
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Onde conhecimento vira oportunidade real
                  </p>
                </div>

                <div className="flex space-x-3 mt-6 lg:mt-0">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Vender</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
                    <Lightbulb className="h-4 w-4" />
                    <span>Projeto</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Live Ecosystem Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {ecosystemStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`p-2 rounded-xl bg-gradient-to-r ${stat.color}`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {stat.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {stat.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-gray-100 dark:bg-slate-800 p-1 rounded-2xl">
            {[
              { id: "feed", label: "Feed Ativo", icon: TrendingUp },
              { id: "marketplace", label: "Marketplace", icon: ShoppingBag },
              { id: "projects", label: "Projetos", icon: Lightbulb },
              { id: "networking", label: "Networking", icon: Users },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-md"
                      : "text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-3 space-y-6">
              {/* AI Insights Banner */}
              <div className="glass p-6 rounded-3xl shadow-xl border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-purple-600" />
                  IA Recommendations para Você
                </h3>
                <div className="grid gap-4">
                  {aiInsights.map((insight, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl ${
                        insight.urgency === "high"
                          ? "bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800"
                          : insight.urgency === "medium"
                          ? "bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800"
                          : "bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {insight.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {insight.description}
                          </p>
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            {insight.value}
                          </p>
                        </div>
                        <button
                          className={`px-3 py-1 rounded-lg text-xs font-medium ${
                            insight.urgency === "high"
                              ? "bg-red-600 text-white"
                              : insight.urgency === "medium"
                              ? "bg-yellow-600 text-white"
                              : "bg-blue-600 text-white"
                          }`}
                        >
                          {insight.action}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hot Posts */}
              <div className="space-y-6">
                {hotTopics.map((post) => {
                  const PostIcon = getPostIcon(post.type);
                  return (
                    <div
                      key={post.id}
                      className={`glass p-6 rounded-3xl shadow-xl border-l-4 ${
                        post.hot
                          ? "border-red-500"
                          : post.urgent
                          ? "border-yellow-500"
                          : post.verified
                          ? "border-green-500"
                          : "border-blue-500"
                      }`}
                    >
                      {/* Post Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full border-2 border-blue-200 dark:border-slate-600"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                {post.author.name}
                              </h4>
                              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs rounded-full">
                                {post.author.level}
                              </span>
                              {post.author.rating && (
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                  <span className="text-xs text-gray-600 dark:text-gray-400">
                                    {post.author.rating}
                                  </span>
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {post.author.course} • {post.timestamp}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {post.hot && (
                            <span className="px-2 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium rounded-full animate-pulse">
                              🔥 HOT
                            </span>
                          )}
                          {post.urgent && (
                            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs font-medium rounded-full">
                              ⚡ URGENTE
                            </span>
                          )}
                          {post.verified && (
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                              ✓ VERIFIED
                            </span>
                          )}
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${getPostColor(
                              post.type
                            )}`}
                          >
                            <PostIcon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Post Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>

                      {/* Post Content */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {post.content}
                      </p>

                      {/* Post Image */}
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full h-48 object-cover rounded-2xl mb-4"
                        />
                      )}

                      {/* Post Metrics */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                          {post.views && (
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                          )}
                          {post.interested && (
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>{post.interested} interessados</span>
                            </div>
                          )}
                          {post.participants && (
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{post.participants}</span>
                            </div>
                          )}
                          {post.students && (
                            <div className="flex items-center space-x-1">
                              <Award className="h-4 w-4" />
                              <span>{post.students} alunos</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-3">
                          {post.price && (
                            <div className="text-right">
                              {post.originalPrice && (
                                <p className="text-sm text-gray-500 dark:text-gray-500 line-through">
                                  {post.originalPrice}
                                </p>
                              )}
                              <p className="text-lg font-bold text-green-600 dark:text-green-400">
                                {post.price}
                              </p>
                            </div>
                          )}
                          {post.reward && (
                            <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                              {post.reward}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-200">
                            <Heart className="h-4 w-4" />
                            <span>Curtir</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                            <MessageCircle className="h-4 w-4" />
                            <span>Comentar</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-200">
                            <Share2 className="h-4 w-4" />
                            <span>Compartilhar</span>
                          </button>
                        </div>

                        <div className="flex space-x-2">
                          {post.type === "marketplace" && (
                            <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                              Comprar Agora
                            </button>
                          )}
                          {post.type === "project" && (
                            <button className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                              Participar
                            </button>
                          )}
                          {post.type === "service" && (
                            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                              Contratar
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Smart Connections */}
              <div className="glass p-6 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-blue-600" />
                  Conexões Inteligentes
                </h3>
                <div className="space-y-4">
                  {smartConnections.map((connection, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="relative">
                          <img
                            src={connection.avatar}
                            alt={connection.name}
                            className="w-12 h-12 rounded-full border-2 border-blue-200 dark:border-slate-600"
                          />
                          {connection.online && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {connection.name}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {connection.course} • {connection.year}
                          </p>
                          <div className="flex items-center space-x-1 mt-1">
                            <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-1">
                              <div
                                className="bg-green-500 h-1 rounded-full"
                                style={{
                                  width: `${connection.compatibility}%`,
                                }}
                              />
                            </div>
                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                              {connection.compatibility}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                        💡 {connection.reason}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {connection.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button className="w-full py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                        Conectar
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Marketplace Activity */}
              <div className="glass p-6 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Marketplace Ao Vivo
                </h3>
                <div className="space-y-3">
                  {liveMarketplace.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-xl"
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          activity.type === "sale"
                            ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                            : activity.type === "service"
                            ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                            : "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                        }`}
                      >
                        {activity.type === "sale" ? (
                          <ShoppingBag className="h-3 w-3" />
                        ) : activity.type === "service" ? (
                          <Star className="h-3 w-3" />
                        ) : (
                          <Lightbulb className="h-3 w-3" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {activity.item}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {activity.seller ||
                            activity.provider ||
                            activity.leader}{" "}
                          →{" "}
                          {activity.buyer ||
                            activity.client ||
                            activity.members}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600 dark:text-green-400">
                          {activity.price || activity.equity}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass p-6 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Ações Rápidas
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors duration-200">
                    <DollarSign className="h-5 w-5" />
                    <span className="font-medium">Vender Material</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-xl hover:bg-yellow-200 dark:hover:bg-yellow-900/40 transition-colors duration-200">
                    <Rocket className="h-5 w-5" />
                    <span className="font-medium">Criar Projeto</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors duration-200">
                    <Star className="h-5 w-5" />
                    <span className="font-medium">Oferecer Serviço</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors duration-200">
                    <Coffee className="h-5 w-5" />
                    <span className="font-medium">Study Room</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
