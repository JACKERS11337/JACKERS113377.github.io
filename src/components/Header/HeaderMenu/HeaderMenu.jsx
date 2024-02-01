import logo from "/logo.png";
import style from "./HeaderMenu.module.css";

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Vehicle Models</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HeaderMenu;
