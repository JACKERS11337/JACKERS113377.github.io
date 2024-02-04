import renting from "/car-renting.jpg";
import types from "/car-types.png";
import outlets from "/rental-outlets.png";
import shop from "/repair-shop.png";
import company from "./AboutCompanySection.module.css";

const AboutCompanySection = () => {
  return (
    <section>
      <div className={company.container}>
        <div className={company.about_company}>
          <img
            className={company.about_company__img}
            src={renting}
            alt="car-renting"
          />

          <div className={company.about_company__text}>
            <h3>About Company</h3>
            <h2>You start the engine and your adventure begins</h2>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className={company.about_company__text__icons}>
              <div className={company.about_company__text__icons__box}>
                <img src={types} alt="car-types" />
                <span>
                  <h4>10</h4>
                  <p>Car Types</p>
                </span>
              </div>
              <div className={company.about_company__text__icons__box}>
                <img src={outlets} alt="rental-outlets" />
                <span>
                  <h4>25</h4>
                  <p>Rental Outlets</p>
                </span>
              </div>
              <div className={company.about_company__text__icons__box}>
                <img src={shop} alt="repair-shop" />
                <span>
                  <h4>15</h4>
                  <p>Repair Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
