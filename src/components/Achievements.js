import React from "react";
import "./Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements-container">
      
      <h2>Technical Achievements</h2>
      <div className="achievement-box">
        <h3>Quantumn 2024</h3>
        <h4>Winners</h4>
        <p>
        Secured first position in Quantum 2024, a college-level event conducted among all final-year students of our college. Our group showcased the project, 'RIT-TPP' (RIT Training and Placement Portal), a platform where college TPOs can post job listings accessible to all students, aiding in their placement preparation. Additionally, the portal provides students with resources such as alumni data, previous years' question papers (PYQs), and a Resume Analyzer. 
        Our project stood out and excelled above all other participants' projects.
        </p>
        <div className="date">Event Date: Oct 2024</div>
      </div>

      <div className="achievement-box">
        <h3>Technosphere 2023</h3>
        <p>
          Volunteered in conducting the Technosphere, a college level event by volutering in various events.
        </p>
        <div className="date">Event Date: Jul 2021</div>
      </div>

      <div className="achievement-box">
        <h3>CSESA Commitee Member</h3>
        <p>
        I am a member of the Computer Science and Engineering Student Association (CSESA), where I am responsible for organizing and overseeing various events conducted by the association. My responsibilities include supervising events managed by the CSESA committee, supporting the committee head and other senior members, and promoting awareness among students to encourage participation in the events.
        </p>
        <div className="date">Date Joined: Sept 2023</div>
      </div>



      <h2>Extracurricular Achievements</h2>
      <div className="achievement-box">
        <h3>NVIDIA CUDA Workshop</h3>
        <p>Attended a two-day NVIDIA CUDA Workshop, where I learned the fundamentals of accelerated computing with CUDA C/C++ and gained valuable insights into CUDA and its various aspects.</p>
        <div className="date">Date Attended: 23 Oct 2024</div>
      </div>
      <div className="achievement-box">
        <h3>Webwizards 2023</h3>
        <p>Participated in WebWizards 2023, a coding event that was part of Technosphere 2023.</p>
        <div className="date">Date Attended: Oct 2023</div>
      </div>
      <div className="achievement-box">
        <h3>Inter-House Debate Competiton</h3>
        <p>Participated in the Inter-House Debate Competition, a school-level event, and competed against other 12th-grade students, securing 3rd position in the competition.</p>
        <div className="date">Date Obtained: Jan 2020</div>
      </div>
      <div className="achievement-box">
        <h3>Inter-House Extempore Competiton</h3>
        <p>Participated in the Inter-House Extempore Competition, a school-level event, and competed against other 11th-grade students.</p>
        <div className="date">Date Obtained: Dec 2019</div>
      </div>

      <div className="achievement-box">
        <h3>Inter-House Volleyball Competiton</h3>
        <p>
        Participated in the Inter-House Volleyball Competition, a school-level event, and competed against other 10th-grade students, where our team was judged as runners-up.
        </p>
        <div className="date">Date Obtained: Sept 2017</div>
      </div>

      <div className="achievement-box">
        <h3>Inter-House Basketball Competiton</h3>
        <p>
        Participated in the Inter-House Basketball Competition, a school-level event, and competed against other 9th-grade students, where our team was judged as runners-up.
        </p>
        <div className="date">Date Obtained: Feb 2017</div>
      </div>

    </div>
  );
};

export default Achievements;
