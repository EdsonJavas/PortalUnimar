import { useEffect, useState } from "react";
import { useAuth } from "@getmocha/users-service/react";
import { useNavigate } from "react-router";
import Layout from "@/react-app/components/Layout";
import {
  Brain,
  ShoppingBag,
  Users,
  Lightbulb,
  Target,
  Zap,
  TrendingUp,
  Clock,
  Star,
  Gift,
  Rocket,
  DollarSign,
  BookOpen,
  Code,
  Coffee,
  Camera,
} from "lucide-react";

export default function Dashboard() {
  const { user, isPending } = useAuth();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!isPending && !user) {
      navigate("/");
    }
  }, [user, isPending, navigate]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (isPending || !user) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  const smartFeatures = [
    {
      title: "IA Study Assistant",
      description: "Seu assistente pessoal para estudos inteligentes",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      action: "Conversar com IA",
      insights: "Baseado no seu histórico, você deveria focar em Cálculo hoje",
    },
    {
      title: "Knowledge Market",
      description: "Compre, venda e troque conhecimento",
      icon: ShoppingBag,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      action: "Explorar Marketplace",
      insights: "12 novos materiais de Física disponíveis",
    },
    {
      title: "Smart Networking",
      description: "Conecte-se com pessoas certas no momento certo",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      action: "Ver Conexões",
      insights: "3 colegas com projetos compatíveis encontrados",
    },
    {
      title: "Project Hub",
      description: "Colabore em projetos revolucionários",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      action: "Criar Projeto",
      insights: "Hackathon de Sustentabilidade começando em 3 dias",
    },
  ];

  const quickOpportunities = [
    {
      type: "Estágio",
      company: "Google Brasil",
      title: "Desenvolvedor Full-Stack",
      match: "98%",
      deadline: "3 dias",
      reward: "R$ 4.500/mês",
      urgent: true,
    },
    {
      type: "Bolsa",
      company: "CNPq",
      title: "Iniciação Científica - IA",
      match: "94%",
      deadline: "1 semana",
      reward: "R$ 700/mês",
      urgent: false,
    },
    {
      type: "Freelance",
      company: "Startup Local",
      title: "App Mobile Flutter",
      match: "89%",
      deadline: "2 semanas",
      reward: "R$ 2.800",
      urgent: false,
    },
  ];

  const liveActivities = [
    {
      type: "market",
      title: "João vendeu suas notas de Cálculo III",
      value: "R$ 45",
      time: "2 min atrás",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      type: "project",
      title: 'Novo projeto "EcoApp" criado',
      value: "5 vagas abertas",
      time: "5 min atrás",
      icon: Lightbulb,
      color: "text-yellow-600",
    },
    {
      type: "study",
      title: "Maria iniciou sessão de estudo colaborativo",
      value: "Física Quântica",
      time: "8 min atrás",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      type: "service",
      title: "Pedro oferece tutoria de Programação",
      value: "R$ 30/hora",
      time: "12 min atrás",
      icon: Code,
      color: "text-purple-600",
    },
  ];

  const gamificationStats = [
    {
      label: "XP Total",
      value: "15,847",
      icon: Star,
      color: "text-yellow-500",
      progress: 75,
    },
    {
      label: "Streak Estudos",
      value: "23 dias",
      icon: Zap,
      color: "text-orange-500",
      progress: 90,
    },
    {
      label: "Moedas UniCoin",
      value: "2,340",
      icon: Gift,
      color: "text-green-500",
      progress: 60,
    },
    {
      label: "Nível Atual",
      value: "Mestre",
      icon: Rocket,
      color: "text-purple-500",
      progress: 85,
    },
  ];

  const todayTasks = [
    {
      task: "Revisar material de IA",
      priority: "high",
      time: "14:00",
      completed: false,
    },
    {
      task: "Encontro projeto EcoApp",
      priority: "medium",
      time: "16:30",
      completed: false,
    },
    {
      task: "Sessão mentoria João",
      priority: "high",
      time: "19:00",
      completed: false,
    },
    {
      task: "Upload notas Química",
      priority: "low",
      time: "20:00",
      completed: true,
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen p-6 space-y-8">
        <div className="max-w-7xl mx-auto">
          {/* Dynamic Header */}
          <div className="glass p-8 rounded-3xl shadow-xl mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Bom dia, {user.google_user_data.given_name}! ⚡
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Pronto para revolucionar seus estudos hoje?
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>
                      {currentTime.toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span>3 de 4 metas diárias concluídas</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-0 grid grid-cols-2 gap-4">
                {gamificationStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl backdrop-blur-sm"
                  >
                    <div
                      className={`flex items-center justify-center mb-2 ${stat.color}`}
                    >
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                    <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-1 mt-2">
                      <div
                        className={`h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                        style={{ width: `${stat.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Smart Features Grid */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {smartFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${feature.bgColor} p-6 rounded-3xl border border-gray-200/50 dark:border-slate-700/50 card-hover group cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {feature.description}
                  </p>

                  <div className="bg-white/80 dark:bg-slate-700/80 p-3 rounded-xl mb-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      💡 {feature.insights}
                    </p>
                  </div>

                  <button
                    className={`w-full py-2 bg-gradient-to-r ${feature.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    {feature.action}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Opportunities Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* AI-Powered Opportunities */}
              <div className="glass p-6 rounded-3xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <Brain className="h-6 w-6 mr-3 text-purple-600" />
                    Oportunidades Personalizadas por IA
                  </h3>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm rounded-full">
                    Atualizado agora
                  </span>
                </div>

                <div className="space-y-4">
                  {quickOpportunities.map((opp, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                        opp.urgent
                          ? "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10"
                          : "border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/30"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                opp.type === "Estágio"
                                  ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                  : opp.type === "Bolsa"
                                  ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                                  : "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                              }`}
                            >
                              {opp.type}
                            </span>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {opp.company}
                            </span>
                            {opp.urgent && (
                              <span className="px-2 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium rounded-full animate-pulse">
                                Urgente
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {opp.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>
                              Match:{" "}
                              <span className="text-green-600 dark:text-green-400 font-semibold">
                                {opp.match}
                              </span>
                            </span>
                            <span>Prazo: {opp.deadline}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600 dark:text-green-400 mb-1">
                            {opp.reward}
                          </p>
                          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300">
                            Candidatar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Ver Todas as Oportunidades (47 disponíveis)
                </button>
              </div>

              {/* Today's Tasks */}
              <div className="glass p-6 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  Agenda Inteligente de Hoje
                </h3>

                <div className="space-y-3">
                  {todayTasks.map((task, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                        task.completed
                          ? "bg-green-50 dark:bg-green-900/10"
                          : "bg-gray-50 dark:bg-slate-700/30"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          task.completed
                            ? "bg-green-500 border-green-500"
                            : task.priority === "high"
                            ? "border-red-500"
                            : task.priority === "medium"
                            ? "border-yellow-500"
                            : "border-gray-400"
                        }`}
                      ></div>

                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            task.completed
                              ? "line-through text-gray-500"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {task.task}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {task.time}
                        </p>
                      </div>

                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          task.priority === "high"
                            ? "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                            : task.priority === "medium"
                            ? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
                            : "bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Atividades ao Vivo
                </h3>

                <div className="space-y-4">
                  {liveActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer"
                      >
                        <div
                          className={`p-2 rounded-lg ${activity.color} bg-gray-100 dark:bg-slate-700`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {activity.title}
                          </p>
                          <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                            {activity.value}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button className="w-full mt-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200">
                  Ver Tudo
                </button>
              </div>

              {/* Quick Actions */}
              <div className="glass p-6 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Ações Rápidas
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <button className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors duration-200 text-center">
                    <Coffee className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-xs font-medium">Study Room</span>
                  </button>
                  <button className="p-3 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors duration-200 text-center">
                    <ShoppingBag className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-xs font-medium">Marketplace</span>
                  </button>
                  <button className="p-3 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors duration-200 text-center">
                    <Lightbulb className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-xs font-medium">Novo Projeto</span>
                  </button>
                  <button className="p-3 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-xl hover:bg-yellow-200 dark:hover:bg-yellow-900/40 transition-colors duration-200 text-center">
                    <Camera className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-xs font-medium">Scan Notes</span>
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
