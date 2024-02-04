import box from "./ModelsBox.module.css";

const ModelsBox = ({ car }) => {
  return (
    <div className={box.models_div__box__img}>
      <img src={car.images} alt="cars_img" />
      <div className={box.models_div__box__info}>
        <div className={box.models_div__box__info__name_price}>
          <div className={box.models_div__box__info__name_price__name}>
            <p>
              {car.mark} {car.model}
            </p>
          </div>
          <div className={box.models_div__box__info__name_price__price}>
            <h4>{car.price}</h4>
            <p>per day</p>
          </div>
        </div>
        <div className={box.models_div__box__info__name_price__details}>
          <span>{car.mark}</span>
          <span className={box.span_right}>{car.doors}</span>
          <span>Manual</span>
          <span className={box.span_right}>{car.fuel}</span>
        </div>
      </div>
    </div>
  );
};

export default ModelsBox;
