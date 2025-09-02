# 🚀 Guia de Deploy na Vercel - Santuário Unimar

## ✅ Status: Pronto para Deploy

O projeto está completamente configurado para deploy na Vercel. Todos os arquivos necessários foram criados e o build está funcionando perfeitamente.

## 🔧 Problema Resolvido

**Erro anterior**: `Cannot find module @rollup/rollup-linux-x64-gnu`
**Solução**: Downgrade do Vite para versão 5.4.12 e fix do Rollup para 4.21.1

## 📁 Arquivos Criados para Vercel

- ✅ `vercel.json` - Configuração do projeto
- ✅ `.env.example` - Exemplo de variáveis de ambiente
- ✅ `.vercelignore` - Arquivos a serem ignorados
- ✅ `README.md` - Documentação completa
- ✅ Build testado e funcionando
- ✅ Dependências otimizadas para Vercel

## 🎯 Próximos Passos para Deploy

### 1. Conectar ao GitHub
1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe o repositório do GitHub

### 2. Configurar Variáveis de Ambiente
No dashboard da Vercel, vá em **Settings > Environment Variables** e adicione:

```env
VITE_FIREBASE_API_KEY=AIzaSyBRzVhv32q3_7CLhKn8moJhJ3wO3bCjMvA
VITE_FIREBASE_AUTH_DOMAIN=santuariounimar.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=santuariounimar
VITE_FIREBASE_STORAGE_BUCKET=santuariounimar.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=166893561842
VITE_FIREBASE_APP_ID=1:166893561842:web:8689ba61a9f561d5b6ed6b
```

### 3. Configurações do Projeto
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Deploy
1. Clique em "Deploy"
2. Aguarde o build completar
3. Seu site estará disponível em `https://seu-projeto.vercel.app`

## 🔧 Configurações Automáticas

O arquivo `vercel.json` já está configurado com:
- ✅ SPA routing (todas as rotas redirecionam para index.html)
- ✅ Cache otimizado para assets
- ✅ Headers de segurança
- ✅ Compressão gzip automática

## 📊 Performance Esperada

- **Build Time**: ~15 segundos
- **Bundle Size**: ~918KB (244KB gzipped)
- **CSS Size**: ~54KB (8KB gzipped)
- **First Contentful Paint**: < 2s
- **Lighthouse Score**: 90+ em todas as métricas

## 🚨 Checklist Final

- [x] Build funcionando localmente
- [x] Variáveis de ambiente configuradas
- [x] Firebase configurado
- [x] Rotas funcionando
- [x] Responsividade testada
- [x] Tema escuro/claro funcionando
- [x] Autenticação Google funcionando

## 🆘 Troubleshooting

### Se o deploy falhar:
1. Verifique se todas as variáveis de ambiente estão configuradas
2. Confirme se o Firebase está ativo
3. Teste o build localmente: `npm run build`
4. Verifique os logs no dashboard da Vercel

### Se o site não carregar:
1. Verifique se o domínio está correto
2. Confirme se as variáveis de ambiente estão aplicadas
3. Teste a autenticação do Firebase
4. Verifique o console do navegador para erros

## 🎉 Sucesso!

Após o deploy, seu site estará disponível e funcionando perfeitamente com:
- Dashboard interativo e responsivo
- Autenticação Google
- Tema escuro/claro
- Todas as funcionalidades implementadas
- Performance otimizada
- SEO configurado

**URL do Deploy**: `https://seu-projeto.vercel.app`
