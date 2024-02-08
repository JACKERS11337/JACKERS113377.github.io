import { useState } from "react";
import { cars } from "../../Js/CarObj/car-info";

const BookCar = () => {
  const [carType, setCarType] = useState("");
  const [carImg, setCarImg] = useState("");
  const [selectLocation, setSelectLocation] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [open, setOpen] = useState(false);

  // Если case (carImg) === 'imgUrl')
  let imgUrl;
  switch (carImg) {
    // if (carImg === 'imgUrl')
    case "BMW":
      imgUrl = "/G30.png";
      break;
    case "Audi":
      imgUrl = "/RS6.png";
      break;
    case "Toyota":
      imgUrl = "/Camry-1.png";
      break;
    case "Volkswagen":
      imgUrl = "/Golf 6.png";
      break;
    case "Mercedes":
      imgUrl = "/GL.png";
      break;
    case "Porsche":
      imgUrl = "/911.png";
      break;
    default:
      imgUrl = "";
  }

  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  function openModal(event) {
    event.preventDefault();
    setOpen(true);
  }

  return (
    <section>
      <div className="container">
        <div>
          <h2>Book a car</h2>
          <form action="">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="">Select Your Car Type</label>
              <select onChange={handleCar} value={carType}>
                <option>Select your car type</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.mark}>
                    {car.mark}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="">Location</label>
              <select
                onChange={(e) => setSelectLocation(e.target.value)}
                value={selectLocation}
              >
                <option>Location</option>
                <option value={"Minsk"}>Minsk</option>
                <option value={"Vitebsk"}>Vitebsk</option>
                <option value={"Mogilev"}>Mogilev</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="time">Pick-up</label>
              <input
                type="date"
                id="time"
                onChange={(e) => setPickTime(e.target.value)}
                value={pickTime}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="time"> Drop-of</label>
              <input
                type="date"
                id="time"
                onChange={(e) => setDropTime(e.target.value)}
                value={dropTime}
              />
            </div>
            <button onClick={openModal}>Click</button>

            {/* -------------------------------------- modal------------------------------------------ */}
            <dialog
              open={open}
              style={{ maxWidth: "1300px", margin: "0 auto" }}
            >
              <div>
                <h2>COMPLETE RESERVATION</h2>
              </div>
              <div>
                <h4>
                  Upon completing this reservation enquiry, you will receive:
                </h4>
                <p>
                  Your rental voucher to produce on arrival at the rental desk
                  and a toll-free customer support number.
                </p>
              </div>
              <div>
                <div>
                  <h5>
                    <span>Car -</span>
                    {carType}
                  </h5>
                  {imgUrl && (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={imgUrl}
                      alt="car_img"
                    />
                  )}
                  {!imgUrl && null}
                </div>
                <div>
                  <h5>Location & Date </h5>
                  <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                      {pickTime} / <input type="time" />
                    </p>
                  </div>
                  <div>
                    <h6>Drop-Off Date & Time</h6>
                    <p>
                      {dropTime} / <input type="time" />
                    </p>
                  </div>
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>{selectLocation}</p>
                  </div>
                </div>
              </div>
            </dialog>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookCar;
