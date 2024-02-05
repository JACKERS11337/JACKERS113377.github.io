import HeaderMenu from "../Header/HeaderMenu";
import EasyRental from "../Home/EasyRental/EasyRental";
import FooterSection from "../Home/FooterSection/FooterSection";
import NavBackground from "../NavBackground/NavBackground";
import AboutBannerSection from "./AboutBannerSection/AboutBannerSection";
import AboutCompanySection from "./AboutCompanySection/AboutCompanySection";
import { pages } from "../Js/Pages/pages";

const About = () => {
  return (
    <>
      <HeaderMenu />
      <NavBackground pages={pages[0].name} />
      <AboutCompanySection />
      <EasyRental />
      <AboutBannerSection />
      <FooterSection />
    </>
  );
};

export default About;
