import { createContext,  useState } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContext.js;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

