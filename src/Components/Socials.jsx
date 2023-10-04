import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import s from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={s.container}>
      <a
        className={s.social}
        href="https://www.linkedin.com/in/aurelie-demure/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        className={s.social}
        href="https://github.com/lilipix"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a className={s.social} href="mailto:aurelie.demure.ad@gmail.com">
        <LuMail />
      </a>
    </div>
  );
};

export default Socials;
