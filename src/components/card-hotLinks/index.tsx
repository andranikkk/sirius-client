import type React from "react"
import { Image } from "@nextui-org/react"

const HotLinks: React.FC = () => {
  return (
    <div className="space-y-4 flex flex-col h-full justify-between text-md w-[170px]">
      <div className="p-4 bg-blue-200 rounded-3xl shadow-md flex flex-col cursor-pointer">
        <span>Домашние задания</span>
        <div className="flex justify-end">
          <Image
            src="/assets/homework.svg"
            alt="Homework"
            className="justify-end mt-3"
          />
        </div>
      </div>
      <div className="p-4 bg-purple-200 rounded-3xl shadow-md flex flex-col w-full cursor-pointer">
        <span>Отчеты от учителей</span>
        <div className="flex justify-end">
          <Image
            src="/assets/reports.svg"
            alt="Reports"
            className="justify-end mt-3"
          />
        </div>
      </div>
    </div>
  )
}

export default HotLinks
