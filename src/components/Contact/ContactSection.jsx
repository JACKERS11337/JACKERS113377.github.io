import HeaderMenu from "../Header/HeaderMenu";
import NavBackground from "../NavBackground/NavBackground";
import { pages } from "../Js/Pages/pages";

const ContactSection = () => {
  return (
    <>
      <HeaderMenu />
      <NavBackground pages={pages[2].name} />
    </>
  );
};

export default ContactSection;
