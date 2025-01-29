import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <div className="certifications-section">
      
      <div className="certificate-box">
        <h3 className="certificate-title">Quantumn 2k24</h3>
        <img src={require('../assets/Certificates/Quantum.jpg')}
        alt="Quantum Certificate" className="certificate-image" />
        <div className="certificate-details">
          <p className="date-obtained">Date Obtained: <span>28 Oct 2024</span></p>
        </div>
      </div>

      <div className="certificate-box">
        <h3 className="certificate-title">Responsive Web-Design, freeCodeCamp</h3>
        <img src={require('../assets/Certificates/FreeCodeCampWebDesign.jpg')}
        alt="Web-Design Certificate" className="certificate-image" />
        <div className="certificate-details">
          <p className="date-obtained">Date Obtained: <span>26 Jan 2025</span></p>
        </div>
      </div>

      <div className="certificate-box">
        <h3 className="certificate-title">NVIDIA Accelerated Computing with CUDA C/C++</h3>
        <img src={require('../assets/Certificates/CUDA.jpg')}
        alt="CUDA" className="certificate-image" />
        <div className="certificate-details">
          <p className="date-obtained">Date Obtained: <span>24 Oct 2024</span></p>
        </div>
      </div>

      
      <div className="certificate-box">
        <h3 className="certificate-title">JavaScript(Basic) Certificate, HackerRank</h3>
        <img src={require('../assets/Certificates/JS-HR.jpg')}
        alt="JS-HR" className="certificate-image" />
        <div className="certificate-details">
          <p className="date-obtained">Date Obtained: <span>20 Dec 2024</span></p>
        </div>
      </div>

      
      <div className="certificate-box">
        <h3 className="certificate-title">SQL(Basic) Certificate, HackerRank</h3>
        <img src={require('../assets/Certificates/SQL-HR.jpg')} 
        alt="SQL-HR" className="certificate-image" />
        <div className="certificate-details">
          <p className="date-obtained">Date Obtained: <span>14 Nov 2024</span></p>
        </div>
      </div>

      
      <div className="certificate-box">
        <h3 className="certificate-title">Database and SQL, Infosys Springboard</h3>
        <img src={require('../assets/Certificates/SQL-Info.jpg')} 
        alt="SQL-Info" className="certificate-image" />
        <div className="certificate-details">
          <p className="date-obtained">Date Obtained: <span>14 Nov 2023</span></p>
        </div>
      </div>

      
      <div className="certificate-box">
        <h3 className="certificate-title">Programming using Java, Infosys Springboard</h3>
        <img src={require('../assets/Certificates/Java-Info.jpg')} 
        alt="Java-Info" className="certificate-image" />
        <div className="certificate-details">
          <p className="date-obtained">Date Obtained: <span>08 Dec 2024</span></p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
