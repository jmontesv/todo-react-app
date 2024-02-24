import React, { useContext } from "react";
import { PortalContext } from "../context/PortalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Modal({ children }) {
  const { setStatePortal } = useContext(PortalContext);
  const handleCloseClick = () => {
    setStatePortal((prevContent) => {
      return { ...prevContent, isOpen: false };
    });
  };
  return (
    <div className="modal">
      <div className="modal__container">
        <FontAwesomeIcon
          style={{ marginLeft: "auto", marginRight: "5px" }}
          icon={faTimes}
          size="2x"
          color="#9370db"
          cursor="pointer"
          onClick={handleCloseClick}
        />
        {children}
      </div>
    </div>
  );
}
export default Modal;
