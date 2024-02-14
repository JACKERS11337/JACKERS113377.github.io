import { useState } from "react";
import "./style.scss";

const PersonalInfo = ({ closeModal, submit, loading }) => {
  return (
    <div className="booking-modal__person-info">
      <h4>Personal Information</h4>
      <form className="info-form">
        <div className="info-form__2col">
          <span>
            <label>
              First Name <b>*</b>
            </label>
            <input type="text" placeholder="Enter your first name"></input>
            <p className="error-modal">This field is required.</p>
          </span>
          <span>
            <label>
              Last Name <b>*</b>
            </label>
            <input type="text" placeholder="Enter your last name"></input>
            <p className="error-modal ">This field is required.</p>
          </span>

          <span>
            <label>
              Phone Number <b>*</b>
            </label>
            <input type="tel" placeholder="Enter your phone number"></input>
            <p className="error-modal">This field is required.</p>
          </span>

          <span>
            <label>
              Age <b>*</b>
            </label>
            <input type="number" placeholder="18"></input>
            <p className="error-modal ">This field is required.</p>
          </span>
        </div>

        <div className="info-form__1col">
          <span>
            <label>
              Email <b>*</b>
            </label>
            <input type="email" placeholder="Enter your email address"></input>
            <p className="error-modal">This field is required.</p>
          </span>

          <span>
            <label>
              Address <b>*</b>
            </label>
            <input type="text" placeholder="Enter your street address"></input>
            <p className="error-modal ">This field is required.</p>
          </span>
        </div>

        <div className="info-form__2col">
          <span>
            <label>
              City <b>*</b>
            </label>
            <input type="text" placeholder="Enter your city"></input>
            <p className="error-modal">This field is required.</p>
          </span>

          <span>
            <label>
              Zip Code <b>*</b>
            </label>
            <input type="text" placeholder="Enter your zip code"></input>
            <p className="error-modal ">This field is required.</p>
          </span>
        </div>

        <span className="info-form__checkbox">
          <input type="checkbox"></input>
          <p>Please send me latest news and updates</p>
        </span>
      </form>
      <div className="reserve-button">
        <button onClick={submit}>
          {loading ? <img src="loading.svg" alt="loading" /> : "Reserve Now"}
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
