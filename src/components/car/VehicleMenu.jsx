import Button from "../UI/buttons/Button";

const VehicleMenu = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button>Audi RS6 S-Line</Button>
        <Button>VW Golf 6</Button>
        <Button>Toyota Camry</Button>
        <Button>BMW 530d</Button>
        <Button>Mercedes-Benz GLK</Button>
      </div>
    </>
  );
};

export default VehicleMenu;
