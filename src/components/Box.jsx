import { useState } from "react"
import Button from "./Button"
import Card from "./Card"


const Box = ({ data, icons }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleButtonClick = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
        {data.map(item => (
          <Button
            key={`btn-${item.id}`}
            text={item.title}
            icon={icons.find(icon => icon.id == item.id).component}
            onClick={() => handleButtonClick(item.id)}
            active={item.id === selectedId}
          />
        ))}
      </div>
      <Card text={selectedId ? data.find(item => item.id === selectedId).description : 'Nessun linguaggio selezionato.'} />
    </div>
  )
}

export default Box