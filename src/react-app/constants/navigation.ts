import { Home, User, BookOpen, Calendar, Users } from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  description?: string;
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    description: 'Visão geral da sua jornada acadêmica'
  },
  {
    name: 'Perfil',
    href: '/profile',
    icon: User,
    description: 'Gerencie suas informações pessoais'
  },
  {
    name: 'Notas',
    href: '/grades',
    icon: BookOpen,
    description: 'Acompanhe seu desempenho acadêmico'
  },
  {
    name: 'Frequência',
    href: '/attendance',
    icon: Calendar,
    description: 'Controle sua presença nas aulas'
  },
  {
    name: 'Comunidade',
    href: '/community',
    icon: Users,
    description: 'Conecte-se com outros estudantes'
  }
];

export const QUICK_ACTIONS = [
  {
    name: 'IA Assistant',
    href: '/ai-assistant',
    icon: '🤖',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Marketplace',
    href: '/marketplace',
    icon: '🛒',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Projetos',
    href: '/projects',
    icon: '💡',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'Co-working',
    href: '/coworking',
    icon: '☕',
    color: 'from-amber-500 to-yellow-600'
  }
];
