import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Menu from "./Components/Menu";
import { useEffect } from "react";
import { useTheme } from './Components/Context/theme-hook';

function App() {
  const { lightMode, setLightMode } = useTheme();

  useEffect(() => {
    document.body.className = lightMode ? "light" : "dark";
  }, [lightMode]);

  return (
    <>
        <Menu />
        <Home id="home" lightMode={lightMode} setLightMode={setLightMode} />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
    </>
  );
}

export default App;
