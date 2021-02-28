import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/core";
import "@fullcalendar/daygrid";
import "@fullcalendar/timegrid";
import "./../../styles/Calender.css";
import { getExamHelper } from "./../../helpers/calender";
let Chance = require("chance");

let chance = new Chance();
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
let newEvent,
  events = [];
for (let i = 0; i < 3; i++) {
  events.push({
    title: `Exam:${chance.word()}`,
    date: chance.date({ year: 2021 }),
    description: chance.sentence(),
    link: chance.domain(),
  });
}
for (let i = 0; i < 3; i++) {
  events.push({
    title: `Result:${chance.word()}`,
    date: chance.date({ year: 2021 }),
    description: chance.sentence(),
    link: chance.domain(),
  });
}
shuffleArray(events);
export default function ReactCalender({ user }) {
  return (
    <div className='container'>
      <FullCalendar
        aspectRatio={1.75}
        initialView='dayGridMonth'
        headerToolbar={{
          left: "prev,today,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        plugins={[dayGridPlugin, timeGridPlugin]}
      />
      {events.map((exam, index) => (
        <div className='card upcomingExam' key={index}>
          <div className='card-body content'>
            <div>
              <h3 className='card-title'>{exam.title}</h3>
              <p className='card-subtitle text-muted'>
                {exam.date.toDateString()} {exam.date.toLocaleTimeString()}
              </p>
            </div>

            <a href={exam.link} className='btn btn-primary'>
              Exam Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
