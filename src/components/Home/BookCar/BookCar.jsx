import { useRef, useState } from "react";
import { cars } from "../../Js/CarObj/car-info";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import "./style.scss";

const BookCar = () => {
  const [carType, setCarType] = useState("");
  const [carImg, setCarImg] = useState("");
  const [selectLocation, setSelectLocation] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [open, setOpen] = useState(false);

  const modalRef = useRef();

  useOnClickOutside(modalRef, function () {
    document.body.style.overflow = "unset";
    setOpen(false);
  });

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
    document.body.style.overflow = "hidden";
    setOpen(true);
  }

  function closeModal() {
    document.body.style.overflow = "unset";
    setOpen(false);
  }

  return (
    <section>
      <div className="book-container">
        <div className="book-content">
          <h2>Book a car</h2>
          <form>
            <div className="book-cars">
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
            <div className="book-location">
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
            <div className="book-pick">
              <label htmlFor="time">Pick-up</label>
              <input
                type="date"
                id="time"
                onChange={(e) => setPickTime(e.target.value)}
                value={pickTime}
              />
            </div>
            <button onClick={openModal}>Search</button>
          </form>
        </div>
      </div>
      {/* -------------------------------------- modal------------------------------------------ */}
      {open && (
        <>
          <div className="modal">
            <div className="modal-content" ref={modalRef}>
              <div className="modal-title">
                <h2>COMPLETE RESERVATION</h2>
                <svg
                  onClick={closeModal}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </div>
              <div className="dialog-text">
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Upon completing this reservation enquiry, you will receive:
                </h4>
                <p>
                  Your rental voucher to produce on arrival at the rental desk
                  and a toll-free customer support number.
                </p>
              </div>
              <div className="dialog-info">
                <div className="dialog-date">
                  <h5>Location & Date </h5>
                  <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                      {pickTime} / <input type="time" />
                    </p>
                  </div>
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>{selectLocation}</p>
                  </div>
                </div>
                <div className="type-car">
                  <h5>
                    Car -<span>{carType}</span>
                  </h5>
                  {imgUrl && (
                    <img className="dialog-image" src={imgUrl} alt="car_img" />
                  )}
                  {!imgUrl && null}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default BookCar;
