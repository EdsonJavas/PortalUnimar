import React, { useState } from "react";
import { useAuth } from "@getmocha/users-service/react";
import { useNavigate } from "react-router";
import Layout from "@/react-app/components/Layout";
import {
  Mail,
  Phone,
  BookOpen,
  Calendar,
  Edit3,
  Save,
  X,
  Camera,
  MapPin,
  Award,
  TrendingUp,
  Target,
  Star,
  CheckCircle,
  DollarSign,
  Brain,
  Zap,
  Gift,
  Rocket,
  Download,
  Heart,
  Crown,
  Trophy,
  Flame,
  Briefcase,
  Users,
  Clock,
  MessageCircle,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from "recharts";

export default function Profile() {
  const { user, isPending } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [formData, setFormData] = useState({
    course: "Engenharia de Software",
    semester: "6º Semestre",
    registrationNumber: "2024001234",
    phone: "(11) 99999-9999",
    bio: "Estudante apaixonado por tecnologia e inovação. Sempre buscando aprender coisas novas e contribuir para projetos que façam a diferença. Especialista em desenvolvimento full-stack e entusiasta de IA.",
    city: "São Paulo, SP",
    linkedin: "linkedin.com/in/estudante",
    github: "github.com/estudante",
    portfolio: "estudante.dev",
  });

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

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // Enhanced Academic Performance Data
  const subjects = [
    {
      id: 1,
      name: "Matemática Avançada",
      professor: "Prof. Dr. João Silva",
      semester: "2024-1",
      credits: 4,
      grades: [
        { type: "P1", value: 8.5, weight: 0.3, date: "2024-03-15" },
        { type: "P2", value: 9.0, weight: 0.3, date: "2024-05-10" },
        { type: "Trabalho", value: 8.8, weight: 0.2, date: "2024-04-20" },
        { type: "Participação", value: 9.2, weight: 0.2, date: "2024-06-01" },
      ],
      currentAverage: 8.82,
      attendance: { present: 18, total: 20, percentage: 90 },
      status: "approved",
      color: "from-blue-500 to-blue-600",
      difficulty: "Avançado",
      nextEvaluation: "2024-06-20",
    },
    {
      id: 2,
      name: "Física Experimental",
      professor: "Prof. Dra. Maria Santos",
      semester: "2024-1",
      credits: 3,
      grades: [
        { type: "P1", value: 7.5, weight: 0.4, date: "2024-03-20" },
        { type: "P2", value: 8.2, weight: 0.4, date: "2024-05-15" },
        { type: "Lab", value: 9.0, weight: 0.2, date: "2024-05-30" },
      ],
      currentAverage: 7.94,
      attendance: { present: 16, total: 20, percentage: 80 },
      status: "approved",
      color: "from-green-500 to-green-600",
      difficulty: "Intermediário",
      nextEvaluation: "2024-06-25",
    },
    {
      id: 3,
      name: "Programação Orientada a Objetos",
      professor: "Prof. Carlos Oliveira",
      semester: "2024-1",
      credits: 4,
      grades: [
        { type: "P1", value: 9.5, weight: 0.3, date: "2024-03-25" },
        { type: "Projeto", value: 9.8, weight: 0.4, date: "2024-05-20" },
        { type: "P2", value: 9.2, weight: 0.3, date: "2024-06-05" },
      ],
      currentAverage: 9.47,
      attendance: { present: 19, total: 20, percentage: 95 },
      status: "approved",
      color: "from-purple-500 to-purple-600",
      difficulty: "Avançado",
      nextEvaluation: "2024-06-30",
    },
    {
      id: 4,
      name: "Química Orgânica",
      professor: "Prof. Dra. Ana Costa",
      semester: "2024-1",
      credits: 3,
      grades: [
        { type: "P1", value: 6.8, weight: 0.5, date: "2024-03-18" },
        { type: "P2", value: 7.5, weight: 0.5, date: "2024-05-25" },
      ],
      currentAverage: 7.15,
      attendance: { present: 15, total: 20, percentage: 75 },
      status: "approved",
      color: "from-orange-500 to-orange-600",
      difficulty: "Intermediário",
      nextEvaluation: "2024-07-02",
    },
  ];

  const performanceOverTime = [
    { month: "Jan", average: 7.8, attendance: 88, projects: 2 },
    { month: "Fev", average: 8.1, attendance: 92, projects: 3 },
    { month: "Mar", average: 8.3, attendance: 85, projects: 4 },
    { month: "Abr", average: 8.5, attendance: 90, projects: 5 },
    { month: "Mai", average: 8.4, attendance: 87, projects: 6 },
    { month: "Jun", average: 8.6, attendance: 89, projects: 8 },
  ];

  const skillsRadar = [
    { skill: "Matemática", A: 8.5, fullMark: 10 },
    { skill: "Física", A: 7.9, fullMark: 10 },
    { skill: "Programação", A: 9.5, fullMark: 10 },
    { skill: "Química", A: 7.2, fullMark: 10 },
    { skill: "Análise", A: 8.8, fullMark: 10 },
    { skill: "Criatividade", A: 9.0, fullMark: 10 },
    { skill: "Liderança", A: 8.3, fullMark: 10 },
    { skill: "Comunicação", A: 8.7, fullMark: 10 },
  ];

  const overallStats = {
    totalSubjects: subjects.length,
    overallAverage:
      subjects.reduce((acc, sub) => acc + sub.currentAverage, 0) /
      subjects.length,
    approvedSubjects: subjects.filter((sub) => sub.status === "approved")
      .length,
    totalCredits: subjects.reduce((acc, sub) => acc + sub.credits, 0),
    overallAttendance:
      subjects.reduce((acc, sub) => acc + sub.attendance.percentage, 0) /
      subjects.length,
  };

  const gamificationStats = [
    {
      label: "XP Total",
      value: "15,847",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      progress: 75,
      level: "Mestre",
      nextLevel: 20000,
    },
    {
      label: "Streak Estudos",
      value: "23 dias",
      icon: Flame,
      color: "from-orange-500 to-red-500",
      progress: 90,
      level: "Em Chamas",
      nextLevel: "30 dias",
    },
    {
      label: "UniCoins",
      value: "2,340",
      icon: Gift,
      color: "from-green-500 to-emerald-500",
      progress: 60,
      level: "Rico",
      nextLevel: 5000,
    },
    {
      label: "Nível",
      value: "Mestre",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      progress: 85,
      level: "Elite",
      nextLevel: "Lendário",
    },
  ];

  const marketplaceStats = [
    {
      label: "Materiais Vendidos",
      value: "12",
      amount: "R$ 847",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      growth: "+45%",
      rank: "#3 em Vendas",
    },
    {
      label: "Tutorias Oferecidas",
      value: "8",
      amount: "R$ 540",
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      growth: "+67%",
      rank: "Top 5%",
    },
    {
      label: "Projetos Participados",
      value: "5",
      amount: "Portfolio++",
      icon: Rocket,
      color: "from-purple-500 to-pink-600",
      growth: "+200%",
      rank: "Líder em 3",
    },
    {
      label: "Avaliação Média",
      value: "4.9",
      amount: "67 reviews",
      icon: Star,
      color: "from-yellow-500 to-orange-600",
      growth: "+0.2",
      rank: "Excelência",
    },
  ];

  const achievements = [
    {
      title: "Money Maker",
      description: "R$ 2.1k vendidos em materiais",
      icon: "💰",
      color: "bg-gradient-to-r from-green-400 to-emerald-500",
      rarity: "Épico",
      progress: 100,
      date: "15 Jun 2024",
    },
    {
      title: "IA Whisperer",
      description: "500+ consultas ao assistente",
      icon: "🤖",
      color: "bg-gradient-to-r from-purple-400 to-indigo-500",
      rarity: "Raro",
      progress: 100,
      date: "10 Jun 2024",
    },
    {
      title: "Project Mastermind",
      description: "3 projetos liderados com sucesso",
      icon: "🚀",
      color: "bg-gradient-to-r from-blue-400 to-cyan-500",
      rarity: "Épico",
      progress: 100,
      date: "05 Jun 2024",
    },
    {
      title: "Super Networker",
      description: "50+ conexões estratégicas",
      icon: "🌟",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      rarity: "Lendário",
      progress: 100,
      date: "01 Jun 2024",
    },
    {
      title: "Code Ninja",
      description: "Top 5% em programação",
      icon: "⚡",
      color: "bg-gradient-to-r from-indigo-400 to-purple-500",
      rarity: "Épico",
      progress: 100,
      date: "25 Mai 2024",
    },
    {
      title: "Study Beast",
      description: "45 dias consecutivos",
      icon: "🔥",
      color: "bg-gradient-to-r from-red-400 to-pink-500",
      rarity: "Mítico",
      progress: 90,
      date: "Em progresso",
    },
  ];

  const recentActivity = [
    {
      type: "sale",
      title: 'Vendeu "Resumo Cálculo III"',
      value: "R$ 67",
      time: "2 horas atrás",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      type: "achievement",
      title: 'Conquistou "Money Maker"',
      value: "Achievement",
      time: "1 dia atrás",
      icon: Trophy,
      color: "text-yellow-600",
    },
    {
      type: "project",
      title: 'Entrou no projeto "EcoApp"',
      value: "Colaboração",
      time: "2 dias atrás",
      icon: Rocket,
      color: "text-purple-600",
    },
    {
      type: "tutoring",
      title: "Sessão de tutoria finalizada",
      value: "R$ 45",
      time: "3 dias atrás",
      icon: Brain,
      color: "text-blue-600",
    },
  ];

  const socialStats = [
    { label: "Seguidores", value: "1,234", icon: Users },
    { label: "Seguindo", value: "567", icon: Heart },
    { label: "Posts", value: "89", icon: MessageCircle },
    { label: "Curtidas", value: "4.5k", icon: Heart },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400";
      case "reproved":
        return "text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400";
      case "pending":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "approved":
        return "Aprovado";
      case "reproved":
        return "Reprovado";
      case "pending":
        return "Cursando";
      default:
        return "N/A";
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Comum":
        return "text-gray-600 bg-gray-100 dark:bg-gray-900/20";
      case "Raro":
        return "text-blue-600 bg-blue-100 dark:bg-blue-900/20";
      case "Épico":
        return "text-purple-600 bg-purple-100 dark:bg-purple-900/20";
      case "Lendário":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20";
      case "Mítico":
        return "text-red-600 bg-red-100 dark:bg-red-900/20";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-900/20";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Enhanced Header with Hero Profile */}
          <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative glass p-8 rounded-3xl shadow-2xl border border-blue-200/50 dark:border-slate-700/50">
              <div className="flex flex-col lg:flex-row lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Enhanced Avatar Section */}
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <img
                      src={
                        user.google_user_data.picture ||
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      }
                      alt={user.google_user_data.name || "Avatar"}
                      className="relative w-40 h-40 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                    />
                    <button className="absolute bottom-2 right-2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <Camera className="h-5 w-5" />
                    </button>

                    {/* Status Badge */}
                    <div className="absolute top-2 right-2 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg">
                      🔥 Online
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {user.google_user_data.name || "Usuário"}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                      {formData.course}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {formData.semester} • Matrícula:{" "}
                      {formData.registrationNumber}
                    </p>

                    {/* Level Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg">
                      <Crown className="h-4 w-4" />
                      <span className="font-bold">Nível Mestre</span>
                    </div>
                  </div>

                  {/* Social Stats */}
                  <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                    {socialStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={index}
                          className="text-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm"
                        >
                          <Icon className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced Information Section */}
                <div className="flex-1 space-y-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Perfil Completo
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Gerencie suas informações e acompanhe seu progresso
                      </p>
                    </div>

                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300"
                      >
                        <Edit3 className="h-4 w-4" />
                        <span>Editar</span>
                      </button>
                    ) : (
                      <div className="flex space-x-3">
                        <button
                          onClick={handleSave}
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300"
                        >
                          <Save className="h-4 w-4" />
                          <span>Salvar</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300"
                        >
                          <X className="h-4 w-4" />
                          <span>Cancelar</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Form Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <span>Email</span>
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        disabled
                        className="w-full px-4 py-3 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white opacity-60"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span>Telefone</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 dark:disabled:bg-slate-700"
                      />
                    </div>

                    {/* Course */}
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <BookOpen className="h-4 w-4 text-purple-600" />
                        <span>Curso</span>
                      </label>
                      <input
                        type="text"
                        value={formData.course}
                        onChange={(e) =>
                          setFormData({ ...formData, course: e.target.value })
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 dark:disabled:bg-slate-700"
                      />
                    </div>

                    {/* Semester */}
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Calendar className="h-4 w-4 text-orange-600" />
                        <span>Semestre</span>
                      </label>
                      <input
                        type="text"
                        value={formData.semester}
                        onChange={(e) =>
                          setFormData({ ...formData, semester: e.target.value })
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 dark:disabled:bg-slate-700"
                      />
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <MapPin className="h-4 w-4 text-red-600" />
                        <span>Cidade</span>
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 dark:disabled:bg-slate-700"
                      />
                    </div>

                    {/* LinkedIn */}
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Briefcase className="h-4 w-4 text-blue-600" />
                        <span>LinkedIn</span>
                      </label>
                      <input
                        type="text"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, linkedin: e.target.value })
                        }
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 dark:disabled:bg-slate-700"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Sobre mim
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) =>
                        setFormData({ ...formData, bio: e.target.value })
                      }
                      disabled={!isEditing}
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-60 disabled:bg-gray-100 dark:disabled:bg-slate-700 resize-none"
                      placeholder="Conte um pouco sobre você..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-2xl">
            {[
              { id: "overview", label: "Visão Geral", icon: TrendingUp },
              {
                id: "academic",
                label: "Performance Acadêmica",
                icon: BookOpen,
              },
              {
                id: "marketplace",
                label: "Marketplace & Gamificação",
                icon: DollarSign,
              },
              { id: "achievements", label: "Conquistas", icon: Trophy },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-md"
                      : "text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Quick Stats */}
              <div className="lg:col-span-2 space-y-6">
                {/* Performance Overview */}
                <div className="glass p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                    Performance Geral
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <Star className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {overallStats.overallAverage.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Média Geral
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                      <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {Math.round(overallStats.overallAttendance)}%
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Frequência
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {overallStats.approvedSubjects}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Aprovações
                      </p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                      <Award className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {overallStats.totalCredits}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Créditos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="glass p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                    Atividade Recente
                  </h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                        >
                          <div
                            className={`p-3 rounded-xl ${activity.color} bg-gray-100 dark:bg-slate-700`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white">
                              {activity.title}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {activity.time}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900 dark:text-white">
                              {activity.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Gamification Quick View */}
                <div className="glass p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                    Status
                  </h3>
                  <div className="space-y-4">
                    {gamificationStats.slice(0, 2).map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={index}
                          className="text-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl"
                        >
                          <div
                            className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-3`}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </p>
                          <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2 mt-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${stat.color}`}
                              style={{ width: `${stat.progress}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="glass p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Ações Rápidas
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors duration-200">
                      <DollarSign className="h-5 w-5" />
                      <span>Vender Material</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-xl hover:bg-yellow-200 dark:hover:bg-yellow-900/40 transition-colors duration-200">
                      <Rocket className="h-5 w-5" />
                      <span>Criar Projeto</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors duration-200">
                      <Brain className="h-5 w-5" />
                      <span>Oferecer Tutoria</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "academic" && (
            <div className="space-y-8">
              {/* Academic Performance Overview */}
              <div className="glass p-8 rounded-3xl shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Performance Acadêmica Completa
                  </h3>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
                    <Download className="h-4 w-4" />
                    <span>Exportar</span>
                  </button>
                </div>

                {/* Performance Charts */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Performance Over Time */}
                  <div className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-2xl">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                      Evolução Semestral
                    </h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={performanceOverTime}>
                          <defs>
                            <linearGradient
                              id="colorAverage"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#3b82f6"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#3b82f6"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            className="opacity-30"
                          />
                          <XAxis
                            dataKey="month"
                            className="text-gray-600 dark:text-gray-400"
                          />
                          <YAxis
                            domain={[6, 10]}
                            className="text-gray-600 dark:text-gray-400"
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "rgba(255, 255, 255, 0.95)",
                              border: "none",
                              borderRadius: "12px",
                              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="average"
                            stroke="#3b82f6"
                            fillOpacity={1}
                            fill="url(#colorAverage)"
                            strokeWidth={3}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Skills Radar */}
                  <div className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-2xl">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-purple-600" />
                      Radar de Competências
                    </h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={skillsRadar}>
                          <PolarGrid />
                          <PolarAngleAxis
                            dataKey="skill"
                            className="text-gray-600 dark:text-gray-400"
                            tick={{ fontSize: 12 }}
                          />
                          <PolarRadiusAxis domain={[0, 10]} tick={false} />
                          <Radar
                            name="Competências"
                            dataKey="A"
                            stroke="#8b5cf6"
                            fill="#8b5cf6"
                            fillOpacity={0.3}
                            strokeWidth={2}
                          />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Detailed Subjects */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-indigo-600" />
                    Disciplinas Detalhadas - 2024.1
                  </h4>
                  {subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {subject.name}
                            </h5>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                subject.status
                              )}`}
                            >
                              {getStatusText(subject.status)}
                            </span>
                            <span className="px-2 py-1 bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                              {subject.difficulty}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            {subject.professor}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {subject.credits} créditos • Próxima avaliação:{" "}
                            {new Date(
                              subject.nextEvaluation
                            ).toLocaleDateString("pt-BR")}
                          </p>
                        </div>

                        <div className="mt-4 lg:mt-0 grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                              {subject.currentAverage.toFixed(2)}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Média
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                              {subject.attendance.percentage}%
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Frequência
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {subject.grades.map((grade, index) => (
                          <div
                            key={index}
                            className="bg-white dark:bg-slate-800 p-3 rounded-lg text-center border-l-4 border-blue-500"
                          >
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                              {grade.type}
                            </p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                              {grade.value.toFixed(1)}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                              Peso: {(grade.weight * 100).toFixed(0)}%
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>
                          Presenças: {subject.attendance.present}/
                          {subject.attendance.total}
                        </span>
                        <div className="w-32 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              subject.attendance.percentage >= 75
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                            style={{
                              width: `${subject.attendance.percentage}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "marketplace" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Gamification Stats */}
              <div className="glass p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                  Status de Gamificação
                </h3>
                <div className="space-y-6">
                  {gamificationStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}
                            >
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="text-lg font-bold text-gray-900 dark:text-white">
                                {stat.value}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {stat.level}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                              Próximo: {stat.nextLevel}
                            </p>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full bg-gradient-to-r ${stat.color} relative overflow-hidden`}
                            style={{ width: `${stat.progress}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          {stat.progress}% concluído
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Marketplace Stats */}
              <div className="glass p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                  Estatísticas do Marketplace
                </h3>
                <div className="space-y-6">
                  {marketplaceStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}
                            >
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="text-lg font-bold text-gray-900 dark:text-white">
                                {stat.value}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-green-600 dark:text-green-400">
                              {stat.growth}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                              {stat.rank}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            {stat.amount}
                          </p>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                              {stat.growth}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="space-y-8">
              {/* Achievement Showcase */}
              <div className="glass p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <Trophy className="h-6 w-6 mr-3 text-yellow-600" />
                  Conquistas do Ecossistema Unimar
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`${achievement.color} p-6 rounded-3xl text-white relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full -ml-8 -mb-8"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl mb-2">
                            {achievement.icon}
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${getRarityColor(
                              achievement.rarity
                            )} bg-white/20 text-white`}
                          >
                            {achievement.rarity}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-sm opacity-90 mb-4">
                          {achievement.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {achievement.progress === 100 ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                            <span className="text-sm font-medium">
                              {achievement.progress === 100
                                ? "Concluído"
                                : `${achievement.progress}%`}
                            </span>
                          </div>
                          <span className="text-xs opacity-80">
                            {achievement.date}
                          </span>
                        </div>

                        {achievement.progress < 100 && (
                          <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                            <div
                              className="bg-white h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${achievement.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Progress */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="glass p-6 rounded-2xl shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-blue-600" />
                    Próximas Conquistas
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          🎓 Academic Excellence
                        </span>
                        <span className="text-sm text-blue-600 dark:text-blue-400">
                          75%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Mantenha média 9.0+ por 3 semestres
                      </p>
                      <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          💎 Diamond Seller
                        </span>
                        <span className="text-sm text-green-600 dark:text-green-400">
                          40%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Venda R$ 5.000 em materiais
                      </p>
                      <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Crown className="h-5 w-5 mr-2 text-yellow-600" />
                    Hall da Fama
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
                      <div className="text-2xl">🥇</div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Top Vendedor do Mês
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Junho 2024
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-silver-50 dark:bg-gray-900/20 rounded-xl">
                      <div className="text-2xl">🥈</div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Melhor Tutor IA
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Maio 2024
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                      <div className="text-2xl">🥉</div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Projeto Inovador
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Abril 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
