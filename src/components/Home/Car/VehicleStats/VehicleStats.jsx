import "./VehicleStats.css";

const VehicleStats = ({ car }) => {
  return (
    <>
      <div className="car__table">
        <div className="car__price">{car.price} / rent per day</div>
        <div className="car__info">
          <div className="car__list">
            <span>Model</span>
            <span>{car.model}</span>
          </div>
          <div className="car__list">
            <span>Mark </span>
            <span>{car.mark}</span>
          </div>
          <div className="car__list">
            <span>Year</span>
            <span>{car.year}</span>
          </div>
          <div className="car__list">
            <span>Doors</span>
            <span>{car.doors}</span>
          </div>
          <div className="car__list">
            <span>AC</span>
            <span>{car.ac}</span>
          </div>
          <div className="car__list">
            <span>Transmission</span>
            <span>{car.transmission}</span>
          </div>
          <div className="car__list">
            <span>Fuel</span>
            <span>{car.fuel}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleStats;
