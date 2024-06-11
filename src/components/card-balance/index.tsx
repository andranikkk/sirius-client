import type React from "react"
import { Button } from "@nextui-org/react"

const Balance: React.FC = () => {
  return (
    <div className="p-6 bg-white border-violet-900 border-1 rounded-3xl shadow-md min-w-[450px]">
      <h3 className="text-xl font-semibold text-gray-900">Баланс занятий</h3>
      <ul className="mt-4 space-y-2">
        <li className="flex justify-between items-center text-lg m-1">
          <span>Ментальная Арифметика</span>
          <button className="rounded-[50%] w-11 h-11 bg-violet-200">32</button>
        </li>
        <hr />
        <li className="flex justify-between items-center text-lg m-1">
          <span>Программирование</span>
          <button className="rounded-[50%] w-11 h-11 bg-violet-200">0</button>
        </li>
        <hr />
        <li className="flex justify-between items-center text-lg m-1">
          <span>Скорочтение</span>
          <button className="rounded-[50%] w-11 h-11 bg-violet-200">4</button>
        </li>
      </ul>
      <Button className="mt-4 rounded-full w-full bg-violet-200 text-violet-900">Button</Button>
    </div>
  )
}

export default Balance
