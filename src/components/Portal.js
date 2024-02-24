import { useContext } from "react";
import ReactDOM from "react-dom";
import { PortalContext } from "../context/PortalContext";

const wrapperModal = document.getElementById("modal-root");

function Portal({ children }) {
  const { statePortal } = useContext(PortalContext);

  if (!statePortal.isOpen) return null;
  return ReactDOM.createPortal(children, wrapperModal);
}

export default Portal;
