import operator from "/Operator.webp";
import car from "/Car.webp";
import drive from "/Drive.webp";
import "./EasyRental.css";

const EasyRental = () => {
  return (
    <div className="container">
      <div className="plan-container">
        <div className="plan-container__title">
          <h3>Plan your trip now</h3>
          <h2>Quick & easy car rental</h2>
        </div>
        <div className="plan-container__boxes">
          <div className="plan-container__box">
            <img src={car} alt="car" />
            <h3>Select Car</h3>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="plan-container__box">
            <img src={operator} alt="operator" />
            <h3>Contact Operator</h3>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="plan-container__box">
            <img src={drive} alt="drive" />
            <h3>Let is Drive</h3>
            <p>
              Whether you are hitting the open road, we have got you covered
              with our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyRental;
