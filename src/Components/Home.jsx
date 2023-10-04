import s from "./Home.module.css";
import picture from "../assets/picture.png";
import Socials from "./Socials";
import "animate.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import PropTypes from "prop-types";

const Home = ({ lightMode, setLightMode }) => {
  return (
    <>
      <div id="home" className={s.home}>
        <div>
          <BsMoonStarsFill
            onClick={() => setLightMode(false)}
            style={{ display: lightMode ? "inline" : "none" }}
            className={lightMode ? "moon" : ""}
          />
          <BsSun
            onClick={() => setLightMode(true)}
            style={{
              display: lightMode ? "none" : "inline",
            }}
            className={!lightMode ? "sun" : ""}
          />
        </div>

        <div className={s.welcome}>
          <div
            className={`${s.title_container} animate__animated animate__fadeInLeftBig`}
          >
            <div className={s.title}>
              <h1 className={s.name}>
                aurelie <br /> demure
              </h1>
              <h1 className={s.job}>
                fullstack <br />
                developper
              </h1>
            </div>
            <div className={s.picture}>
              <img className={s.profile} src={picture} alt="profilPicture" />
            </div>
          </div>

          <div className={s.socials}>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  lightMode: PropTypes.string.isRequired,
  setLightMode: PropTypes.string.isRequired,
};

export default Home;
