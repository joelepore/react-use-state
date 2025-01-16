import Box from "./components/Box"

import { FaHtml5 } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import languages from "./assets/languages"

const icons = [
  { id: 1, component: <FaHtml5 /> },
  { id: 2, component: <IoLogoCss3 /> },
  { id: 3, component: <IoLogoJavascript /> },
  { id: 4, component: <FaNodeJs /> },
  { id: 5, component: <SiExpress /> },
  { id: 6, component: <FaReact /> }
];


const App = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-center mt-4">Learn Web Development</h1>
      <Box data={languages} icons={icons} />
    </>
  )
}

export default App