import React, { useEffect } from "react";
import ProgressBar from "../designs/ProgressBar";
import webDevImg from "./Pictures/WebDevelopment.png";
import appDevImg from "./Pictures/appDevelopment.jpg";
import programmingImg from "./Pictures/programming.png";
import softSkillingImg from "./Pictures/softSkill.jpeg";
import "./ImageCentering.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <br />
      <div className="container" data-aos="fade-left">
        <h2 style={{ color: "#c22152" }}>My skills</h2>
      </div>
      <br />
      <div className="container" data-aos="fade-left">
        <div className="row">
          <h3 style={{ color: "#de6262" }}>Web Development</h3>
          <div className="col-lg-6 py-3" style={{ float: "Left" }}>
            <ul style={{ color: "white" }}>
              <li data-aos="fade-left">
                <h4>HTML</h4>
                <ProgressBar percentage={75}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>CSS</h4>
                <ProgressBar percentage={70}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>JavaScript</h4>
                <ProgressBar percentage={75}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>React JS</h4>
                <ProgressBar percentage={60}></ProgressBar>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 py-3 image-container"
            data-aos="fade-left"
            style={{ float: "right" }}
          >
            <img src={webDevImg} alt="" width={380} height={260} />
          </div>
        </div>
      </div>
      <br />
      <div className="container" data-aos="fade-left">
        <div className="row">
          <h3 style={{ color: "#de6262", textAlign: "right" }}>
            App Development
          </h3>
          <div
            className="col-lg-6 py-3 image-container"
            data-aos="fade-left"
            style={{ float: "left" }}
          >
            <img src={appDevImg} alt="" width={380} height={260} />
          </div>
          <div
            className="col-lg-6 py-3"
            data-aos="fade-left"
            style={{ float: "Right" }}
          >
            <ul style={{ color: "white" }}>
              <li data-aos="fade-left">
                <h4>Java</h4>
                <ProgressBar percentage={80}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>Kotlin</h4>
                <ProgressBar percentage={70}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>Flutter</h4>
                <ProgressBar percentage={70}></ProgressBar>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="container" data-aos="fade-left">
        <div className="row">
          <h3 data-aos="fade-left" style={{ color: "#de6262" }}>
            Programming Language
          </h3>
          <div
            className="col-lg-6 py-3"
            data-aos="fade-left"
            style={{ float: "Left" }}
          >
            <ul style={{ color: "white" }}>
              <li data-aos="fade-left">
                <h4>C</h4>
                <ProgressBar percentage={80}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>Java</h4>
                <ProgressBar percentage={75}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>Python</h4>
                <ProgressBar percentage={80}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>C++</h4>
                <ProgressBar percentage={50}></ProgressBar>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 py-3 image-container"
            data-aos="fade-left"
            style={{ float: "right" }}
          >
            <img src={programmingImg} alt="" width={380} height={260} />
          </div>
        </div>
      </div>
      <br />
      <div className="container" data-aos="fade-left">
        <div className="row">
          <h3
            data-aos="fade-left"
            style={{ color: "#de6262", textAlign: "right" }}
          >
            Soft Skills
          </h3>
          <div
            className="col-lg-6 py-3 image-container"
            data-aos="fade-left"
            style={{ float: "left" }}
          >
            <img src={softSkillingImg} alt="" width={380} height={260} />
          </div>
          <div
            className="col-lg-6 py-3"
            data-aos="fade-left"
            style={{ float: "Right" }}
          >
            <ul style={{ color: "white" }}>
              <li data-aos="fade-left">
                <h4>English</h4>
                <ProgressBar percentage={85}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>Bengali</h4>
                <ProgressBar percentage={90}></ProgressBar>
              </li>
              <br />
              <li data-aos="fade-left">
                <h4>Hindi</h4>
                <ProgressBar percentage={80}></ProgressBar>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
