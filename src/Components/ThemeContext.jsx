import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default ThemeContext;

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContext.js;
