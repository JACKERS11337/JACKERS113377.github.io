import car from "/Red_Golf-6.png";
import style from "./PlanYou.module.css";

const PlanYou = () => {
  return (
    <>
      <div className={style.content}>
        <div className={style.info}>
          <h4 className={style.h4}>Plan your trip now</h4>
          <h1 className={style.h1}>
            Save <span>big</span> with our car rental
          </h1>
          <p className={style.p}>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            <br />
            flexible pick-up options and much more.
          </p>
        </div>
        <div>
          <img className={style.images} src={car} alt="Golf 6" />
        </div>
      </div>
    </>
  );
};

export default PlanYou;
