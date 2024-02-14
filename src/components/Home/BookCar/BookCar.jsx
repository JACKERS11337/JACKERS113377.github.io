import { useState } from "react";
import { cars } from "../../Js/CarObj/car-info";
import "./style.scss";
import Modal from "./BookModal/Modal";
import BodyModal from "./BookModal/BodyModal/BodyModal";

const BookCar = () => {
  const [carType, setCarType] = useState("");
  const [carImg, setCarImg] = useState("");
  const [selectLocation, setSelectLocation] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [open, setOpen] = useState(false);

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
        <Modal setOpen={setOpen}>
          <BodyModal
            carImg={carImg}
            pickTime={pickTime}
            selectLocation={selectLocation}
            carType={carType}
            setOpen={setOpen}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </section>
  );
};

export default BookCar;
