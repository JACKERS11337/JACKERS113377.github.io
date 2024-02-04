import HeaderMenu from "../Header/HeaderMenu";
import EasyRental from "../Home/EasyRental/EasyRental";
import FooterSection from "../Home/FooterSection/FooterSection";
import AboutBannerSection from "./AboutBannerSection/AboutBannerSection";
import AboutCompanySection from "./AboutCompanySection/AboutCompanySection";

const About = () => {
  return (
    <>
      <HeaderMenu />
      <AboutCompanySection />
      <EasyRental />
      <AboutBannerSection />
      <FooterSection />
    </>
  );
};

export default About;
