import EasyRental from "./EasyRental/EasyRental";
import CarMenu from "./Car/CarMenu/CarMenu";
import Banner from "./Banner/Banner";
import ChooseSection from "./ChooseSection/ChooseSection";
import FaqSection from "./FaqSection/FaqSection";
import FooterSection from "./FooterSection/FooterSection";
import PlanYou from "./PlanYou/PlanYou";
import BookCar from "./BookCar/BookCar";

const Home = () => {
  return (
    <>
      <PlanYou />
      <BookCar />
      <EasyRental />
      <CarMenu />
      <Banner />
      <ChooseSection />
      <FaqSection />
      <FooterSection />
    </>
  );
};

export default Home;
