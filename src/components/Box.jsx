import { useState } from "react"
import Button from "./Button"
import Card from "./Card"

const Box = ({ data, icons }) => {
  const [selectedId, setSelectedId] = useState(null);

  const cardText = selectedId ? data.find(item => item.id === selectedId).description : 'Nessun linguaggio selezionato.';

  const handleButtonClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  }

  return (
    <div className="my-8 max-w-3xl mx-auto">
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-between">
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
      <Card text={cardText} />
    </div>
  )
}

export default Box