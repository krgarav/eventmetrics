import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { sampleData } from "../data/sample";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/calendarSlice";
import DataModal from "./DataModal";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


const events = Object.entries(sampleData).map(([date, users]) => {
  const dateObj = new Date(date);
  return {
    title: `Users Data`,
    start: dateObj,
    end: dateObj,
    users,
  };
});

function CalendarBarDashboard() {
  const dispatch = useDispatch();

  const handleSelectEvent = (event) => {
    const serializableEvent = {
      ...event,
      start: event.start.toISOString(),
      end: event.end.toISOString(),
    };
    dispatch(openModal(serializableEvent));
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
      />
      <DataModal />
    </div>
  );
}

export default CalendarBarDashboard;
