import { Image } from "@nextui-org/react"
import type React from "react"

const OfferCard: React.FC = () => {
  return (
    <div className=" bg-violet-600 rounded-3xl flex items-center text-left justify-between h-full max-w-[620px]">
      <div className="p-4 w-[75%]">
        <h2 className="text-2xl font-semibold text-white">
          До 31 декабря любой курс со скидкой 20%
        </h2>
        <p className="mt-2 text-white">
          До конца года у вас есть уникальная возможность воспользоваться нашей
          новогодней скидкой 20% на любой курс!
        </p>
      </div>
      <Image src="/huskey.svg" alt="Huskey" className="w-full h-full" />
    </div>
  )
}

export default OfferCard
