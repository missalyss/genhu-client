
import React, { useState, useEffect } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "2rem",
  }, 
  calendar: {
    minHeight: "60rem",
  }
}));

const MyCalendar = props => {
  const classes = useStyles();

  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`/api/events`)
    .then((res) => setEvents(res.data))
    .catch((err) => console.log(`Could Not Get Events: ${err.message}`));
  }, []);
  
  const testFunc = () => {
    console.log(events)
  }
  
  return (
    <div style={{paddingTop: "200px"}}>
      {testFunc()}
      <Paper className={classes.paper} >
        <Calendar
          className={classes.calendar}
          selectable
          localizer={localizer}
          views={{ month: true }}
          events={events}
          startAccessor='start_date'
          endAccessor='end_date'
          titleAccessor="location"
          defaultView="month"
          showMultiDayTimes
        />
      </Paper>
    </div>
  );
};

export default MyCalendar;