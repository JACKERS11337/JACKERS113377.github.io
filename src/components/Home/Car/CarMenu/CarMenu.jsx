import { useState } from "react";
import Button from "../../../UI/buttons/Button";
import VehicleModels from "../VehicleModels/VehicleModels";
import { cars as adCars } from "../../../Js/CarObj/car-info";
import VehicleStats from "../VehicleStats/VehicleStats";
import styled from "./CarMenu.module.css";
import CarTittle from "../CarTittle/CarTittle";

const CarMenu = () => {
  const [car, setCar] = useState(adCars[0]);

  function carClick(obj) {
    setCar(obj);
  }

  return (
    <>
      <div>
        <CarTittle />
        <div className={styled.wrapper}>
          <div className={styled.menu}>
            <Button onClick={() => carClick(adCars[0])}>BMW 5-Series</Button>
            <Button onClick={() => carClick(adCars[1])}>Audi Q7 </Button>
            <Button onClick={() => carClick(adCars[2])}>Toyota Camry</Button>
            <Button onClick={() => carClick(adCars[3])}>VW Golf 6</Button>
            <Button onClick={() => carClick(adCars[4])}>
              Mercedes-Benz GLK
            </Button>
            <Button onClick={() => carClick(adCars[5])}>Porsche 911</Button>
          </div>
          <div className={styled.models}>
            <VehicleModels car={car} />
          </div>
          <div>
            <VehicleStats car={car} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarMenu;
