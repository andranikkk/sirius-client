import type React from "react"
import { Button } from "@nextui-org/react"

const Balance: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-3xl shadow-md min-w-[400px]">
      <h3 className="text-xl font-semibold text-gray-900">Баланс занятий</h3>
      <ul className="mt-4 space-y-2">
        <li className="flex justify-between items-center">
          <span>Ментальная Арифметика</span>
          <span className="font-bold">32</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Программирование</span>
          <span className="font-bold">0</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Скорочтение</span>
          <span className="font-bold">4</span>
        </li>
      </ul>
      <Button className="mt-4 bg-violet-200 text-violet-700">Button</Button>
    </div>
  )
}

export default Balance
