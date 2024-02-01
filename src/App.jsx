import Banner from "./components/Banner/Banner";
import ChooseSection from "./components/ChooseSection/ChooseSection";
import EasyRental from "./components/EasyRental/EasyRental";
import Header from "./components/Header/Header";
import CarMenu from "./components/car/CarMenu/CarMenu";

function App() {
  return (
    <>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Header />
        <EasyRental />
        <CarMenu />
      </div>
      <Banner />
      <ChooseSection />
    </>
  );
}

export default App;
