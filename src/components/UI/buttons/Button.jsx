import styled from "./Button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styled.button}>
      {children}
    </button>
  );
};

export default Button;
