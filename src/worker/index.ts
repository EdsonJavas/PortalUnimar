import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { Env } from "../../worker-configuration";

const app = new Hono<{ Bindings: Env }>(); // Agora o Hono está tipado corretamente com 'Env'

// Como estamos usando Firebase diretamente no frontend, estas rotas não são mais necessárias
// Mantemos a estrutura básica do worker para compatibilidade com o restante da aplicação

// Rota de fallback para compatibilidade
app.get("/api/oauth/google/redirect_url", async (c) => {
  // Firebase lida com o redirecionamento diretamente no frontend
  return c.json({ message: "Firebase authentication is used directly in the frontend" }, 200);
});

// Rota de fallback para compatibilidade
app.post("/api/sessions", async (c) => {
  // Firebase lida com as sessões diretamente no frontend
  return c.json({ message: "Firebase authentication is used directly in the frontend" }, 200);
});

// Rota de fallback para compatibilidade
app.get("/api/users/me", async (c) => {
  // Firebase lida com as informações do usuário diretamente no frontend
  return c.json({ message: "Firebase authentication is used directly in the frontend" });
});

// Rota de fallback para compatibilidade com logout
app.get("/api/logout", async (c) => {
  // Firebase lida com o logout diretamente no frontend
  // Apenas removemos qualquer cookie que possa existir por compatibilidade
  
  // Definimos um nome de cookie genérico para substituir o Mocha
  const SESSION_COOKIE_NAME = "session_token";
  
  // Limpa o cookie de sessão
  setCookie(c, SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 0,
  });

  return c.json({ success: true }, 200);
});

export default app;
