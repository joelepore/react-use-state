import Box from "./components/Box"

import languages from "./assets/languages"

const App = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-center mt-4">Learn Web Development</h1>
      <Box data={languages} />
    </>
  )
}

export default App