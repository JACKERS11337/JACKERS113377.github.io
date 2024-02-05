import { Link } from "react-router-dom";
import nav from "./NavBackground.module.css";

const NavBackground = ({ pages }) => {
  return (
    <section className={nav.section}>
      <div className={nav.pages}>
        <div className={nav.container}>
          <div className={nav.pages_text}>
            <h3>{pages}</h3>
            <p>
              <Link to="/">Home</Link> / {pages}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBackground;
