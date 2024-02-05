import AdditionalForm from "./AdditionalForm/AdditionalForm";
import AdditionalText from "./AdditionalText/AdditionalText";
import additional from "./AdditionalSection.module.css";

const AdditionalSection = () => {
  return (
    <div className={additional.container}>
      <AdditionalText />
      <AdditionalForm />
    </div>
  );
};

export default AdditionalSection;
