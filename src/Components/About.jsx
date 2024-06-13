import s from "./About.module.css";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoTriangle } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";

import { BsGit } from "react-icons/bs";
import cv from "./../assets/aurelie_demure_cv.pdf";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTheme } from "./Context/theme-hook";

const About = () => {
  const { lightMode } = useTheme();
  // permet d'animer animate css au scroll
  AOS.init();

  return (
    <div id="about" className={s.container}>
      <h1 className={s.title} data-aos="fadeIn" data-aos-duration="500">
        About
      </h1>

      <div className={s.about}>
        <div>
          <div
            className={
              !lightMode
                ? s.description_container
                : s.description_container_light
            }
          >
            <h3 className={!lightMode ? s.paragraph : s.paragraph_light}>
              Who am I?
            </h3>
            <p className={!lightMode ? s.description : s.description_light}>
              I am a passionate and committed web developer. Nurse during
              several years I developed adaptive organizational relational and
              teamwork skills. <br /> <br />
              After obtaining my professional DWWM title, I completed a 6-month
              internship with a freelancer and worked on the development of
              management software. I developed several full stack features.{" "}
              <br /> <br />
              I am available to join a dynamic team!
              <br /> <br /> Do not hesitate to contact me! <br /> <br />
            </p>
          </div>
        </div>
        <div>
          <div className={s.skills_container}>
            <div
              className={
                !lightMode
                  ? s.description_container
                  : s.description_container_light
              }
            >
              <h3 className={!lightMode ? s.paragraph : s.paragraph_light}>
                Soft Skills
              </h3>
              <ul
                className={`${
                  !lightMode ? s.description : s.description_light
                } ${s.scontainer} ${s.soft}`}
              >
                <li>Team spirit</li>
                <li>Organization</li>
                <li>Perseverance</li>
                <li>Conciliatory</li>
                <li>Facilitator</li>
                <li>Open mind</li>
              </ul>
            </div>
            <div
              className={
                !lightMode
                  ? s.description_container
                  : s.description_container_light
              }
            >
              <div className={s.skills}>
                <h3 className={!lightMode ? s.paragraph : s.paragraph_light}>
                  Hard Skills
                </h3>

                <div
                  className={`${
                    !lightMode ? s.description : s.description_light
                  } ${s.scontainer}`}
                >
                  <div className={s.front_end}>
                    <ul className={s.skills_detail}>
                      <li>
                        <span className={s.skills_icon}>
                          <IoLogoHtml5 />
                        </span>{" "}
                        HTML
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <IoLogoCss3 />
                        </span>
                        CSS
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <IoLogoJavascript />
                        </span>{" "}
                        JavaScript
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <BiLogoTypescript />
                        </span>{" "}
                        TypeScript
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <FaReact />
                        </span>{" "}
                        React JS
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <IoTriangle />
                        </span>{" "}
                        Next JS
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <DiScrum />
                        </span>{" "}
                        Agile/Scrum
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <span className={s.skills_icon}>
                          <IoLogoNodejs />
                        </span>{" "}
                        Node JS
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <SiExpress />
                        </span>{" "}
                        Express
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <TbApi />
                        </span>{" "}
                        API Rest
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <SiMysql />
                        </span>{" "}
                        MySQL
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <BiLogoMongodb />
                        </span>{" "}
                        Mongodb
                      </li>
                      <li>
                        <span className={s.skills_icon}>
                          <BsGit />
                          <FaGithub />
                        </span>{" "}
                        Git/GitHub
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.button}>
        <a href={cv} download target="_blank" rel="noreferrer">
          <button className={!lightMode ? s.resume : s.resume_light}>
            Download my resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
