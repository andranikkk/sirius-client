import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react"
import { data } from "../auto-input-data"

const AutoInput = () => {
  return (
    <div>
      <div className="flex w-full flex-row justify-between items-center">
        <Autocomplete label="Выбрать предмет" className="max-w-xs">
          {data.map(item => (
            <AutocompleteItem key={item.value} value={item.value}>
              {item.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Button className="width-[250px] px-28 bg-violet-200 rounded-full">
          Изменить расписание
        </Button>
      </div>
    </div>
  )
}

export default AutoInput
