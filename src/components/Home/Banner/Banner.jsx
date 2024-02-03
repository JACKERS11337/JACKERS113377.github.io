import banner from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={banner.container}>
      <div className={banner.content}>
        <div className={banner.text}>
          <h2>Save big with our cheap car rental!</h2>
          <p>
            Top Airports. Local Suppliers. <span>24/7</span> Support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
