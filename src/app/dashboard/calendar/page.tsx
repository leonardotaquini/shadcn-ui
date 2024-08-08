"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dates, setDates] = useState<Date[] | undefined>([]);
  const smallDate = date?.toLocaleDateString("es-ES",{
    weekday:'long',
    year:'numeric',
    month:'long',
  });
  return (
    <div className="flex flex-col gap-4 flex-wrap">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date.getDay() === 6 || date.getDay() === 0}
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />

    <div>
      <h1>Informacion</h1>
      <p>{dates?.map( date => date.toLocaleDateString('es-ES')).join(', ')}</p>
    </div>

    </div>
  );
}
