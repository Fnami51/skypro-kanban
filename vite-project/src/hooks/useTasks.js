import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext.jsx";

export default function useTasks() {
    return useContext(TasksContext)
}