import AboutBannerSection from "../About/AboutBannerSection/AboutBannerSection";
import NavBackground from "../NavBackground/NavBackground";
import FooterSection from "../Home/FooterSection/FooterSection";
import Models from "./Models/ModelsBox/Models";
import { pages } from "../Js/Pages/pages";

const CarsModels = () => {
  return (
    <>
      <NavBackground pages={pages[1].name} />
      <Models />
      <AboutBannerSection />
      <FooterSection />
    </>
  );
};

export default CarsModels;
