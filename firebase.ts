// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRzVhv32q3_7CLhKn8moJhJ3wO3bCjMvA",
  authDomain: "santuariounimar.firebaseapp.com",
  projectId: "santuariounimar",
  storageBucket: "santuariounimar.firebasestorage.app",
  messagingSenderId: "166893561842",
  appId: "1:166893561842:web:8689ba61a9f561d5b6ed6b",
  measurementId: "G-RKFNFFWGT9",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth(app);

// Provider do Google
const googleProvider = new GoogleAuthProvider();

// Função de login com Google
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // usuário logado
    console.log("Usuário logado:", result.user);
  } catch (error) {
    console.error("Erro ao logar com Google:", error);
  }
};

// Exporta onAuthStateChanged caso queira usar em outro lugar
export { onAuthStateChanged };
export type { User };
