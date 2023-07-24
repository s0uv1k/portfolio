import React, { useEffect } from "react";
import "./ImageCentering.css";
import kantichandraImg from "./Pictures/kantichandra.jpeg";
import sitanathImg from "./Pictures/sitanath.jpeg";
import gnitImg from "./Pictures/gnit.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Education() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <br />
      <div className="container" data-aos="fade-left">
        <h2 style={{ color: "#c22152" }}>My Education</h2>
      </div>
      <br />
      <div className="container" data-aos="fade-left">
        <div className="row">
          <h3 data-aos="fade-left" style={{ color: "#de6262" }}>
            Collage
          </h3>
          <div
            className="col-lg-6 py-3"
            data-aos="fade-left"
            style={{ float: "Left" }}
          >
            <p style={{ color: "white", fontSize: "20" }}>
              Currently I am persuing my B.Tech degree from Guru Nanak Institute
              of Technology, Sodepore.
            </p>
            <span style={{ color: "#C70039 ", fontWeight: "bold" }}>
              Marks:{" "}
            </span>
            <span style={{ color: "white" }}> 9.29[upto 5th sem]</span>
            <p style={{ color: "#C70039", fontSize: 24 }}>2020 - Present</p>
          </div>
          <div
            className="col-lg-6 py-3 image-container"
            data-aos="fade-left"
            style={{ float: "right" }}
          >
            <img src={gnitImg} alt="Hi" width={380} height={260} />
          </div>
        </div>
      </div>
      <br />
      <div className="container" data-aos="fade-left">
        <div className="row">
          <h3 data-aos="fade-left" style={{ color: "#de6262" }}>
            Higher Secodary
          </h3>
          <div
            className="col-lg-6 py-3 image-container"
            data-aos="fade-left"
            style={{ float: "left" }}
          >
            <img src={kantichandraImg} alt="Hi" width={380} height={260} />
          </div>
          <div
            className="col-lg-6 py-3"
            data-aos="fade-left"
            style={{ float: "right" }}
          >
            <p style={{ color: "white", fontSize: "20" }}>
              I completed my higher secondary education from Shyamnagar Kanti
              Chandra High School, Shyamnagar
            </p>
            <span style={{ color: "#C70039 ", fontWeight: "bold" }}>
              Marks:{" "}
            </span>
            <span style={{ color: "white" }}> 72.8%</span>
            <p style={{ color: "#C70039", fontSize: 24 }}>2017 - 2019</p>
          </div>
        </div>
      </div>
      <br />
      <div className="container" data-aos="fade-left">
        <div className="row">
          <h3 data-aos="fade-left" style={{ color: "#de6262" }}>
            School
          </h3>
          <div
            className="col-lg-6 py-3"
            data-aos="fade-left"
            style={{ float: "Left" }}
          >
            <p style={{ color: "white", fontSize: "20" }}>
              I completed my higher secondary education from Mulajore Sitanath
              Pathsala, Shyamnagar.
            </p>
            <span style={{ color: "#C70039 ", fontWeight: "bold" }}>
              Marks:{" "}
            </span>
            <span style={{ color: "white" }}> 76.71%</span>
            <p style={{ color: "#C70039", fontSize: 24 }}>2013 - 2017</p>
          </div>
          <div
            className="col-lg-6 py-3 image-container"
            data-aos="fade-left"
            style={{ float: "right" }}
          >
            <img src={sitanathImg} alt="Hi" width={380} height={260} />
          </div>
        </div>
      </div>
    </>
  );
}
