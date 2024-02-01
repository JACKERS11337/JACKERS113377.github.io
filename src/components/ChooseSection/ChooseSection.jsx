import ChooseCar from "/ChooseCar.png";
import cross from "/Cross.png";
import pricing from "/Pricing.png";
import hidden from "/No_hidden.png";

import choose from "./ChooseSection.module.css";

const ChooseSection = () => {
  return (
    <section>
      <div className={choose.container}>
        <div className={choose.choose_container}>
          <img
            className={choose.choose_container__img}
            src={ChooseCar}
            alt=""
          />
          <div className={choose.text_container}>
            <div className={choose.text_container__left}>
              <h4>Why Choose Us</h4>
              <h2>Best valued deals you will ever find</h2>
              <p>
                Discover the best deals you will ever find with our unbeatable
                offers. We are dedicated to providing you with the best value
                for your money, so you can enjoy top-quality services and
                products without breaking the bank. Our deals are designed to
                give you the ultimate renting experience, so do not miss out on
                your chance to save big.
              </p>
            </div>
            <div className={choose.text_container__right}>
              <div className={choose.text_container__right__box}>
                <img src={cross} alt="" />
                <div className={choose.text_container__right__box__text}>
                  <h4>Cross Country Drive</h4>
                  <p>
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className={choose.text_container__right__box}>
                <img src={pricing} alt="pricing" />
                <div className={choose.text_container__right__box__text}>
                  <h4>All Inclusive Pricing</h4>
                  <p>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className={choose.text_container__right__box}>
                <img src={hidden} alt="no_hidden" />
                <div className={choose.text_container__right__box__text}>
                  <h4>No Hidden Charges</h4>
                  <p>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
