import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default class Calender extends React.Component {
  render() {
    return "<FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />";
  }
}
