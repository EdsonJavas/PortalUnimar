import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { auth, onAuthStateChanged, User } from "../../../firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isPending: boolean; // Adicionado para compatibilidade com os componentes
  logout: () => Promise<void>;
  exchangeCodeForSessionToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isPending: true, // Adicionado para compatibilidade com os componentes
  logout: async () => {},
  exchangeCodeForSessionToken: async () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Esta função é um substituto para a função original do Mocha
  // Como estamos usando Firebase diretamente, não precisamos trocar código por token
  // Mantemos a função para compatibilidade com componentes existentes
  const exchangeCodeForSessionToken = async () => {
    // No Firebase, a autenticação já é gerenciada pelo onAuthStateChanged
    // Esta função existe apenas para manter a compatibilidade com o código existente
    return Promise.resolve();
  };

  const value = {
    user,
    loading,
    isPending: loading, // Adicionado para compatibilidade com os componentes
    logout,
    exchangeCodeForSessionToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};