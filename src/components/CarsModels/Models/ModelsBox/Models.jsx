import models from "./Models.module.css";
import ModelsBox from "./ModelsBox";
import { cars } from "../../../Js/CarObj/car-info";

const Models = () => {
  console.log();
  return (
    <section className={models.section}>
      <div className={models.container}>
        <div className={models.models_div__box}>
          {cars.map((car) => (
            <ModelsBox key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
