/*
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


export default function Calendar() {
  const [selected, setSelected] = useState();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected}/>;
}
*/

import { DayPicker } from "react-day-picker";
import './style_components/calendar_style.css';
import useDate from "../hooks/useDate";

export default function Calendar() {
  const {dateInContext, setDate} = useDate();

  const handleSelect = (date) => {
    console.log("Date from Calendar", date)
    setDate(String(date));
    console.log("Date in Context: ", dateInContext)
  };

  return (
    <div>
      <DayPicker mode="single" selected={dateInContext} onSelect={handleSelect} />
      
        <p className="down_date">Срок исполнения: {Date(dateInContext)}</p>
      
    </div>
  );
}


