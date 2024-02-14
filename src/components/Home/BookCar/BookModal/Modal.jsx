import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { useRef } from "react";

const Modal = ({ children, setOpen }) => {
  const modalRef = useRef();

  useOnClickOutside(modalRef, function () {
    document.body.style.overflow = "unset";
    setOpen(false);
  });

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
