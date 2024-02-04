import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CarsModels from "./components/CarsModels/CarsModels";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Cars Models" element={<CarsModels />} />
      </Routes>
    </>
  );
}

export default App;
