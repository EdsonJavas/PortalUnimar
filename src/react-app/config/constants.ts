// Configurações do projeto
export const APP_CONFIG = {
  name: 'Portal Unimar',
  description: 'Comunidade universitária conectada - Seu espaço acadêmico personalizado',
  version: '1.0.0',
  author: 'Portal Unimar',
  url: 'https://santuariounimar.web.app'
} as const;

// Configurações de API
export const API_CONFIG = {
  baseUrl: process.env.VITE_API_URL || 'https://api.portalunimar.com',
  timeout: 10000,
  retries: 3
} as const;

// Configurações de autenticação
export const AUTH_CONFIG = {
  sessionTimeout: 24 * 60 * 60 * 1000, // 24 horas
  refreshTokenInterval: 5 * 60 * 1000, // 5 minutos
  maxLoginAttempts: 5,
  lockoutDuration: 15 * 60 * 1000 // 15 minutos
} as const;

// Configurações de tema
export const THEME_CONFIG = {
  defaultTheme: 'light' as const,
  storageKey: 'portal-unimar-theme',
  transitionDuration: 300
} as const;

// Configurações de notificações
export const NOTIFICATION_CONFIG = {
  maxNotifications: 50,
  autoHideDuration: 5000,
  maxStack: 3
} as const;

// Configurações de paginação
export const PAGINATION_CONFIG = {
  defaultPageSize: 10,
  maxPageSize: 100,
  pageSizeOptions: [5, 10, 20, 50, 100]
} as const;

// Configurações de cache
export const CACHE_CONFIG = {
  defaultTTL: 5 * 60 * 1000, // 5 minutos
  maxCacheSize: 100,
  cleanupInterval: 60 * 1000 // 1 minuto
} as const;

// Configurações de animações
export const ANIMATION_CONFIG = {
  defaultDuration: 300,
  easing: 'ease-in-out',
  staggerDelay: 100
} as const;

// Configurações de breakpoints
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// Configurações de z-index
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
} as const;
