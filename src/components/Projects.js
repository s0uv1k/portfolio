import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../designs/Hover.css";
import "./ImageCentering.css";
import calculatorImg from "./Pictures/Calculator.png";
import portfolioImg from "./Pictures/Portfolio.png";
import ticTacToeImg from "./Pictures/TicTacToe.png";
import LinkIcon from "@mui/icons-material/Link";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <br />
      <div style={{ marginLeft: "50px" }} data-aos="fade-left">
        <h2 style={{ color: "#c22152" }}>My Projects</h2>
      </div>
      <br />
      <div className="row">
        <div
          className="col-sm-6 py-3 card image-container "
          data-aos="fade-left"
          style={{ width: "20rem", height: "20rem", float: "left" }}
        >
          <img
            className="card-img"
            src={calculatorImg}
            alt=""
            width={300}
            height={300}
          />
          <div className="card-body">
            <h2 className="card-title ">Android Calculator</h2>
            <p className="card-desc">
              A simple Mathematical calculator to calculate normal math problems
              using Java for Android
            </p>
            <a
              className="card-btn"
              href="https://github.com/s0uv1k/calculator.git"
            >
              <LinkIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div
          className="col-lg-5 py-3 mx-4"
          data-aos="fade-left"
          style={{ width: "75%", float: "right" }}
        >
          <h2 data-aos="fade-left" style={{ color: "#e52b50" }}>
            Details
          </h2>
          <br />
          <p data-aos="fade-left" style={{ color: "white", fontSize: 20 }}>
            A Java calculator app designed to effortlessly tackle elementary
            math problems, offering efficient and user-friendly solutions for
            quick calculations, making it ideal for everyday use.
          </p>
          <h4 data-aos="fade-left" style={{ color: "#FDC0D1" }}>
            To see the project hover over the image and click on the link
          </h4>
        </div>
      </div>
      <br />
      <div className="row">
        <div
          className="col-sm-6 py-3 card image-container w-30"
          data-aos="fade-left"
          style={{ width: "20rem", height: "20rem", float: "left" }}
        >
          <img
            className="card-img"
            src={ticTacToeImg}
            alt=""
            width={300}
            height={300}
          />
          <div className="card-body">
            <h2 className="card-title ">Tic-Tac-Toe</h2>
            <p className="card-desc">
              A simple web based game Tic-Tac-Toe to play for fun.
            </p>
            <a
              className="card-btn"
              href="https://github.com/s0uv1k/TicTacToe.git"
            >
              <LinkIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div
          className="col-lg-5 py-3 mx-4"
          data-aos="fade-left"
          style={{ width: "75%", float: "right" }}
        >
          <h2 data-aos="fade-left" style={{ color: "#e52b50" }}>
            Details
          </h2>
          <br />
          <p data-aos="fade-left" style={{ color: "white", fontSize: 20 }}>
            A captivating Tic Tac Toe game crafted using HTML, CSS, and
            JavaScript, providing an engaging two-player experience. Enjoy
            strategic gameplay on a responsive web interface, perfect for
            challenging friends and family!
          </p>
          <h4 data-aos="fade-left" style={{ color: "#FDC0D1" }}>
            To see the project hover over the image and click on the link
          </h4>
        </div>
      </div>
      <br />
      <div className="row">
        <div
          className="col-sm-6 py-3 card image-container w-30"
          data-aos="fade-left"
          style={{ width: "20rem", height: "20rem", float: "left" }}
        >
          <img
            className="card-img"
            src={portfolioImg}
            alt=""
            width={300}
            height={300}
          />
          <div className="card-body">
            <h2 className="card-title ">My Portfolio</h2>
            <p className="card-desc">
              To know about me and my journey from the begining.
            </p>
            <a
              className="card-btn"
              href="https://github.com/s0uv1k/portfolio.git"
            >
              <LinkIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div
          className="col-lg-5 py-3 mx-4"
          data-aos="fade-left"
          style={{ width: "75%", float: "right" }}
        >
          <h2 data-aos="fade-left" style={{ color: "#e52b50" }}>
            Details
          </h2>
          <br />
          <p data-aos="fade-left" style={{ color: "white", fontSize: 20 }}>
            Explore my captivating portfolio website, elegantly designed with
            React.js. Discover my diverse projects, skills, and achievements
            showcased on a user-friendly platform. Engage with a seamless and
            interactive experience that reflects my passion for creativity and
            technology.
          </p>
          <h4 style={{ color: "#FDC0D1" }}>
            To see the project hover over the image and click on the link
          </h4>
        </div>
      </div>
    </>
  );
}
