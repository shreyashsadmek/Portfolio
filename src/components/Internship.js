import React from 'react';
import "./Internship.css";

const internship1 = require("../assets/Internship/SangliSoftware.pdf");
const internship2 = require("../assets/Internship/NativeSoftTech.pdf");

const internships = [
  {
    name: "Software Intern",
    company: "Sangli Software",
    role: "Junior Software Intern",
    startDate: "January 2025",
    duration: "6 months",
    description: "Working on developing and optimizing Sotware technologies.",
    technologies: "React.js, CSS, REST API, Git",
    offerLetter: internship1,
  },
  {
    name: "Web Development Intern",
    company: "Native Soft-Tech",
    role: "Web Development Intern",
    startDate: "Feb 2025",
    duration: "1 month",
    description: "Gaining hands-on experience in web development by working with frontend and backend technologies.",
    technologies: "HTML, CSS, JavaScript, Node.js, MongoDB",
    offerLetter: internship2,
  }
];

const Internship = () => {
  return (
    <div className="internship-section">

      <h2>
        Professional Experience
        </h2>

      <h3>
        Internships
        </h3>

      <div className="internship-container">

        {internships.map((intern, index) => (
          <div className="internship-box" key={index}>
            <h4>
                {intern.name} 
                </h4>

            <h4>
                {intern.company}
                </h4>
            <p>
                <strong>Role:</strong> {intern.role}
                </p>

            <p>
                <strong>Start Date:</strong> {intern.startDate}
                </p>
            <p>
                <strong>Duration:</strong> {intern.duration}
                </p>
            <p className="intern-description">
                {intern.description}
                </p>
            {/* <p>
                <strong>Technologies Used:</strong> {intern.technologies}
                </p> */}

            <a 
            href={intern.offerLetter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="offer-link">View Offer Letter
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
