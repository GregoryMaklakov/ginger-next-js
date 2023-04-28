import React from "react";

export const CursorContext = React.createContext({
  isHoveringLink: false,
  setHoveringLink: () => {},
  isHoveringText: false,
  setHoveringText: () => {},
});
