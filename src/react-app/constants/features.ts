import { Brain, ShoppingBag, Users, Lightbulb, Target, Coffee } from 'lucide-react';

export interface Feature {
  icon: any;
  title: string;
  description: string;
  color: string;
  benefits: string[];
}

export const REVOLUTIONARY_FEATURES: Feature[] = [
  {
    icon: Brain,
    title: 'IA Study Assistant',
    description: 'Assistente pessoal que adapta estudos ao seu perfil, sugere cronogramas e responde dúvidas em tempo real.',
    color: 'from-purple-500 to-indigo-600',
    benefits: [
      'Estudos 3x mais eficientes',
      'Planos personalizados',
      'Dúvidas 24/7'
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Knowledge Marketplace',
    description: 'Primeira plataforma onde estudantes monetizam conhecimento: venda notas, tutoriais e materiais exclusivos.',
    color: 'from-green-500 to-emerald-600',
    benefits: [
      'Renda extra estudando',
      'Materiais únicos',
      'Economia colaborativa'
    ]
  },
  {
    icon: Users,
    title: 'Smart Networking',
    description: 'IA conecta você com pessoas certas baseado em projetos, interesses e objetivos de carreira compatíveis.',
    color: 'from-blue-500 to-cyan-600',
    benefits: [
      'Networking inteligente',
      'Oportunidades direcionadas',
      'Colaborações estratégicas'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Project Collaboration Hub',
    description: 'Plataforma para projetos cross-curso com matching automático de habilidades e interesses.',
    color: 'from-yellow-500 to-orange-600',
    benefits: [
      'Projetos interdisciplinares',
      'Portfolio robusto',
      'Experiência real'
    ]
  },
  {
    icon: Target,
    title: 'Opportunity Engine',
    description: 'IA analisa seu perfil e recomenda estágios, bolsas e oportunidades com alta compatibilidade.',
    color: 'from-red-500 to-pink-600',
    benefits: [
      'Oportunidades personalizadas',
      'Matching 90%+',
      'Carreira acelerada'
    ]
  },
  {
    icon: Coffee,
    title: 'Virtual Co-working',
    description: 'Salas de estudo virtuais com Pomodoro sincronizado, gamificação e interação social.',
    color: 'from-amber-500 to-yellow-600',
    benefits: [
      'Foco multiplicado',
      'Comunidade ativa',
      'Produtividade gamificada'
    ]
  }
];

export const STATS_DATA = [
  { label: 'Estudantes Conectados', value: '2.847', icon: Users },
  { label: 'Materiais Comercializados', value: '15.302', icon: ShoppingBag },
  { label: 'Projetos Colaborativos', value: '1.156', icon: Lightbulb },
  { label: 'Oportunidades Descobertas', value: '892', icon: Target }
];

export const TESTIMONIALS = [
  {
    name: 'Maria Silva',
    course: 'Engenharia Civil - 4º ano',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
    quote: 'Ganhei R$ 800 no primeiro mês vendendo minhas notas de Cálculo. A IA do Santuário me conectou com 3 projetos incríveis!'
  },
  {
    name: 'João Santos',
    course: 'Ciência da Computação - 3º ano',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
    quote: 'Consegui estágio no Google através das recomendações da IA. O networking inteligente mudou minha carreira!'
  },
  {
    name: 'Ana Costa',
    course: 'Medicina - 2º ano',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
    quote: 'O assistente de IA personalizou meus estudos e minha performance melhorou 40%. Revolucionário!'
  }
];
