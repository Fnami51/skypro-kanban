import { useState, createContext } from "react";

export const DateContext = createContext(null);

export function DateProvider({children}) {
    const [dateInContext, setDate] = useState() //for Context

    return (
        <DateContext.Provider value={{ dateInContext, setDate }}>
            {children}
        </DateContext.Provider>
    )
}