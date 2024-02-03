import EasyRental from "./EasyRental/EasyRental";
import Header from "./Header/Header";
import CarMenu from "./Car/CarMenu/CarMenu";
import Banner from "./Banner/Banner";
import ChooseSection from "./ChooseSection/ChooseSection";
import FaqSection from "./FaqSection/FaqSection";
import FooterSection from "./FooterSection/FooterSection";

const Home = () => {
  return (
    <>
      <>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <Header />
          <EasyRental />
          <CarMenu />
        </div>
        <Banner />
        <ChooseSection />
        <FaqSection />
        <FooterSection />
      </>
    </>
  );
};

export default Home;
