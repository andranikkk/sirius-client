import type React from "react"
import { Button } from "@nextui-org/react"

const UpcomingLessons: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md w-full border-violet-900 border-1">
      <div className="w-full">
        <h3 className="text-xl font-semibold text-gray-900">Ближайшие уроки</h3>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="flex text-[40px] flex-col w-[55px] mr-5">
                1<p className="text-[15px]">мая</p>
              </div>
              <p className="text-sm text-gray-600">Ментальная Арифметика</p>
            </div>
            <div className="flex space-x-2">
              <Button
                disabled
                variant="bordered"
                className="bg-transparent rounded-full"
              >
                Button
              </Button>
              <Button className="bg-violet-200 rounded-full text-violet-700">
                Button
              </Button>
            </div>
          </li>
          <hr />
          <li className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="flex text-[40px] flex-col w-[55px] mr-5">
                30<p className="text-[15px]">октября</p>
              </div>
              <p className="text-sm text-gray-600">Программирование</p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="bordered"
                className="bg-transparent rounded-full text-violet-700"
              >
                Button
              </Button>
              <Button className="text-violet-700 bg-violet-200 rounded-full">
                Button
              </Button>
            </div>
          </li>
          <hr />
          <li className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="flex text-[40px] flex-col w-[55px] mr-5">
                16<p className="text-[15px]">ноября</p>
              </div>
              <p className="text-sm text-gray-600">Скорочтение</p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="bordered"
                className="bg-transparent rounded-full text-violet-700"
              >
                Button
              </Button>
              <Button className="bg-violet-200 rounded-full text-violet-700">
                Button
              </Button>
            </div>
          </li>
        </ul>
      </div>
      <Button className="w-[300px] rounded-full mt-4 bg-violet-200 text-violet-700">
        Button
      </Button>
    </div>
  )
}

export default UpcomingLessons
