import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Layout from "@/react-app/components/Layout";
import {
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
  Users,
  BookOpen,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Attendance() {
  const { user, isPending } = useAuth();
  const navigate = useNavigate();

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

  // Sample attendance data
  const attendanceData = [
    { name: "Presente", value: 85, color: "#10b981" },
    { name: "Falta", value: 15, color: "#ef4444" },
  ];

  const subjectAttendance = [
    { subject: "Matemática", present: 18, total: 20, percentage: 90 },
    { subject: "Física", present: 16, total: 20, percentage: 80 },
    { subject: "Programação", present: 19, total: 20, percentage: 95 },
    { subject: "Química", present: 15, total: 20, percentage: 75 },
  ];

  const monthlyTrend = [
    { month: "Jan", percentage: 88 },
    { month: "Fev", percentage: 92 },
    { month: "Mar", percentage: 85 },
    { month: "Abr", percentage: 90 },
    { month: "Mai", percentage: 87 },
    { month: "Jun", percentage: 89 },
  ];

  const recentClasses = [
    {
      subject: "Matemática Avançada",
      date: "2024-06-10",
      time: "08:00 - 10:00",
      status: "present",
      topic: "Integrais Duplas",
    },
    {
      subject: "Física Experimental",
      date: "2024-06-09",
      time: "14:00 - 16:00",
      status: "present",
      topic: "Mecânica Quântica",
    },
    {
      subject: "Programação OO",
      date: "2024-06-08",
      time: "10:00 - 12:00",
      status: "absent",
      topic: "Design Patterns",
    },
    {
      subject: "Química Orgânica",
      date: "2024-06-07",
      time: "16:00 - 18:00",
      status: "present",
      topic: "Reações de Substituição",
    },
  ];

  const getStatusIcon = (status: string) => {
    return status === "present" ? (
      <CheckCircle className="h-5 w-5 text-green-600" />
    ) : (
      <XCircle className="h-5 w-5 text-red-600" />
    );
  };

  const getStatusText = (status: string) => {
    return status === "present" ? "Presente" : "Falta";
  };

  const getStatusColor = (status: string) => {
    return status === "present"
      ? "text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400"
      : "text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400";
  };

  return (
    <Layout>
      <div className="min-h-screen p-6 space-y-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Minha Frequência
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Acompanhe sua presença nas aulas
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                85%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Frequência Geral
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                68
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Aulas Assistidas
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200/50 dark:border-red-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                12
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Faltas</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200/50 dark:border-yellow-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                1
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Alerta de Frequência
              </p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Overall Attendance Pie Chart */}
            <div className="glass p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                Frequência Geral
              </h3>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={attendanceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {attendanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                {attendanceData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Trend */}
            <div className="lg:col-span-2 glass p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Tendência Mensal
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyTrend}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="opacity-30"
                    />
                    <XAxis
                      dataKey="month"
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <YAxis
                      domain={[70, 100]}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <Tooltip />
                    <Bar
                      dataKey="percentage"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Subject Attendance */}
          <div className="glass p-6 rounded-2xl shadow-xl mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
              Frequência por Disciplina
            </h3>
            <div className="grid gap-4">
              {subjectAttendance.map((subject, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {subject.subject}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        subject.percentage >= 75
                          ? "text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400"
                          : "text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      {subject.percentage}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {subject.present} de {subject.total} aulas
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {subject.total - subject.present} faltas
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        subject.percentage >= 75 ? "bg-green-500" : "bg-red-500"
                      }`}
                      style={{ width: `${subject.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Classes */}
          <div className="glass p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-indigo-600" />
              Aulas Recentes
            </h3>
            <div className="space-y-4">
              {recentClasses.map((classItem, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {getStatusIcon(classItem.status)}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {classItem.subject}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {classItem.topic}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {new Date(classItem.date).toLocaleDateString("pt-BR")} •{" "}
                        {classItem.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      classItem.status
                    )}`}
                  >
                    {getStatusText(classItem.status)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
