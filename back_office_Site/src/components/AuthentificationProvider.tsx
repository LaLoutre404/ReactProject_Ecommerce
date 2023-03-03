import React, { ReactNode, useEffect, useState, useContext, createContext } from "react";
import { auth } from "./firebaseconfig";
import { signInWithEmailAndPassword, Auth, UserCredential, User, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export interface AuthContextModel {
  auth: Auth
  user: User | null
  signIn: (email: string, password: string) => Promise<UserCredential>
}

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean,
  isLoading: boolean,
  isAdmin: boolean,
  id?: string | null;
}

export const UserStateContext = createContext<UserContextState>({} as UserContextState);
export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
);
export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // on renvoie si un utilisateur est connecté
  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return unsubsrcibe
  }, [])

  const values = {
    user,
    signIn,
    auth,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider> 
}