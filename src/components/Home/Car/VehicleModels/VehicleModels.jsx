import styles from "./VehicleModels.module.css";

const VehicleModels = ({ car }) => {
  console.log(car.images);
  return (
    <>
      <img className={styles.images} src={car.images} alt="" />
    </>
  );
};

export default VehicleModels;
