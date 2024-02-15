import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CarsModelSection from "./components/CarsModels/CarsModelsSection";
import ContactSection from "./components/Contact/ContactSection";
import HeaderMenu from "./components/Header/HeaderMenu";

function App() {
  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<CarsModelSection />} />
        <Route path="contact" element={<ContactSection />} />
      </Routes>
    </>
  );
}

export default App;
