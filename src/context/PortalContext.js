import React, { useState } from "react";

export const PortalContext = React.createContext();

const initialValue = {
  isOpen: false,
  content: null,
};
function ContextPortal({ children }) {
  const [statePortal, setStatePortal] = useState(initialValue);

  const exposedData = {
    statePortal,
    setStatePortal,
  };

  return <PortalContext.Provider value={exposedData}>{children}</PortalContext.Provider>;
}
export default ContextPortal;
