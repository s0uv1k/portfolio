import React, { useEffect } from "react";

import img1 from "./icons/me.jpg";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  //const myDetail = useDetails()
  return (
    <>
      <br />
      <div
        className="container"
        data-aos="fade-left"
        style={{ color: "white" }}
      >
        <div>
          <h3 data-aos="fade-left">Hi</h3>
        </div>
        <div>
          <h2 data-aos="fade-left">I'm Souvik Sarkar</h2>
        </div>
        <div>
          <h3 data-aos="fade-left" style={{ color: "s#fa6e9f" }}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "App Developer",
                1000,
                "Content Writer",
                1000,
                "Editor",
                1000,
              ]}
              wrapper="h3"
              speed={200}
              style={{
                fontSize: "2em",
                color: "#fa6e9f",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h3>
        </div>
      </div>
      <div className="container" data-aos="fade-left">
        <div className="row">
          <div
            className="col py-3"
            data-aos="fade-left"
            style={{ float: "left", width: "100%" }}
          >
            <img src={img1} alt="" width={380} height={512} />
          </div>
          <div
            className="col"
            data-aos="fade-left"
            style={{ float: "right", width: "100%" }}
          >
            <h1 data-aos="fade-left" style={{ color: "#de6262" }}>
              About me{" "}
            </h1>
            <p data-aos="fade-left" style={{ color: "white", fontSize: 25 }}>
              I am 21 years old and am studying Information Technology at the
              Guru Nanak Institute of Technology.{" "}
            </p>
            <br />
            <h1 data-aos="fade-left" style={{ color: "#de6262" }}>
              My Home town{" "}
            </h1>
            <iframe
              title="My Home Town"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29418.465523341634!2d88.37172485794882!3d22.828084625838365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f890c0621fafd1%3A0xd3e5a3c0109745c1!2sShyamnagar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1689913651802!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
            <br />
            <h1 data-aos="fade-left" style={{ color: "#de6262" }}>
              My Hobby{" "}
            </h1>
            <ul data-aos="fade-left" style={{ color: "white", fontSize: 18 }}>
              <li data-aos="fade-left">Singing</li>
              <li data-aos="fade-left">Playing Guitar</li>
              <li data-aos="fade-left">Listen to stories</li>
              <li data-aos="fade-left">
                Explore new street food carts or cafes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
