# 🏗️ Guia de Arquitetura - Portal Unimar

Este documento explica a nova arquitetura modular e profissional implementada no projeto.

## 🎯 Objetivos da Refatoração

- ✅ **Modularização** - Código organizado em módulos específicos
- ✅ **Reutilização** - Componentes e hooks reutilizáveis
- ✅ **Manutenibilidade** - Estrutura clara e fácil de manter
- ✅ **Escalabilidade** - Fácil adição de novas funcionalidades
- ✅ **Profissionalismo** - Padrões de código enterprise

## 📁 Nova Estrutura de Pastas

```
src/react-app/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes de interface
│   │   ├── Button.tsx   # Botão reutilizável
│   │   ├── Card.tsx     # Card reutilizável
│   │   ├── Typography.tsx # Componentes de tipografia
│   │   └── index.ts     # Exportações
│   ├── Layout.tsx       # Layout principal
│   └── index.ts         # Exportações principais
├── constants/            # Constantes e dados estáticos
│   ├── navigation.ts    # Configurações de navegação
│   ├── features.ts      # Dados das funcionalidades
│   └── index.ts         # Exportações
├── hooks/                # Hooks customizados
│   ├── useLocalStorage.ts # Hook para localStorage
│   ├── useDebounce.ts   # Hook para debounce
│   └── index.ts         # Exportações
├── types/                # Definições de tipos TypeScript
│   └── index.ts         # Tipos centralizados
├── config/               # Configurações do projeto
│   └── constants.ts     # Constantes de configuração
├── lib/                  # Utilitários e helpers
│   └── utils.ts         # Funções utilitárias
├── context/              # Contextos React (mantidos)
├── pages/                # Páginas (mantidas)
└── index.css             # Estilos (mantidos)
```

## 🧩 Componentes UI

### **Button Component**
```tsx
import { Button } from '@/react-app/components/ui';

<Button variant="primary" size="lg">
  Clique aqui
</Button>
```

**Variantes disponíveis:**
- `primary` - Botão principal com gradiente
- `secondary` - Botão secundário com glassmorphism
- `outline` - Botão com borda
- `ghost` - Botão transparente

**Tamanhos disponíveis:**
- `sm` - Pequeno
- `md` - Médio (padrão)
- `lg` - Grande
- `xl` - Extra grande

### **Card Component**
```tsx
import { Card } from '@/react-app/components/ui';

<Card variant="glass" hover>
  Conteúdo do card
</Card>
```

**Variantes disponíveis:**
- `default` - Card padrão com sombra
- `glass` - Card com glassmorphism
- `elevated` - Card com sombra elevada

### **Typography Components**
```tsx
import { H1, H2, BodyText, GradientText } from '@/react-app/components/ui';

<H1>Título Principal</H1>
<H2>Subtítulo</H2>
<BodyText>Texto do corpo</BodyText>
<GradientText>Texto com gradiente</GradientText>
```

## 🔧 Hooks Customizados

### **useLocalStorage**
```tsx
import { useLocalStorage } from '@/react-app/hooks';

const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### **useDebounce**
```tsx
import { useDebounce } from '@/react-app/hooks';

const debouncedSearch = useDebounce(searchTerm, 500);
```

## 📊 Constantes Organizadas

### **Navegação**
```tsx
import { MAIN_NAVIGATION, QUICK_ACTIONS } from '@/react-app/constants';

// Usar em componentes
MAIN_NAVIGATION.map(item => (
  <NavItem key={item.href} {...item} />
))
```

### **Funcionalidades**
```tsx
import { REVOLUTIONARY_FEATURES, STATS_DATA, TESTIMONIALS } from '@/react-app/constants';

// Usar em componentes
REVOLUTIONARY_FEATURES.map(feature => (
  <FeatureCard key={feature.title} {...feature} />
))
```

## 🎨 Utilitários

### **Função cn (className)**
```tsx
import { cn } from '@/react-app/lib/utils';

// Combina classes CSS de forma inteligente
const className = cn(
  'base-class',
  variant === 'primary' && 'primary-class',
  size === 'lg' && 'large-class',
  customClass
);
```

### **Funções de Formatação**
```tsx
import { formatNumber, formatDate, generateId } from '@/react-app/lib/utils';

formatNumber(1234);        // "1.234"
formatDate(new Date());    // "25/12/2024"
generateId();              // "abc123def"
```

## 🔄 Como Migrar Componentes Existentes

### **Antes (Código Antigo)**
```tsx
// Componente com tudo inline
export default function Home() {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    // ... mais itens
  ];
  
  const features = [
    { icon: Brain, title: "IA Study Assistant", /* ... */ },
    // ... mais itens
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50...">
      {/* Todo o JSX inline */}
    </div>
  );
}
```

### **Depois (Código Modular)**
```tsx
import { MAIN_NAVIGATION, REVOLUTIONARY_FEATURES } from '@/react-app/constants';
import { Button, Card, H1, H2, BodyText } from '@/react-app/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50...">
      <H1>Portal Unimar</H1>
      <BodyText>Descrição do portal</BodyText>
      
      {REVOLUTIONARY_FEATURES.map(feature => (
        <Card key={feature.title} variant="glass" hover>
          <H3>{feature.title}</H3>
          <BodyText>{feature.description}</BodyText>
        </Card>
      ))}
    </div>
  );
}
```

## 🚀 Benefícios da Nova Arquitetura

### **1. Reutilização**
- Componentes podem ser usados em múltiplas páginas
- Hooks customizados para lógica comum
- Constantes centralizadas para dados estáticos

### **2. Manutenibilidade**
- Mudanças em um lugar afetam todo o projeto
- Estrutura clara e organizada
- Fácil localização de código

### **3. Escalabilidade**
- Novos componentes seguem o mesmo padrão
- Fácil adição de novas funcionalidades
- Arquitetura preparada para crescimento

### **4. Profissionalismo**
- Padrões de código enterprise
- TypeScript com tipos bem definidos
- Documentação clara e organizada

## 📝 Padrões de Código

### **1. Nomenclatura**
- **Componentes**: PascalCase (ex: `Button.tsx`)
- **Hooks**: camelCase com prefixo `use` (ex: `useLocalStorage.ts`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MAIN_NAVIGATION`)
- **Arquivos**: kebab-case (ex: `index.ts`)

### **2. Estrutura de Componentes**
```tsx
// 1. Imports
import React from 'react';
import { cn } from '@/react-app/lib/utils';

// 2. Interfaces/Tipos
interface ComponentProps {
  // props
}

// 3. Componente
const Component: React.FC<ComponentProps> = ({ /* props */ }) => {
  // 4. Lógica
  // 5. Render
  return (
    // JSX
  );
};

// 6. Export
export default Component;
```

### **3. Estrutura de Hooks**
```tsx
// 1. Imports
import { useState, useEffect } from 'react';

// 2. Hook
export function useCustomHook(/* params */) {
  // 3. Estado
  // 4. Efeitos
  // 5. Lógica
  // 6. Retorno
  return { /* values */ };
}
```

## 🔍 Próximos Passos

### **1. Migração Gradual**
- Comece pelos componentes mais simples
- Migre uma página por vez
- Mantenha a funcionalidade existente

### **2. Testes**
- Teste cada componente migrado
- Verifique se a estilização permanece igual
- Valide a funcionalidade

### **3. Documentação**
- Atualize este guia conforme necessário
- Documente novos padrões
- Mantenha exemplos atualizados

## 💡 Dicas de Uso

### **1. Sempre use os componentes UI**
```tsx
// ✅ Bom
<Button variant="primary">Clique</Button>

// ❌ Evite
<button className="px-4 py-2 bg-blue-600...">Clique</button>
```

### **2. Use as constantes organizadas**
```tsx
// ✅ Bom
import { MAIN_NAVIGATION } from '@/react-app/constants';

// ❌ Evite
const navigation = [{ name: "Dashboard", href: "/dashboard" }];
```

### **3. Aproveite os hooks customizados**
```tsx
// ✅ Bom
const [value, setValue] = useLocalStorage('key', 'default');

// ❌ Evite
useEffect(() => {
  localStorage.setItem('key', value);
}, [value]);
```

## 🎉 Resultado Final

Com essa nova arquitetura, seu código está:
- 🏗️ **Modular** - Organizado em componentes específicos
- 🔄 **Reutilizável** - Componentes podem ser usados em múltiplos lugares
- 🧹 **Clean** - Código limpo e organizado
- 💼 **Profissional** - Padrões enterprise de desenvolvimento
- 🚀 **Escalável** - Pronto para crescer e evoluir

**A estilização permanece EXATAMENTE igual** - apenas a estrutura do código foi organizada! 🎨
