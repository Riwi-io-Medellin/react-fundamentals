/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from "react";

export interface AuthInterface {
  user: string;
  setUser: (user: string) => void;
  login: (user: string) => void;
  logout: () => void;
}

const initialState: AuthInterface = {
  user: '',
  setUser: () =>{},
  login: () =>{},
  logout: () =>{}
}

 
export const AuthContext = createContext<AuthInterface>(initialState)
// export const AuthContext = createContext<Partial<AuthInterface>>({})

export const AuthProvider = ({children}:{children: ReactNode}) => {
  const [user, setUser] = useState('')

  const login = (user: string) => {
    setUser(user)
  }

  const logout = () => {

  }

  console.log({user});
  

  return (
    <AuthContext.Provider value={{user, login, logout, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}
