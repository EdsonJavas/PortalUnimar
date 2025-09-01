import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import Layout from "@/react-app/components/Layout";
import {
  GraduationCap,
  Brain,
  ShoppingBag,
  Users,
  Lightbulb,
  Target,
  Coffee,
  Code,
  Camera,
  TrendingUp,
  DollarSign,
  BookOpen,
  MessageSquare,
  Calendar,
  Award,
  Settings,
  LogOut,
  Sun,
  Moon,
  Bell,
  Search,
  Plus,
  BarChart3,
  Zap,
  Star,
  Activity,
} from "lucide-react";

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const quickActions = [
    {
      icon: Brain,
      label: "IA Assistant",
      color: "from-purple-500 to-indigo-600",
      action: () => {},
    },
    {
      icon: ShoppingBag,
      label: "Marketplace",
      color: "from-green-500 to-emerald-600",
      action: () => {},
    },
    {
      icon: Lightbulb,
      label: "Projetos",
      color: "from-yellow-500 to-orange-600",
      action: () => {},
    },
    {
      icon: Coffee,
      label: "Co-working",
      color: "from-amber-500 to-yellow-600",
      action: () => {},
    },
    {
      icon: Code,
      label: "Desenvolver",
      color: "from-blue-500 to-cyan-600",
      action: () => {},
    },
    {
      icon: Camera,
      label: "Scan Notes",
      color: "from-red-500 to-pink-600",
      action: () => {},
    },
  ];

  const dashboardStats = [
    {
      label: "Materiais Vendidos",
      value: "23",
      change: "+12%",
      icon: ShoppingBag,
      color: "text-green-600",
    },
    {
      label: "Pontos IA",
      value: "1,247",
      change: "+8%",
      icon: Brain,
      color: "text-purple-600",
    },
    {
      label: "Conexões Ativas",
      value: "89",
      change: "+15%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      label: "Projetos",
      value: "4",
      change: "+2",
      icon: Lightbulb,
      color: "text-yellow-600",
    },
  ];

  const recentActivities = [
    {
      type: "sale",
      message: 'Vendeu "Notas de Cálculo II" por R$ 25',
      time: "2 horas atrás",
      icon: DollarSign,
      color: "text-green-600 bg-green-100 dark:bg-green-900/20",
    },
    {
      type: "project",
      message: 'Novo colaborador no projeto "App Sustentável"',
      time: "4 horas atrás",
      icon: Users,
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/20",
    },
    {
      type: "ai",
      message: "IA gerou plano de estudos personalizado",
      time: "6 horas atrás",
      icon: Brain,
      color: "text-purple-600 bg-purple-100 dark:bg-purple-900/20",
    },
    {
      type: "achievement",
      message: 'Conquistou badge "Vendedor Novato"',
      time: "1 dia atrás",
      icon: Award,
      color: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20",
    },
  ];

  const upcomingEvents = [
    {
      title: "Sessão Co-working: Programação",
      time: "Hoje, 14:00",
      participants: 12,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Projeto: App Sustentável - Review",
      time: "Amanhã, 10:00",
      participants: 5,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Workshop: Vendas no Marketplace",
      time: "Sex, 16:00",
      participants: 28,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Bem-vindo de volta,{" "}
            {user?.displayName?.split(" ")[0] || "Estudante"}! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Continue sua jornada acadêmica e profissional no Santuário Unimar
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            Ações Rápidas
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className="group cursor-pointer p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl border border-blue-200/50 dark:border-slate-700/50 transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`p-3 bg-gradient-to-r ${action.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3`}
                  >
                    <Icon className="h-6 w-6 text-white mx-auto" />
                  </div>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {action.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
            Suas Estatísticas
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {dashboardStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-blue-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {stat.change}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-blue-500" />
                  Atividades Recentes
                </h3>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                  Ver todas
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <div className={`p-2 rounded-xl ${activity.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-blue-200/50 dark:border-slate-700/50 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-500" />
                  Próximos Eventos
                </h3>
                <button className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/20 hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-all duration-300">
                  <Plus className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </button>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-gray-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    <div
                      className={`w-full h-2 bg-gradient-to-r ${event.color} rounded-full mb-3`}
                    ></div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{event.time}</span>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Progresso Mensal</h3>
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Vendas</span>
                  <span>78%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-3/4"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Projetos</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-11/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
