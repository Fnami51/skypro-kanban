import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

export default function useTasks() {
    return useContext(TasksContext)
}