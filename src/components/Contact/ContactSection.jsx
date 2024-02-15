import NavBackground from "../NavBackground/NavBackground";
import { pages } from "../Js/Pages/pages";
import AboutBannerSection from "../About/AboutBannerSection/AboutBannerSection";
import FooterSection from "../Home/FooterSection/FooterSection";
import AdditionalSection from "./AdditionalSection/AdditionalSection";

const ContactSection = () => {
  return (
    <>
      <NavBackground pages={pages[2].name} />
      <AdditionalSection />
      <AboutBannerSection />
      <FooterSection />
    </>
  );
};

export default ContactSection;
