import type React from "react"
import Layout from "../layout"
import AutoInput from "../../components/auto-input"
import { Calendar } from "@nextui-org/react"

const CalendarPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <AutoInput />
      </div>
      <Calendar
        calendarWidth={"100%"}
        aria-label="Date (Page Behaviour)"
        pageBehavior="single"
      />
    </Layout>
  )
}

export default CalendarPage
