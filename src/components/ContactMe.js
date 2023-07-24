import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import "../designs/Form.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ocauwlv",
        "template_qrz22lq",
        form.current,
        "DQ4G4DgvjdX1hnbeb"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container" style={{ color: "white" }}>
        <div className="container" data-aos="fade-left">
          <h2 data-aos="fade-left" style={{ color: "#c22152" }}>
            Contact Us
          </h2>
          <p data-aos="fade-left">
            If you want to connect with me feel free to contact. Here are my
            contact details.{" "}
          </p>
        </div>
      </div>
      <div className="container" data-aos="fade-left">
        <form
          className="container"
          data-aos="fade-left"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className=" container row" data-aos="fade-left">
            <div className="col-sm-6" style={{ float: "left" }}>
              <div className="contact-form" data-aos="fade-left">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  data-aos="fade-left"
                />
              </div>

              <div className="contact-form" data-aos="fade-left">
                <input
                  type="E-mail"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  data-aos="fade-left"
                />
              </div>
              <div className="contact-form" data-aos="fade-left">
                <textarea
                  name="message"
                  placeholder="Your message here"
                  data-aos="fade-left"
                ></textarea>
              </div>

              <div className="contact-form" data-aos="fade-left">
                <input
                  type="submit"
                  name="submit"
                  value="Send"
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div
              className="col-sm-6"
              data-aos="fade-left"
              style={{ color: "white", float: "right" }}
            >
              <div className="text">
                <LocationOnIcon
                  fontSize="large"
                  className="icon"
                  data-aos="fade-left"
                />
                <br />
                <h3 data-aos="fade-left">Address</h3>
                <p data-aos="fade-left">1 no Gurdaha, Shyamnagar</p>
              </div>
              <div className="text" data-aos="fade-left">
                <EmailIcon
                  fontSize="large"
                  className="icon"
                  data-aos="fade-left"
                />
                <br />
                <h3 data-aos="fade-left">Email</h3>
                <p data-aos="fade-left">souvik.sar123@gmail.com</p>
              </div>
              <div className="text" data-aos="fade-left">
                <PhoneAndroidIcon
                  fontSize="large"
                  className="icon"
                  data-aos="fade-left"
                />
                <br />
                <h3 data-aos="fade-left">Phone</h3>
                <p data-aos="fade-left">+91 9831885231</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
