import firebase from "firebase/app";
import "firebase/auth";
import {
  UserCredential,
  User,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  AuthError,
  getAuth,
} from "firebase/auth";
import {
  FC,
  createContext,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import { AUTH, DB, register, login, logout } from "../firebase";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

interface IContext {
  user: User | null;
  loading: boolean;
  register: (
    email: string,
    password: string,
    userName: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const registerHandler = async (
    email: string,
    password: string,
    userName: string
  ) => {
    setLoading(true);
    try {
      const { user } = await register(email, password);
      await updateProfile(user, { displayName: userName });
      await setDoc(doc(DB, "users", email), {
        email: user.email,
        id: user.uid,
        userName: user.displayName,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { user } = await login(email, password);
      const _id = user.uid;
      const _email = user.email;
      if (_email && _id) {
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  signInWithGoogle()
    .then((result: UserCredential) => {
      const user = result.user;
      console.log("Успішна аутентифікація", user);
    })
    .catch((error: AuthError) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Помилка аутентифікаціі", errorCode, errorMessage);
    });

  useEffect(
    () =>
      onAuthStateChanged(AUTH, (user) => {
        setUser(user);
        console.info(user, "auth user");
      }),
    []
  );

  const value: IContext = useMemo(
    () => ({
      user,
      loading,
      register: registerHandler,
      login: loginHandler,
      logout: logoutHandler,
      signInWithGoogle,
    }),
    [user, loading]
  );
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
