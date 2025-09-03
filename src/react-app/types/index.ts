// Tipos de usuário
export interface User {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
  course?: string;
  year?: number;
  university?: string;
}

// Tipos de navegação
export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  description?: string;
}

// Tipos de funcionalidades
export interface Feature {
  icon: any;
  title: string;
  description: string;
  color: string;
  benefits: string[];
}

// Tipos de estatísticas
export interface Stat {
  label: string;
  value: string;
  icon: any;
}

// Tipos de depoimentos
export interface Testimonial {
  name: string;
  course: string;
  photo: string;
  quote: string;
}

// Tipos de notas
export interface Grade {
  id: string;
  subject: string;
  grade: number;
  maxGrade: number;
  semester: string;
  year: number;
  date: Date;
}

// Tipos de frequência
export interface Attendance {
  id: string;
  subject: string;
  date: Date;
  present: boolean;
  semester: string;
  year: number;
}

// Tipos de projetos
export interface Project {
  id: string;
  title: string;
  description: string;
  participants: string[];
  skills: string[];
  status: 'active' | 'completed' | 'pending';
  startDate: Date;
  endDate?: Date;
}

// Tipos de marketplace
export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  seller: User;
  rating: number;
  reviews: number;
  createdAt: Date;
}

// Tipos de IA Assistant
export interface AIResponse {
  id: string;
  question: string;
  answer: string;
  timestamp: Date;
  category: string;
  helpful: boolean;
}

// Tipos de tema
export type Theme = 'light' | 'dark';

// Tipos de notificações
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
}

// Tipos de configurações
export interface UserSettings {
  theme: Theme;
  notifications: boolean;
  language: string;
  timezone: string;
}
