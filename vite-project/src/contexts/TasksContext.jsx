import { useState, createContext } from "react";

export const TasksContext = createContext(null);

export function TasksProvider({children}) {
    const [tasks, setTasks] = useState({}) //for Context

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    )
}