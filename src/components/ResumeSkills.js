import React from 'react';
import './ResumeSkills.css'; 

const ResumeSkills = () => {
  return (
    <div className="resume-skills">
      
      <div className="resume-section">
        <h2>My Resume</h2>
        <a href={require("../assets/Resume/Resume.pdf" )} 
          target="_blank" 
            rel="noopener noreferrer">
        <img src={require("../assets/Resume/Resume.png")} 
          alt="Resume Preview" 
            className="resume-image" />   
        </a>
        <p>Click the image to view/download the full resume.</p>
      </div>

      
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-category">
          <h3>Technical Skills</h3>
          <div className="skills-box">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>Cpp</span>
            <span>Java (Core)</span>
          </div>
        </div>
        <div className="skills-category">
          <h3>Frameworks</h3>
          <div className="skills-box">
            <span>React JS</span>
          </div>
        </div>
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <div className="skills-box">
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Adaptability</span>
            <span>Problem Solving</span>
            <span>Critical Thinking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSkills;
