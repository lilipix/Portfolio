import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Menu from "./Components/Menu";
import { useTheme } from "./Components/ThemeContext";
// import { BsMoonStarsFill } from "react-icons/bs";
// import { BsSun } from "react-icons/bs";
import { useEffect } from "react";

function App() {
  const { lightMode, setLightMode } = useTheme();

  useEffect(() => {
    document.body.className = lightMode ? "light" : "dark";
  }, [lightMode]);

  return (
    <>
      <div>
        <Menu />
      </div>

      <div>
        <Home id="home" lightMode={lightMode} setLightMode={setLightMode} />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </>
  );
}

export default App;
