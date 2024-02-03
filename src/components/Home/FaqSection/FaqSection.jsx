import { useState } from "react";
import faq from "./FaqSection.module.css";

const FaqSection = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <section className={faq.faq_section}>
      <div className={faq.container}>
        <div className={faq.faq_content}>
          <div className={faq.faq_content__title}>
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to <br /> Common Concerns and Inquiries.
            </p>
          </div>
          <div className={faq.faq_questions}>
            <div className={faq.faq_box}>
              <div
                className={
                  active
                    ? `${faq.faq_box__question} ${faq.active_question}`
                    : faq.faq_box__question
                }
                onClick={() => setActive(!active)}
              >
                <p>1. What is special about comparing rental car deals?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <div
                className={
                  active
                    ? `${faq.faq_box__answer} ${faq.active_answer}`
                    : faq.faq_box__answer
                }
                onClick={() => setActive(!active)}
              >
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </div>
            </div>
            <div className={faq.faq_box}>
              <div
                className={
                  active1
                    ? `${faq.faq_box__question} ${faq.active_question}`
                    : faq.faq_box__question
                }
                onClick={() => setActive1(!active1)}
              >
                <p>2. How do I find the car rental deals?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <div
                className={
                  active1
                    ? `${faq.faq_box__answer} ${faq.active_answer}`
                    : faq.faq_box__answer
                }
                onClick={() => setActive1(!active1)}
              >
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </div>
            </div>
            <div className={faq.faq_box}>
              <div
                className={
                  active2
                    ? `${faq.faq_box__question} ${faq.active_question}`
                    : faq.faq_box__question
                }
                onClick={() => setActive2(!active2)}
              >
                <p>3. How do I find such low rental car prices?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <div
                className={
                  active2
                    ? `${faq.faq_box__answer} ${faq.active_answer}`
                    : faq.faq_box__answer
                }
                onClick={() => setActive2(!active2)}
              >
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
