import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bdcjdbb",
        "template_t9ld158",
        form.current,
        "tl2c6O1EiyzLeV9FC"
      )
      .then(
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
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kklakalk@mgmail.lv</h5>
            <a href="mailto:kklakalk@mgmail.lv" target="_blank">
              Send a message!
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Kristaaaaps</h5>
            <a href="https://m.me/kristaps.kalnins.33" target="_blank">
              Send a message!
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+371828328283</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+37128881842"
              target="_blank"
            >
              Send a message!
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="email here" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Text here"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
