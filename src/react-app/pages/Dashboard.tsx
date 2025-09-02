import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import Layout from "@/react-app/components/Layout";
import {
  Brain,
  ShoppingBag,
  Users,
  Coffee,
  Code,
  TrendingUp,
  Calendar,
  Award,
  Plus,
  Zap,
  Activity,
  BookOpen,
  GraduationCap,
  Clock,
  FileText,
  MessageSquare,
  Bell,
  MapPin,
  Sun,
  Star,
  Target,
  AlertCircle,
  Download,
  Share,
  Heart,
  Eye,
  ChevronRight,
  Bookmark,
  Wifi,
  Building,
  Utensils,
  Car,
  Laptop,
  HelpCircle,
  Filter,
  ArrowUp,
  ArrowDown,
  Minus,
  Edit,
  Wallet,
} from "lucide-react";

export const Dashboard = () => {
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

  // Informações do estudante
  const studentInfo = {
    name: user?.displayName || "Estudante",
    course: "Ciência da Computação",
    semester: "6º Semestre",
    ra: "2024001234",
    gpa: 8.7,
    credits: 145,
    totalCredits: 200,
    ranking: 15,
    totalStudents: 120,
  };

  // Estatísticas em tempo real
  const liveStats = [
    {
      label: "Estudantes Online",
      value: "1,247",
      subtitle: "no campus agora",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      trend: "+45 nas últimas 2h",
    },
    {
      label: "Salas Ocupadas",
      value: "34/67",
      subtitle: "laboratórios ativos",
      icon: Building,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      trend: "Pico às 14h",
    },
    {
      label: "Eventos Hoje",
      value: "12",
      subtitle: "palestras e workshops",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      trend: "3 ainda vagas",
    },
    {
      label: "Fila Biblioteca",
      value: "8 min",
      subtitle: "tempo de espera",
      icon: BookOpen,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      trend: "Movimento normal",
    },
  ];

  // Schedule do dia atual
  const todaySchedule = [
    {
      time: "08:00",
      subject: "Algoritmos e Estruturas de Dados",
      professor: "Prof. Silva",
      room: "Lab 205",
      type: "Aula Prática",
      status: "current",
      duration: "2h",
      attendees: 28,
      materials: 3,
    },
    {
      time: "10:00",
      subject: "Intervalo",
      professor: "",
      room: "Cantina",
      type: "Livre",
      status: "break",
      duration: "20min",
      attendees: null,
      materials: 0,
    },
    {
      time: "10:20",
      subject: "Banco de Dados Avançado",
      professor: "Prof. Santos",
      room: "Sala 301",
      type: "Teoria",
      status: "next",
      duration: "1h40min",
      attendees: 35,
      materials: 5,
    },
    {
      time: "14:00",
      subject: "Engenharia de Software",
      professor: "Prof. Lima",
      room: "Auditório",
      type: "Seminário",
      status: "upcoming",
      duration: "2h",
      attendees: 45,
      materials: 2,
    },
    {
      time: "16:00",
      subject: "Projeto Integrador",
      professor: "Prof. Costa",
      room: "Lab 101",
      type: "Orientação",
      status: "upcoming",
      duration: "1h",
      attendees: 8,
      materials: 1,
    },
  ];

  // Atividades da comunidade acadêmica
  const communityActivity = [
    {
      user: "Ana Silva",
      action: "compartilhou",
      content: "Resumo de Cálculo III",
      target: "Grupo: Matemática Aplicada",
      time: "5 min atrás",
      likes: 12,
      comments: 3,
      avatar: "AS",
      type: "share",
      subject: "Matemática",
    },
    {
      user: "Carlos Mendes",
      action: "postou pergunta",
      content: "Alguém pode explicar ponteiros em C?",
      target: "Fórum: Programação",
      time: "12 min atrás",
      likes: 8,
      comments: 15,
      avatar: "CM",
      type: "question",
      subject: "Programação",
    },
    {
      user: "Mariana Costa",
      action: "criou evento",
      content: "Hackathon: IA para Sustentabilidade",
      target: "Centro Acadêmico",
      time: "25 min atrás",
      likes: 34,
      comments: 7,
      avatar: "MC",
      type: "event",
      subject: "Eventos",
    },
    {
      user: "João Pedro",
      action: "vendeu material",
      content: "Apostila de Física Quântica",
      target: "Marketplace Estudantil",
      time: "1h atrás",
      likes: 6,
      comments: 2,
      avatar: "JP",
      type: "sale",
      subject: "Física",
    },
    {
      user: "Prof. Oliveira",
      action: "publicou",
      content: "Lista de exercícios extra",
      target: "Disciplina: Machine Learning",
      time: "2h atrás",
      likes: 28,
      comments: 12,
      avatar: "PO",
      type: "material",
      subject: "IA",
    },
    {
      user: "Beatriz Santos",
      action: "formou grupo",
      content: "Estudo para P2 de Estatística",
      target: "4 membros",
      time: "3h atrás",
      likes: 11,
      comments: 9,
      avatar: "BS",
      type: "group",
      subject: "Matemática",
    },
  ];

  // Performance das disciplinas
  const subjectsPerformance = [
    {
      name: "Desenvolvimento Web",
      professor: "Prof. Lima",
      progress: 92,
      grade: 9.2,
      nextEval: "Projeto Final",
      dueDate: "Em 5 dias",
      color: "from-blue-500 to-cyan-600",
      assignments: { completed: 7, total: 8, pending: 1 },
      attendance: 95,
      trend: "up",
    },
    {
      name: "Inteligência Artificial",
      professor: "Prof. Oliveira",
      progress: 88,
      grade: 8.8,
      nextEval: "Apresentação",
      dueDate: "Amanhã",
      color: "from-purple-500 to-indigo-600",
      assignments: { completed: 9, total: 10, pending: 1 },
      attendance: 100,
      trend: "up",
    },
    {
      name: "Banco de Dados",
      professor: "Prof. Santos",
      progress: 78,
      grade: 8.5,
      nextEval: "Prova P2",
      dueDate: "Em 3 dias",
      color: "from-green-500 to-emerald-600",
      assignments: { completed: 5, total: 6, pending: 1 },
      attendance: 90,
      trend: "stable",
    },
    {
      name: "Algoritmos Avançados",
      professor: "Prof. Silva",
      progress: 85,
      grade: 9.0,
      nextEval: "Exercícios",
      dueDate: "Esta semana",
      color: "from-orange-500 to-red-600",
      assignments: { completed: 6, total: 7, pending: 1 },
      attendance: 88,
      trend: "up",
    },
  ];

  // Trending topics na universidade
  const trendingTopics = [
    { topic: "#HackathonUnimar2024", posts: 156, participants: 89 },
    { topic: "#EstudoEmGrupo", posts: 234, participants: 145 },
    { topic: "#ProjetoFinal", posts: 89, participants: 67 },
    { topic: "#EstágioTech", posts: 178, participants: 203 },
    { topic: "#IniciaçãoCientífica", posts: 67, participants: 34 },
  ];

  // Marketplace activity
  const marketplaceActivity = [
    {
      item: "Resumo Completo - Cálculo II",
      seller: "Maria Santos",
      price: "R$ 15",
      sales: 23,
      rating: 4.9,
      category: "Matemática",
      time: "2h atrás",
    },
    {
      item: "Projeto Arduino - Sensores",
      seller: "Pedro Costa",
      price: "R$ 35",
      sales: 8,
      rating: 5.0,
      category: "Engenharia",
      time: "4h atrás",
    },
    {
      item: "Slides - História do Brasil",
      seller: "Ana Oliveira",
      price: "R$ 8",
      sales: 45,
      rating: 4.7,
      category: "História",
      time: "6h atrás",
    },
  ];

  // Quick stats do usuário
  const userQuickStats = [
    { label: "Ranking da Turma", value: `${studentInfo.ranking}º`, total: studentInfo.totalStudents },
    { label: "Frequência", value: "94%", total: "Excelente" },
    { label: "Créditos", value: studentInfo.credits, total: studentInfo.totalCredits },
    { label: "Participação", value: "Alta", total: "Top 20%" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "bg-green-500";
      case "next": return "bg-blue-500";
      case "break": return "bg-yellow-500";
      default: return "bg-gray-400";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "share": return Share;
      case "question": return HelpCircle;
      case "event": return Calendar;
      case "sale": return ShoppingBag;
      case "material": return BookOpen;
      case "group": return Users;
      default: return Activity;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return ArrowUp;
      case "down": return ArrowDown;
      default: return Minus;
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Header Superior Compacto */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 rounded-2xl p-6 mb-6 shadow-2xl">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{studentInfo.name}</h1>
                <p className="text-blue-100">{studentInfo.course} • {studentInfo.semester}</p>
                <p className="text-blue-200 text-sm">RA: {studentInfo.ra}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-6">
                {userQuickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-blue-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats em Tempo Real */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {liveStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 ${stat.bgColor} rounded-lg`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {stat.subtitle}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  {stat.trend}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Coluna Principal - 8 colunas */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Cronograma do Dia */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  Cronograma de Hoje
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Agora: 09:45</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-3">
                {todaySchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-xl border-l-4 ${
                      item.status === 'current' 
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                        : item.status === 'next'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : item.status === 'break'
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                        : 'border-gray-300 bg-gray-50 dark:bg-slate-700/50'
                    } transition-all duration-300 hover:shadow-md`}
                  >
                    <div className="text-center min-w-[60px]">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {item.time}
                      </p>
                      <p className="text-xs text-gray-500">{item.duration}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                          {item.subject}
                        </h4>
                        {item.attendees && (
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Users className="h-3 w-3" />
                            <span>{item.attendees}</span>
                            {item.materials > 0 && (
                              <>
                                <FileText className="h-3 w-3 ml-2" />
                                <span>{item.materials}</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {item.professor} • {item.room}
                        </p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.type === 'Aula Prática' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                            : item.type === 'Teoria'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                            : item.type === 'Seminário'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance das Disciplinas */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <Target className="h-5 w-5 mr-2 text-green-500" />
                  Performance das Disciplinas
                </h3>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                  Histórico completo
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {subjectsPerformance.map((subject, index) => {
                  const TrendIcon = getTrendIcon(subject.trend);
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-gray-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                          {subject.name}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            {subject.grade}
                          </span>
                          <TrendIcon className={`h-4 w-4 ${
                            subject.trend === 'up' ? 'text-green-500' : 
                            subject.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                          }`} />
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-xs">
                          <span>Progresso</span>
                          <span>{subject.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${subject.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${subject.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="text-center p-2 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                          <p className="text-xs text-gray-500">Trabalhos</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            {subject.assignments.completed}/{subject.assignments.total}
                          </p>
                        </div>
                        <div className="text-center p-2 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                          <p className="text-xs text-gray-500">Frequência</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            {subject.attendance}%
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Próximo: {subject.nextEval}
                          </p>
                          <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                            {subject.dueDate}
                          </p>
                        </div>
                        <button className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-all duration-300">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Feed de Atividades da Comunidade */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-500" />
                  Atividade da Comunidade
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300">
                    <Filter className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                    Ver tudo
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {communityActivity.map((activity, index) => {
                  const TypeIcon = getTypeIcon(activity.type);
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-300 group border border-transparent hover:border-gray-200 dark:hover:border-slate-600"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {activity.avatar}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {activity.user}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {activity.action}
                          </p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            activity.subject === 'Matemática' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                              : activity.subject === 'Programação'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                              : activity.subject === 'Eventos'
                              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
                          }`}>
                            {activity.subject}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">
                          "{activity.content}"
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          em {activity.target}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4 text-red-500" />
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {activity.likes}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="h-4 w-4 text-blue-500" />
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {activity.comments}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <TypeIcon className="h-4 w-4 text-gray-500" />
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar Direita - 4 colunas */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Trending Topics */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                Em Alta
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((trend, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {trend.topic}
                      </p>
                      <p className="text-xs text-gray-500">
                        {trend.posts} posts • {trend.participants} participantes
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Marketplace Ativo */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <ShoppingBag className="h-5 w-5 mr-2 text-green-500" />
                  Marketplace
                </h3>
                <button className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline">
                  Ver loja
                </button>
              </div>
              <div className="space-y-3">
                {marketplaceActivity.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-gray-200 dark:border-slate-600 hover:border-green-300 dark:hover:border-green-500 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                        {item.item}
                      </h4>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">
                        {item.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          por {item.seller}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600">{item.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{item.sales} vendas</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                <Plus className="h-4 w-4 inline mr-2" />
                Vender Material
              </button>
            </div>

            {/* Quick Actions Compacto */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                Acesso Rápido
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: BookOpen, label: "Biblioteca", color: "from-indigo-500 to-purple-600", count: "2.3k livros" },
                  { icon: Users, label: "Grupos", color: "from-green-500 to-emerald-600", count: "12 ativos" },
                  { icon: Calendar, label: "Eventos", color: "from-orange-500 to-red-600", count: "8 hoje" },
                  { icon: Brain, label: "IA Help", color: "from-violet-500 to-purple-600", count: "24/7" },
                  { icon: Coffee, label: "Cantina", color: "from-amber-500 to-orange-600", count: "Aberta" },
                  { icon: MapPin, label: "Campus", color: "from-red-500 to-pink-600", count: "Navegar" },
                ].map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      className="p-3 rounded-xl bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 group"
                    >
                      <div className={`p-2 bg-gradient-to-r ${action.color} rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-4 w-4 text-white mx-auto" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">
                        {action.label}
                      </p>
                      <p className="text-xs text-gray-500">{action.count}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Status do Campus */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-xl p-5 text-white shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Wifi className="h-5 w-5 mr-2" />
                Status do Campus
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Wi-Fi Campus</span>
                  </div>
                  <span className="text-sm font-semibold">Excelente</span>
                                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Biblioteca</span>
                  </div>
                  <span className="text-sm font-semibold">Aberta 24h</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Laboratórios</span>
                  </div>
                  <span className="text-sm font-semibold">67% ocupado</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Cantina</span>
                  </div>
                  <span className="text-sm font-semibold">Até 22h</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm">Estacionamento</span>
                  </div>
                  <span className="text-sm font-semibold">85% cheio</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm flex items-center">
                    <Sun className="h-4 w-4 mr-1" />
                    Campus Unimar
                  </span>
                  <span className="text-sm font-semibold">24°C • Ensolarado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção Inferior - Notificações e Alertas */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          
          {/* Notificações Importantes */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                <Bell className="h-5 w-5 mr-2 text-red-500" />
                Notificações Importantes
              </h3>
              <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 text-xs px-2 py-1 rounded-full font-medium">
                3 novas
              </span>
            </div>
            <div className="space-y-3">
              {[
                {
                  title: "Prova P2 - Banco de Dados",
                  message: "Agendada para amanhã às 14h. Sala 301.",
                  time: "30 min atrás",
                  priority: "high",
                  icon: AlertCircle,
                  action: "Ver detalhes",
                },
                {
                  title: "Novo material disponível",
                  message: "Prof. Lima adicionou slides de React Hooks.",
                  time: "1h atrás",
                  priority: "medium",
                  icon: BookOpen,
                  action: "Baixar",
                },
                {
                  title: "Grupo de estudo criado",
                  message: "Você foi adicionado ao grupo 'Cálculo III - P2'.",
                  time: "2h atrás",
                  priority: "low",
                  icon: Users,
                  action: "Participar",
                },
                {
                  title: "Hackathon Unimar 2024",
                  message: "Inscrições encerram em 2 dias. Prêmio: R$ 10.000",
                  time: "4h atrás",
                  priority: "high",
                  icon: Code,
                  action: "Inscrever-se",
                },
              ].map((notification, index) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-l-4 ${
                      notification.priority === 'high' 
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/10' 
                        : notification.priority === 'medium'
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10'
                        : 'border-blue-500 bg-blue-50 dark:bg-blue-900/10'
                    } hover:shadow-md transition-all duration-300 group`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        notification.priority === 'high' 
                          ? 'bg-red-100 dark:bg-red-900/20' 
                          : notification.priority === 'medium'
                          ? 'bg-yellow-100 dark:bg-yellow-900/20'
                          : 'bg-blue-100 dark:bg-blue-900/20'
                      }`}>
                        <Icon className={`h-4 w-4 ${
                          notification.priority === 'high' 
                            ? 'text-red-600' 
                            : notification.priority === 'medium'
                            ? 'text-yellow-600'
                            : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                          {notification.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">{notification.time}</span>
                          <button className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 ${
                            notification.priority === 'high' 
                              ? 'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-300' 
                              : notification.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300'
                              : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-300'
                          }`}>
                            {notification.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rankings e Leaderboards */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                Rankings da Turma
              </h3>
              <div className="flex items-center space-x-2">
                <button className="text-xs bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full">
                  Mensal
                </button>
                <button className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded-full">
                  Semestral
                </button>
              </div>
            </div>
            
            {/* Ranking Geral */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Ranking por Média Geral
              </h4>
              <div className="space-y-2">
                {[
                  { position: 1, name: "Lucas Ferreira", grade: 9.5, trend: "stable", you: false },
                  { position: 2, name: "Camila Santos", grade: 9.3, trend: "up", you: false },
                  { position: 3, name: "Roberto Silva", grade: 9.1, trend: "down", you: false },
                  { position: 15, name: "Você", grade: 8.7, trend: "up", you: true },
                ].map((student, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      student.you 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : 'bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700'
                    } transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        student.position <= 3 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                          : student.you
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300'
                      }`}>
                        {student.position}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${
                          student.you ? 'text-white' : 'text-gray-900 dark:text-white'
                        }`}>
                          {student.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-bold ${
                        student.you ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                        {student.grade}
                      </span>
                      {student.trend === 'up' && (
                        <ArrowUp className="h-3 w-3 text-green-500" />
                      )}
                      {student.trend === 'down' && (
                        <ArrowDown className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Destaques da Semana
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Mais Ativo", name: "Ana M.", icon: Activity, color: "bg-green-500" },
                  { label: "Colaborativo", name: "João P.", icon: Users, color: "bg-blue-500" },
                  { label: "Vendedor", name: "Maria S.", icon: ShoppingBag, color: "bg-purple-500" },
                ].map((award, index) => {
                  const Icon = award.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      <div className={`w-8 h-8 ${award.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">
                        {award.name}
                      </p>
                      <p className="text-xs text-gray-500">{award.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Seção Completa de Funcionalidades - Grid Responsivo */}
        <div className="mt-6 grid lg:grid-cols-4 gap-4">
          
          {/* Estudos e Materiais */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-indigo-500" />
              Meus Estudos
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Sessão Ativa
                  </h4>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Estudando: Algoritmos de Ordenação
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    2h 15min
                  </span>
                  <button className="text-xs bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded-full">
                    Pausar
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                {[
                  { name: "Resumos Salvos", count: 23, icon: Bookmark },
                  { name: "Downloads", count: 89, icon: Download },
                  { name: "Favoritos", count: 34, icon: Heart },
                  { name: "Notas Pessoais", count: 12, icon: Edit },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {item.count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Redes Sociais Acadêmicas */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
              Conexões
            </h3>
            <div className="space-y-3">
              
              {/* Grupos Ativos */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Grupos Ativos (8)
                </h4>
                <div className="space-y-2">
                  {[
                    { name: "Cálculo III - Estudos", members: 12, activity: "Alta", color: "bg-blue-500" },
                    { name: "Projeto Final - React", members: 5, activity: "Muito Alta", color: "bg-green-500" },
                    { name: "Hackathon Team Alpha", members: 4, activity: "Extrema", color: "bg-purple-500" },
                  ].map((group, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${group.color} rounded-full`}></div>
                        <div>
                          <p className="text-xs font-semibold text-gray-900 dark:text-white">
                            {group.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {group.members} membros • {group.activity}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-3 w-3 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mensagens Recentes */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Mensagens (3 não lidas)
                </h4>
                <div className="space-y-2">
                  {[
                    { from: "Prof. Silva", message: "Sobre o projeto...", time: "5min", unread: true },
                    { from: "Ana Santos", message: "Grupo de estudo hoje?", time: "15min", unread: true },
                    { from: "Carlos Lima", message: "Valeu pela ajuda!", time: "1h", unread: false },
                  ].map((msg, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        msg.unread 
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700' 
                          : 'bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">
                          {msg.from}
                        </p>
                        <div className="flex items-center space-x-1">
                          {msg.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recursos e Serviços */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2 text-green-500" />
              Campus Services
            </h3>
            <div className="space-y-3">
              {[
                { 
                  service: "Biblioteca Digital", 
                  status: "Online", 
                  users: "234 conectados", 
                  color: "bg-green-500",
                  action: "Acessar",
                  icon: BookOpen 
                },
                { 
                  service: "Lab de Informática", 
                  status: "Disponível", 
                  users: "12/30 ocupados", 
                  color: "bg-blue-500",
                  action: "Reservar",
                  icon: Laptop 
                },
                { 
                  service: "Cantina Universitária", 
                  status: "Aberta", 
                  users: "Cardápio hoje", 
                  color: "bg-orange-500",
                  action: "Ver cardápio",
                  icon: Utensils 
                },
                { 
                  service: "Estacionamento", 
                  status: "85% Ocupado", 
                  users: "15 vagas livres", 
                  color: "bg-red-500",
                  action: "Ver mapa",
                  icon: Car 
                },
                { 
                  service: "Centro Esportivo", 
                  status: "Funcionando", 
                  users: "Até 21h", 
                  color: "bg-green-500",
                  action: "Horários",
                  icon: Activity 
                },
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-200 dark:bg-slate-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {service.service}
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${service.color} rounded-full`}></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {service.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{service.users}</p>
                      </div>
                    </div>
                    <button className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-all duration-300">
                      {service.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Financeiro e Transações */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-blue-200/50 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Wallet className="h-5 w-5 mr-2 text-emerald-500" />
              Financeiro
            </h3>
            
            {/* Saldo atual */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-4 text-white mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs opacity-80">Saldo Disponível</p>
                  <p className="text-2xl font-bold">R$ 247,80</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-80">Este mês</p>
                  <p className="text-sm font-semibold">+R$ 185,00</p>
                </div>
              </div>
            </div>

            {/* Transações recentes */}
            <div className="space-y-2 mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Transações Recentes
              </h4>
              {[
                { type: "income", desc: "Venda: Resumo Cálculo", value: "+R$ 25,00", time: "2h" },
                { type: "expense", desc: "Compra: Livro Digital", value: "-R$ 35,00", time: "1d" },
                { type: "income", desc: "Venda: Projeto Arduino", value: "+R$ 50,00", time: "2d" },
                { type: "expense", desc: "Mensalidade", value: "-R$ 890,00", time: "5d" },
              ].map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900 dark:text-white">
                        {transaction.desc}
                      </p>
                      <p className="text-xs text-gray-500">{transaction.time} atrás</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${
                    transaction.type === 'income' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {transaction.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="p-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 rounded-lg text-xs font-medium hover:bg-emerald-200 dark:hover:bg-emerald-900/40 transition-all duration-300">
                <Plus className="h-3 w-3 inline mr-1" />
                Vender
              </button>
              <button className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-lg text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-all duration-300">
                <Eye className="h-3 w-3 inline mr-1" />
                Extrato
              </button>
            </div>
          </div>
        </div>

        {/* Widget de Progresso Flutuante (canto superior direito) */}
        <div className="fixed top-6 right-6 z-40">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-4 text-white shadow-xl w-64">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold">Meta Semanal</h4>
              <Target className="h-4 w-4" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Horas de Estudo</span>
                <span>32/40h</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-4/5 shadow-inner"></div>
              </div>
              <p className="text-xs opacity-80">Faltam 8h para completar!</p>
            </div>
          </div>
        </div>

        {/* Overlay de Suporte (canto inferior direito) */}
        <div className="fixed bottom-24 right-6 z-40">
          <button className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group">
            <HelpCircle className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </Layout>
  );
};