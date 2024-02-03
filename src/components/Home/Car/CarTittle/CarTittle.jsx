import styled from "./CarTittle.module.css";

const CarTittle = () => {
  return (
    <section className={styled.section}>
      <h3 className={styled.h3}>Vehicle Models</h3>
      <h1 className={styled.h1}>Our rental fleet</h1>
      <p className={styled.p}>
        Choose from a variety of our amazing vehicles to rent your next <br />
        adventure or business trip
      </p>
    </section>
  );
};

export default CarTittle;
