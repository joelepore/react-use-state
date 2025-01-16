import Button from "./Button"
import Card from "./Card"

import { FaHtml5 } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const icons = [
  { id: 1, component: <FaHtml5 /> },
  { id: 2, component: <IoLogoCss3 /> },
  { id: 3, component: <IoLogoJavascript /> },
  { id: 4, component: <FaNodeJs /> },
  { id: 5, component: <SiExpress /> },
  { id: 6, component: <FaReact /> }
];

const Box = ({ data }) => {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
        {data.map(item => (
          <Button
            key={`btn-${item.id}`}
            text={item.title}
            icon={icons.find(icon => icon.id == item.id).component}
          />
        ))}
      </div>
      <Card text={data[0].description} />
    </div>
  )
}

export default Box