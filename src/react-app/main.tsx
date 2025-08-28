import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/react-app/index.css";
import App from "@/react-app/App.tsx";

// Importa o AuthProvider
import { AuthProvider } from "@getmocha/users-service/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider
      config={{
        projectId: "santuariounimar",
        redirectUri: window.location.origin + "/dashboard",
      }}
    >
      <App />
    </AuthProvider>
  </StrictMode>
);
