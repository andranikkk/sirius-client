import { Button } from "@nextui-org/react"
import type React from "react"

const NextLesson: React.FC = () => {
  return (
    <div className="p-6 h-full bg-yellow-100 rounded-3xl min-w-[360px] w-full shadow-md text-center">
      <p className="text-2xl">Следующее занятие начнется через:</p>
      <div className="text-[40px] my-4">
        6<span className="text-[15px] ml-1 mr-3">д</span>
        12<span className="text-[15px] ml-1 mr-3">ч</span>
        24<span className="text-[15px] ml-1 mr-3">мин</span>
      </div>
      <Button className="bg-yellow-200 px-16 border-dashed text-yellow-900 py-2 rounded-3xl">
        Button
      </Button>
    </div>
  )
}

export default NextLesson
