import s from "./Menu.module.css";
import { useState } from "react";

const Menu = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    // pour supprimer le scroll vertical du menu
    const body = document.body;
    if (!showLinks) {
      body.classList.add(s.no_scroll);
    } else {
      body.classList.remove(s.no_scroll);
    }

    setShowLinks(!showLinks);
  };

  return (
    <div>
      <nav className={`${s.navbar} ${showLinks ? s.show : s.hide}`}>
        <button className={s.burger} onClick={handleShowLinks}>
          <span className={s.burger_line}></span>
        </button>

        <ul className={s.navbar_links}>
          <li className={s.navbar_item}>
            <a href="#home" onClick={handleShowLinks} className={s.item}>
              Home
            </a>
          </li>
          <li className={s.navbar_item}>
            <a href="#about" onClick={handleShowLinks} className={s.item}>
              About
            </a>
          </li>
          <li className={s.navbar_item}>
            <a href="#projects" onClick={handleShowLinks} className={s.item}>
              Projects
            </a>
          </li>
          <li className={s.navbar_item}>
            <a href="#contact" onClick={handleShowLinks} className={s.item}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
