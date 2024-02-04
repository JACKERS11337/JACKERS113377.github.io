import AboutBannerSection from "../About/AboutBannerSection/AboutBannerSection";
import HeaderMenu from "../Header/HeaderMenu";
import FooterSection from "../Home/FooterSection/FooterSection";
import Models from "./Models/ModelsBox/Models";
const CarsModels = () => {
  return (
    <>
      <HeaderMenu />
      <Models />
      <AboutBannerSection />
      <FooterSection />
    </>
  );
};

export default CarsModels;
