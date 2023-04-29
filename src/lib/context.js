import React from "react";

export const CursorContext = React.createContext({
  isHoveringLink: false,
  setHoveringLink: () => {},
  isHoveringText: false,
  setHoveringText: () => {},
  isHoveringLogo: false,
  setHoveringLogo: () => {},
  isHoveringImage: false,
  setHoveringImage: () => {},
});

export const ThemeContext = React.createContext({
  mode: "dark",
  toggleTheme: () => {},
});
