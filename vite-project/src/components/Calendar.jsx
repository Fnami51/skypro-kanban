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

export default function Calendar({date, setNewDate}) {

  return (
    <div>
      <DayPicker mode="single" selected={date} onSelect={setNewDate} />
      
        <p className="down_date">Срок исполнения: {date.toLocaleDateString('ru-US')}</p>
      
    </div>
  );
}


