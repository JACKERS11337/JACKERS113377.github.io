import banner from "./AboutBannerSection.module.css";

const AboutBannerSection = () => {
  return (
    <section>
      <div className={banner.book_banner}>
        <div className={banner.book_banner__overlay}>
          <div className={banner.container}>
            <div className={banner.text_content}>
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerSection;
