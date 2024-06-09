import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export function UserProvider({children}) {
    const [user, setToken] = useState({}) //for Context

    return (
        <AuthContext.Provider value={{ user, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}