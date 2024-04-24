
import { Routes, Route } from "react-router-dom";
import Home1 from '../pages/Home1';
import Detail from "../pages/Detail";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
