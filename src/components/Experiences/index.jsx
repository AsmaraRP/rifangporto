import React from "react";
import "./index.css";

const Experiences = ({ darkMode }) => {
  const data = [
    { name: "Gudang Loby", time: "2020", description: "Reseaching for lobster seeds circle", company: "Grajagaan", type: "Work Experiences" },
    { name: "1st Place Award", time: "2018", description: "Physics Competition", company: "Universitas Negeri Malang", type: "Competition Experiences" },
    { name: "Champions in ON-MIPA", time: "2018", description: "Science Competition from Minstry of Research Indonesia", company: "RISTEK DIKTI", type: "Competition Experiences" },
    { name: "Vice President of BEM", time: "2018", description: "Leader of student organization in faculty of science", company: "Universitas Jember", type: "Organizational Experiences" },
    { name: "1st Place or the best student", time: "2018", description: "Selection of Outstanding Students of Faculty", company: "FMIPA Unej", type: "Competition Experiences" },
    { name: "1st Place or the best student", time: "2018", description: "Selection of Outstanding Students of Faculty", company: "FMIPA Unej", type: "Competition Experiences" },
    { name: "President of UKM Spora", time: "2017", description: "Leader of student organization in Sport and Choir", company: "Universitas Jember", type: "Organizational Experiences" },
    { name: "Jember Bangkit Pioneer", time: "2016", description: "Special Award from Bupati of Jember", company: "Bupati of Jember", type: "Award Experiences" },
    { name: "Gold Prize", time: "2016", description: "International Exhibition for Technology", company: "Universiti Malaysia Perlis", type: "Competition Experiences" },
    { name: "Special Award", time: "2016", description: "Award from Canada Organization", company: "TISIAS Canada", type: "Award Experiences" },
    { name: "Assistant of Experimental Class", time: "2016", description: "Guiding partisipant of experiment in physics", company: "Department of Physics at Universitas Jember", type: "Work Experiences" },
  ];
  const colName = ["Name", "Time", "Description", "Company", "Type"];
  return (
    <div className="experiences-main" style={darkMode ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      <div className="experiences" id="experiences">
        <span style={{ color: darkMode ? "white" : "" }}>Table of</span>
        <span>Experiences</span>
        <div className="experiences-blur1" style={{ background: "blue" }}></div>
        <div className="experiences-blur2" style={{ background: "#ffd55e" }}></div>
      </div>
      <div className="experiences-table">
        {data.length > 0 && (
          <table cellSpacing="0" style={{ width: "100%", height: "500px", padding: "5px 10px" }}>
            <thead style={{ backgroundColor: "blue", color: "white" }}>
              <tr>
                {colName.map((headerItem, index) => (
                  <th key={index}>{headerItem.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.values(data).map((obj, index) => (
                <tr key={index}>
                  {Object.values(obj).map((value, index2) => (
                    <td
                      key={index2}
                      className="hoverable"
                      style={darkMode ? { padding: "5px 0", backgroundColor: "#ffd55e", border: "1px solid white", color: "black" } : { padding: "5px 0", backgroundColor: "#ffd55e", border: "1px solid black" }}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Experiences;
