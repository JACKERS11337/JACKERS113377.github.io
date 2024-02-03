import footer from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <footer className={footer.footer}>
      <div className={footer.container}>
        <div className={footer.footer_content}>
          <ul className={footer.footer_content__1}>
            <li>
              <span>CAR</span> Rental
            </li>
            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <a href="tel:123456789">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
                (123) -456-789
              </a>
            </li>
            <li>
              <a href="mailto:  carrental@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
                carrental@gmail.com
              </a>
            </li>
          </ul>
          <ul className={footer.footer_content__2}>
            <li>Company</li>
            <li>
              <a href="#home">Minsk</a>
            </li>

            <li>
              <a href="#home">Blog</a>
            </li>
            <li>
              <a href="#home">How we work</a>
            </li>
          </ul>
          <ul className={footer.footer_content__2}>
            <li>Working Hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul className={footer.footer_content__2}>
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>
            <li>
              <input type="email" placeholder="Enter Email Address" />
            </li>
            <li>
              <button className={footer.submit_email}>Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
