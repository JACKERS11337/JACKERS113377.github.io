import logo from "/logo.png";
import style from "./HeaderMenu.module.css";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <>
      <div className={style.content}>
        <a href="#" className={style.logo__content}>
          <div className={style.image__logo}>
            <img className={style.logo} src={logo} alt="logo" />
          </div>
          <div className={style.logo__name}>
            <span>CAR</span>
            <p className={style.p}>Rental</p>
          </div>
        </a>

        <nav className={style.nav}>
          <ul className={style.ul}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Vehicle Models">Vehicle Models</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HeaderMenu;
