import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/core";
import "@fullcalendar/daygrid";
import "@fullcalendar/timegrid";
import "../../styles/Calender.css";

let newEvent = {
  title: "New event",
  date: new Date("2021/03/03"),
  description: "A new event",
  link:
    "https://docs.google.com/forms/d/e/1FAIpQLScPNBVVbKRQL_Rfxi9AI2oeJGzGExhqFjxCmuFiexTouj_m2Q/viewform?fbzx=-174935308807220936",
};
const events = [newEvent];

export default function ReactCalender() {
  return (
    <div className="container">
      <FullCalendar
        aspectRatio={1.75}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,today,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        eventBackgroundColor="red"
        eventColor="red"
        // eventBorderColor="#63D297"
        plugins={[dayGridPlugin, timeGridPlugin]}
      />
      {events.map((exam, index) => (
        <div className="card upcomingExam" key={index}>
          <div class="card-body content">
            <div>
              <h3 class="card-title">{exam.title}</h3>
              <p class="card-subtitle text-muted">
                {exam.date.toDateString()} {exam.date.toLocaleTimeString()}
              </p>
            </div>
            <a href={exam.link} class="btn btn-primary">
              Exam Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
