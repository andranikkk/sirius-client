import type React from "react"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import DatePicker from "react-datepicker"

const Calendar: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      inline
    />
  )
}

export default Calendar
