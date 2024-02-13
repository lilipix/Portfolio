import { useTheme } from './Context/theme-hook';
import s from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ content, onClose }) => {
  const { lightMode } = useTheme();

  //close modal when click outside
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.modal_background} onClick={handleBackgroundClick}>
      <div className={!lightMode ? s.modal_content_dark : s.modal_content}>
        <div className={s.scroll}>
          <div className={s.image_content}>
            {content.map((img, index) => (
              <img
                key={index}
                src={img}
                className={s.image}
                alt="pictures of website"
              />
            ))}
          </div>
        </div>
        <div className={s.button}>
          <button onClick={onClose} className={s.close}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
