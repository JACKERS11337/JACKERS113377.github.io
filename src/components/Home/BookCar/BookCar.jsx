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

  const [loading, setLoading] = useState(false);

  function submit() {
    setLoading(true);
    setTimeout(() => {
      closeModal();
      setLoading(false);
      const check = document.querySelector(".check-email");
      check.style.display = "flex";
    }, 1000);
  }

  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const setLocation = (e) => {
    setSelectLocation(e.target.value);
  };

  const setTime = (e) => {
    setPickTime(e.target.value);
  };

  function openModal(e) {
    e.preventDefault();
    const error = document.querySelector(".error");
    if (carType === "" || selectLocation === "" || pickTime === "") {
      error.style.display = "flex";
      setOpen(false);
    } else {
      document.body.style.overflow = "hidden";
      error.style.display = "none";
      setOpen(true);
    }
  }

  function closeModal() {
    document.body.style.overflow = "unset";
    const check = document.querySelector(".check-email");
    check.style.display = "none";
    setOpen(false);
  }

  return (
    <section>
      <div className="book-container">
        <div className="book-content">
          <h2>Book a car</h2>
          <p className="error">
            All fields required!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </p>
          <p className="check-email">
            Check your email to confirm an order.
            <svg
              onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </p>
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
              <select onChange={setLocation} value={selectLocation}>
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
                onChange={setTime}
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
            submit={submit}
            loading={loading}
          />
        </Modal>
      )}
    </section>
  );
};

export default BookCar;
