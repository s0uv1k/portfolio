import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import SouvikSarkarResume from "./pdf/Souvik_Sarkar_Resume.pdf";

export default function footer() {
  const handleDownload = () => {
    // Replace the 'resume.pdf' with the actual filename and path of your resume
    const fileUrl = SouvikSarkarResume;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf";
    link.click();
  };
  return (
    <body style={{overflowX: 'hidden', backgroundColor: 'black'}}>
      <footer className="bd-footer py-5 mt-5 bg-dark">
        <div className="container py-2">
          <div class="row">
            <div className="col-lg-3 mb-3">
              <h5 style={{ color: "white" }}>Connect with me </h5>
              <a href="https://www.facebook.com/souvik.sarkar.56884761?mibextid=ZbWKwL">
                <FacebookOutlinedIcon fontSize="large" />
              </a>
              <a href="https://www.linkedin.com/in/souvik-sarkar-831278188">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="https://instagram.com/photocopies.by.souvik?igshid=NGExMmI2YTkyZg==">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="https://github.com/s0uv1k">
                <GitHubIcon fontSize="large" />
              </a>
            </div>

            <div className=" col-lg-2 offset-lg-1 mb-3">
              <h5 style={{ color: "white" }}>Find Here </h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="/Home">Home</a>
                </li>
                <li class="mb-2">
                  <a href="/Skills">Skill</a>
                </li>
                <li class="mb-2">
                  <a href="/Education">Education</a>
                </li>
                <li class="mb-2">
                  <a href="/Projects">Projects</a>
                </li>
                <li class="mb-2">
                  <a href="/ContactMe">Contact me</a>
                </li>
              </ul>
            </div>
            <div className=" col-lg-2 offset-lg-1 mb-3">
              <h5 style={{ color: "white" }}>My Resume </h5>
              <button
                onClick={handleDownload}
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  borderColor: "transparent",
                  marginTop: "10px",
                  whiteSpace: 'nowrap',
                  backgroundColor: "#c22152",
                  color: "white",
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
