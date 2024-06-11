import type React from "react"
import {
  Button,
  Card,
  Input,
  Spacer,
  TableColumn,
  TableRow,
} from "@nextui-org/react"
import Sidebar from "../../components/side bar"
import Calendar from "../../components/calendar"
import Layout from "../layout"

const CalendarPage: React.FC = () => {
  return (
    <Layout>
      asdasd
      <TableRow>
        <TableColumn>
          <Sidebar />
        </TableColumn>
        <TableColumn>
          <Card className="p-[20px]">
            <h2>Расписание</h2>
            <TableRow className="flex space-between items-center">
              <Input placeholder="Выбрать предмет" width="200px" />
              <TableRow>
                <Button>←</Button>
                <h2>Март 2024</h2>
                <Button>→</Button>
                <Button>Сегодня</Button>
              </TableRow>
            </TableRow>
            <Spacer y={1} />
            <Calendar />
          </Card>
        </TableColumn>
      </TableRow>
    </Layout>
  )
}

export default CalendarPage
