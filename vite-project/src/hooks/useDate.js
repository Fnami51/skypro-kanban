import { useContext } from "react";
import { DateContext } from "../contexts/DateContext.jsx";

export default function useDate() {
    return useContext(DateContext)
}