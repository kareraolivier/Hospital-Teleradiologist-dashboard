import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  authToken: string | null;
  authUser: string | null;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<string | null>(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");
    if (storedToken) {
      setAuthToken(storedToken);
    }
    if (storedUser) {
      setAuthUser(storedUser);
    }
  }, []);

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ authToken, authUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
