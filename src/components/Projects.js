import React from 'react';
import './Projects.css'; 

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>

     
      <div className="project-box">
        <h3>RIT-TPP [Capstone Project]</h3>
        <h4>RIT Training and Placement Portal</h4>
        <p>
        Created a Training and Placement Portal to help the placement, recruitment and preparation process by analyzing student’s resume using AI analyzer.
        This project aims to give students access to a company-wise preparation portal
        which provides them with alumni insights, PYQ’s and company-specific resources.
        </p>
        <div className="screenshot-container">
          <img
            src={require("../assets/Projects/Project1.1.png")}
            alt="Portfolio Website Screenshot"
            className="project-screenshot"
          />
          <img
            src={require("../assets/Projects/Project1.2.png")}
            alt="Portfolio Website Screenshot"
            className="project-screenshot"
          />
          <img
            src={require("../assets/Projects/Project1.3.png")}
            alt="Portfolio Website Screenshot"
            className="project-screenshot"
          />
          <img
            src={require("../assets/Projects/Project1.4.png")}
            alt="Portfolio Website Screenshot"
            className="project-screenshot"
          />
        </div>
        <div className="technologies">
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Cloudinary</li>
          </ul>
        </div>
      </div>

      
      <div className="project-box">
        <h3>Weather Dashboard</h3>
        <a
          href="https://github.com/shreyashsadmek/Weather-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
        <p>
        A weather dashboard that displays current weather conditions, including temperature, humidity, wind speed, and day/night status for any city. It also provides detailed 7-day forecast predictions, helping users plan ahead. Integrated with a weather API for real-time updates, this dashboard offers a seamless and user-friendly experience.
        </p>
        <div className="screenshot-container">
          <img
            src={require("../assets/Projects/Project2.png")}
            alt="Weather Dashboard Screenshot"
            className="project-screenshot"
          />
        </div>
        <div className="technologies">
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>

     
      <div className="project-box">
        <h3>Job Application Landing Page</h3>
        <a
          href="https://github.com/shreyashsadmek/Job-Application-Page"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
        <p>
          This project is a responsive job application landing page designed to deliver a seamless user experience. It includes a navigation bar for easy section access, job listings presented in a card format, within a simple application form.
        </p>
        <div className="screenshot-container">
          <img
            src={require("../assets/Projects/Project3.png")}
            alt="Job Application Screenshot"
            className="project-screenshot"
          />
        </div>
        <div className="technologies">
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>

      
      <div className="project-box">
        <h3>Simple Blog Layout</h3>
        <a
          href="https://github.com/shreyashsadmek/Blog-Layout"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
        <p>
          A blog website where users can read write posts. This project features a single blog post layout with a clean and responsive design.
        </p>
        <div className="screenshot-container">
          <img
            src={require("../assets/Projects/Project4.png")}
            alt="Blog Layout Screenshot"
            className="project-screenshot"
          />
        </div>
        <div className="technologies">
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
