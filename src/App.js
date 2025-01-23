import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Education from "./components/Education";
import ResumeSkills from "./components/ResumeSkills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import MoreAboutMe from "./components/MoreAboutMe";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("");

  const togglePage = (page) => {
    setCurrentPage((prevPage) => (prevPage === page ? "" : page));
  };

  return (
    <Router>
      <div className="app">
        
        <header className="main-header">
          <div className="contact-info">
            <a
              href="https://www.linkedin.com/in/shreyash-sadmek-677372202/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/shreyashsadmek"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:shreyashsadmek@gmail.com">
              shreyashsadmek@gmail.com
            </a>
            <a className="phone" href="tel:+918767535837">
              Phone: +91-8767535837
            </a>
          </div>
        </header>

        
        <div className="home">
          <div className="profile-container">
            <img
              src={require('./assets/Profile/profile.jpeg')}
              alt="Profile"
              className="profile-pic"
            />
            <h1>SHREYASH SADMEK</h1>
            <p className="tagline">Frontend Developer | Tech Enthusiast</p>
          </div>
          <div className="about">
            <h2>About Me</h2>
            <p>
              Hello! I'm a frontend developer with a strong focus on building
              intuitive and visually appealing websites.
            </p>
            <p>
              As a student, I continuously seek opportunities to expand my
              technical expertise.
            </p>
            <p>I am always eager to embrace new challenges and and learn about new technologies.</p>
          </div>
        </div>

        
        <div className="boxes">
          <button
            className="box"
            onClick={() => togglePage("education")}
          >
            Education
          </button>
          <button
            className="box"
            onClick={() => togglePage("resume-skills")}
          >
            Resume and Skills
          </button>
          <button
            className="box"
            onClick={() => togglePage("projects")}
          >
            Projects
          </button>
          <button
            className="box"
            onClick={() => togglePage("certifications")}
          >
            Certifications
          </button>
          <button
            className="box"
            onClick={() => togglePage("achievements")}
          >
            Achievements
          </button>
          <button
            className="box"
            onClick={()=> togglePage("moreAboutMe")}
          >  
            More About Me
          </button>
        </div>

        
        <div className="dynamic-content">
          {currentPage === "education" && <Education />}
          {currentPage === "resume-skills" && <ResumeSkills />}
          {currentPage === "projects" && <Projects />}
          {currentPage === "certifications" && <Certifications />}
          {currentPage === "achievements" && <Achievements />}
          {currentPage === "moreAboutMe" && <MoreAboutMe />}
        </div>

        
        <footer className="footer">
          <p>
            ©  2025  Shreyash Sadmek  |  shreyashsadmek@gmail.com |  +91 8767535837
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
