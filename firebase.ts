import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";

// 🔐 Configuração do Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBRzVhv32q3_7CLhKn8moJhJ3wO3bCjMvA",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "santuariounimar.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "santuariounimar",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "santuariounimar.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "166893561842",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:166893561842:web:8689ba61a9f561d5b6ed6b",
  measurementId: "G-RKFNFFWGT9",
};

// 🔥 Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Login com Google
export const loginWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao fazer login com Google.");
  }
};

// 🚪 Logout
export const logout = async () => {
  await signOut(auth);
};

// 🪪 Pegar o token do usuário logado
export const getFirebaseIdToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  if (user) {
    return await user.getIdToken();
  }
  return null;
};

// 📡 Exportando funções e tipos
export { app, auth, onAuthStateChanged };
export type { User };
