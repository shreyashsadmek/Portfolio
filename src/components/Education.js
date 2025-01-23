import React from 'react';
import './Education.css';  

const Education = () => {
  return (
    <div className="content">
      <h2>Education</h2>
      
      
      <div className="education-box">
        <h3>Engineering</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Institute Name</td>
              <td>Rajarambapu Institute of Technology</td>
            </tr>
            <tr>
              <td>Graduation Year</td>
              <td>2022-2025</td>
            </tr>
            <tr>
              <td>Degree</td>
              <td>B.Tech</td>
            </tr>
            <tr>
              <td>CGPA</td>
              <td>7.40</td>
            </tr>
            <tr>
              <td>Place</td>
              <td>Sangli, Maharashtra</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <div className="education-box">
        <h3>HSC(12th Std.)</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Institute Name</td>
              <td>Sainik School</td>
            </tr>
            <tr>
              <td>Year of Passing</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>Board</td>
              <td>C.B.S.E</td>
            </tr>
            <tr>
              <td>Percentage Obtained</td>
              <td>73%</td>
            </tr>
            <tr>
              <td>Place of Pursuing</td>
              <td>Satara, Maharashtra</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <div className="education-box">
        <h3>SSC(10th Std.)</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Institute Name</td>
              <td>Sainik School</td>
            </tr>
            <tr>
              <td>Year of Passing</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Board</td>
              <td>C.B.S.E</td>
            </tr>
            <tr>
              <td>Percentage Obtained</td>
              <td>73%</td>
            </tr>
            <tr>
              <td>Place of Pursuing</td>
              <td>Satara, Maharashtra</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
