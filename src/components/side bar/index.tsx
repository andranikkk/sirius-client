import { Button, Image } from "@nextui-org/react"
import NavButton from "../nav-button"

const Sidebar: React.FC = () => {

  return (
    <nav className="min-w-[245px]">
      <div className="flex flex-row m-4 items-center">
        <Image src="/assets/logomark.svg" className="mr-3" />
        <h3 className="flex w-[20px] text-[30px]">Sirius Future</h3>
      </div>
      <ul>
        <li>
          <NavButton href="/user/:username" icon="/assets/home.svg">
            Главная
          </NavButton>
          <NavButton href="/" icon="/assets/calendar.svg">
            Расписание
          </NavButton>
          <NavButton href="#" icon="/assets/wallet.svg">
            Оплата
          </NavButton>
          <NavButton href="#" icon="/assets/acchivements.svg">
            Достижения
          </NavButton>
          <NavButton href="#" icon="/assets/challanges.svg">
            Тренажеры
          </NavButton>
          <NavButton href="#" icon="/assets/library.svg">
            Библиотека
          </NavButton>
          <NavButton href="#" icon="/assets/support.svg">
            Проверка связи
          </NavButton>
          <NavButton href="#" icon="/assets/settings.svg">
            Настройки
          </NavButton>
          <NavButton href="#" icon="/assets/faq.svg">
            Вопросы
          </NavButton>
        </li>
      </ul>
      <div className="mx-auto bg-white rounded-3xl shadow-md overflow-hidden max-w-[300px] mt-4">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Учитесь бесплатно
          </h2>
          <p className="mt-2 text-gray-600">
            Приводите друзей с детьми заниматься в Sirius Future и получайте
            подарки!
          </p>
          <div className="mt-4 flex items-center justify-between">
            <Button className="bg-blue-100 text-blue-700 py-2 rounded-3xl">
              Узнать
            </Button>
            <Image src="/assets/present.svg" alt="Gift illustration" />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Sidebar
