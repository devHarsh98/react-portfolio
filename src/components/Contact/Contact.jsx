import React from "react";
import { FiMail } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="paddings innerWidth contact-wrapper" id="Contact">
      <div className="contact-container">
        <div className="contact-title">
          <h3 className="heading">CONTACT</h3>
        </div>
        <div className="container-contact">
          <div className="left">
            <p className="  para secondaryText">
              Feel free to reach out for
              <strong style={{ color: "black" }}> job opportunities</strong> as
              I'm a recent graduate looking for oppurtunities, or any inquiries
              related to my work. I'm excited to connect with fellow
              professionals in Web Technologies.
            </p>
          </div>
          <div className="email para ">
            <div className="mail">
              <FiMail stroke="blue" />
              Mail
            </div>
            <div className="mailId">
              <p>harshniet16@gmail.com</p>
            </div>
            <button>
              <a
                href="mailto:harshniet16@gmail.com"
                className="contact-button"
              >
                {" "}
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="copyrights secondaryText">
        &copy; 2023 Harsh Kumar
      </div>
    </section>
  );
};

export default Contact;
