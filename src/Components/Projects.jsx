import s from "./Projects.module.css";
import { useState } from "react";
import Modal from "./Modal";
import datas from "../datas";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTheme } from "./Context/theme-hook";

const Projects = () => {
  AOS.init();
  const { lightMode } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (images) => {
    setModalContent(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div id="projects" className={s.projects}>
      <h1 className={s.title} data-aos="fadeIn" data-aos-duration="500">
        Projects
      </h1>
      <div className={s.project_container}>
        {[...datas].reverse().map((data) => (
          <div
            key={data.id}
            className={`${!lightMode ? s.project_card : s.project_card_light} ${
              data.id === 4 ? s.landscape : ""
            }`}
          >
            <img
              src={data.image}
              alt={data.description}
              className={`${s.image} ${data.id === 4 ? s.landscape_image : ""}`}
            />
            <div
              className={`${!lightMode ? s.text : s.text_light} ${
                data.id === 4 ? s.landscape_text : ""
              }`}
            >
              <div>
                    <p className={s.description}>{data.description}</p>
                    {data.team && (
                      <>
                    <p>
                      <strong>Team :</strong>{" "}
                      <span className={s.color}>{data.team}</span>
                    </p>
                  </>
                ) }
                <p>
                  <strong>Technologies used :</strong> <br />
                  <span className={!lightMode ? s.color : s.color_light}>
                    {data.tech}
                  </span>
                </p>
              </div>
              <div className={s.link_container}>
                {data.linkGit && (
                  <a
                    href={data.linkGit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!lightMode ? s.link : s.link_light}
                  >
                    GitHub
                  </a>
                )}
                {data.linkWebsite && (
                  <a
                    href={data.linkWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!lightMode ? s.link : s.link_light}
                  >
                    Site Web
                  </a>
                )}

                {data.seeMore && (
                  <button
                    onClick={() => openModal(data.seeMore)}
                    className={`${!lightMode ? s.link : s.link_light} ${
                      data.id === 4 ? s.landscape_link : ""
                    }`}
                  >
                    See more
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Projects;
