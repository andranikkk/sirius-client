import type React from "react"
import { Button } from "@nextui-org/react"

const UpcomingLessons: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-3xl shadow-md w-full">
      <h3 className="text-xl font-semibold text-gray-900">Ближайшие уроки</h3>
      <ul className="mt-4 space-y-4">
        <li className="flex justify-between items-center">
          <div>
            <p className="font-bold">1 мая</p>
            <p className="text-sm text-gray-600">Ментальная Арифметика</p>
          </div>
          <div className="flex space-x-2">
            <Button className="bg-violet-200 text-violet-700">Button</Button>
            <Button className="bg-violet-200 text-violet-700">Button</Button>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div>
            <p className="font-bold">30 октября</p>
            <p className="text-sm text-gray-600">Программирование</p>
          </div>
          <div className="flex space-x-2">
            <Button className="bg-violet-200 text-violet-700">Button</Button>
            <Button className="bg-violet-200 text-violet-700">Button</Button>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div>
            <p className="font-bold">16 ноября</p>
            <p className="text-sm text-gray-600">Скорочтение</p>
          </div>
          <div className="flex space-x-2">
            <Button className="bg-violet-200 text-violet-700">Button</Button>
            <Button className="bg-violet-200 text-violet-700">Button</Button>
          </div>
        </li>
      </ul>
      <Button className="mt-4 bg-violet-200 text-violet-700">Button</Button>
    </div>
  )
}

export default UpcomingLessons
