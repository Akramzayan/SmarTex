import React from 'react'
import Fullcalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import "./calendar.scss"

const Calendar = () => {
  return (
    <div className='calendar'>
        <Fullcalendar 
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
        }}
  
     
        />
       
      
    </div>
  )
}

export default Calendar
