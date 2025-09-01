import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Layout from "@/react-app/components/Layout";
import {
  BookOpen,
  TrendingUp,
  Download,
  Star,
  Target,
  Award,
  BarChart3,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

export default function Grades() {
  const { user, isPending } = useAuth();
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState("2024-1");
  const [selectedSubject] = useState("all");

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

  // Sample data for demonstration
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
      status: "approved",
      color: "from-blue-500 to-blue-600",
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
      status: "approved",
      color: "from-green-500 to-green-600",
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
      status: "approved",
      color: "from-purple-500 to-purple-600",
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
      status: "approved",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const performanceOverTime = [
    { month: "Jan", average: 7.8 },
    { month: "Fev", average: 8.1 },
    { month: "Mar", average: 8.3 },
    { month: "Abr", average: 8.5 },
    { month: "Mai", average: 8.4 },
    { month: "Jun", average: 8.6 },
  ];

  const subjectComparison = subjects.map((subject) => ({
    subject: subject.name.split(" ")[0],
    average: subject.currentAverage,
    target: 8.0,
  }));

  const skillsRadar = [
    { skill: "Matemática", A: 8.5, fullMark: 10 },
    { skill: "Física", A: 7.9, fullMark: 10 },
    { skill: "Programação", A: 9.5, fullMark: 10 },
    { skill: "Química", A: 7.2, fullMark: 10 },
    { skill: "Análise", A: 8.8, fullMark: 10 },
    { skill: "Criatividade", A: 9.0, fullMark: 10 },
  ];

  const overallStats = {
    totalSubjects: subjects.length,
    overallAverage:
      subjects.reduce((acc, sub) => acc + sub.currentAverage, 0) /
      subjects.length,
    approvedSubjects: subjects.filter((sub) => sub.status === "approved")
      .length,
    totalCredits: subjects.reduce((acc, sub) => acc + sub.credits, 0),
  };

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

  const filteredSubjects =
    selectedSubject === "all"
      ? subjects.filter((sub) => sub.semester === selectedSemester)
      : subjects.filter(
          (sub) =>
            sub.semester === selectedSemester &&
            sub.id.toString() === selectedSubject
        );

  return (
    <Layout>
      <div className="min-h-screen p-6 space-y-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Minhas Notas
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Acompanhe seu desempenho acadêmico em detalhes
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0">
              {/* Filters */}
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="2024-1">2024.1</option>
                <option value="2023-2">2023.2</option>
                <option value="2023-1">2023.1</option>
              </select>

              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
                <Download className="h-4 w-4" />
                <span>Exportar</span>
              </button>
            </div>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {overallStats.overallAverage.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Média Geral
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  {overallStats.approvedSubjects}/{overallStats.totalSubjects}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {overallStats.approvedSubjects}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Aprovações
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {overallStats.totalCredits}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Créditos
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200/50 dark:border-orange-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                A
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Conceito
              </p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Performance Over Time */}
            <div className="glass p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Evolução da Performance
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceOverTime}>
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
                    <Line
                      type="monotone"
                      dataKey="average"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ fill: "#3b82f6", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "#3b82f6", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Subject Comparison */}
            <div className="glass p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                Comparação por Matéria
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectComparison}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="opacity-30"
                    />
                    <XAxis
                      dataKey="subject"
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <YAxis
                      domain={[0, 10]}
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
                    <Bar
                      dataKey="average"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="target"
                      fill="#f59e0b"
                      radius={[4, 4, 0, 0]}
                      opacity={0.3}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Skills Radar */}
          <div className="glass p-6 rounded-2xl shadow-xl mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Target className="h-5 w-5 mr-2 text-purple-600" />
              Radar de Competências
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillsRadar}>
                  <PolarGrid />
                  <PolarAngleAxis
                    dataKey="skill"
                    className="text-gray-600 dark:text-gray-400"
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
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Subjects List */}
          <div className="glass p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Disciplinas - {selectedSemester}
            </h3>
            <div className="space-y-6">
              {filteredSubjects.map((subject) => (
                <div
                  key={subject.id}
                  className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {subject.name}
                        </h4>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            subject.status
                          )}`}
                        >
                          {getStatusText(subject.status)}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">
                        {subject.professor}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {subject.credits} créditos
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0 text-center">
                      <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {subject.currentAverage.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Média Final
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {subject.grades.map((grade, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center"
                      >
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                          {grade.type}
                        </p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {grade.value.toFixed(1)}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Peso: {(grade.weight * 100).toFixed(0)}%
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          {new Date(grade.date).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
