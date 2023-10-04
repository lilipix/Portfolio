import s from "./Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "./ThemeContext";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const lightMode = useTheme();
  const form = useRef();
  AOS.init();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <div id="contact" className={s.contact}>
      <h1 className={s.title} data-aos="fadeIn" data-aos-duration="500">
        Contact
      </h1>
      <div className={s.form_container}>
        <form
          className={!lightMode ? s.form : s.form_light}
          ref={form}
          onSubmit={sendEmail}
        >
          <label
            htmlFor="firstname"
            className={!lightMode ? s.label : s.label_light}
          >
            Firstname
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your firstname"
            required="required"
            className={s.input}
          ></input>
          <label
            htmlFor="lastname"
            className={!lightMode ? s.label : s.label_light}
          >
            Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter your name"
            required="required"
            className={s.input}
          ></input>
          <label
            htmlFor="email"
            className={!lightMode ? s.label : s.label_light}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className={s.input}
          ></input>
          <label
            htmlFor="message"
            className={!lightMode ? s.label : s.label_light}
          >
            Message
          </label>
          <textarea
            type="textarea"
            id="message"
            name="message"
            placeholder="Enter your message"
            required="required"
            rows="12"
            className={s.textarea}
          ></textarea>

          <button type="submit" className={s.send}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
