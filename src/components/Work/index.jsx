import React, { useContext } from "react";
import "./index.css";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";
import work5 from "../../assets/work5.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Work = ({ darkMode }) => {
  return (
    <div className="works" id="works" style={darkMode ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Prioritized As</span>
          <span>A Fullstack Website Developer</span>
          <span>
            With experiences about building website using javascript framework and others
            <br />
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="w-button">Hire Me</button>
          </Link>
          <div className="w-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 1, type: "spring" }} className="w-mainCircle">
          <div className="w-secCircle">
            <img src={work1} alt="" className="imageWork" />
          </div>
          <div className="w-secCircle">
            <img src={work3} alt="" className="imageWork" />
          </div>
          <div className="w-secCircle">
            <img src={work2} alt="" className="imageWork" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={work4} alt="" className="imageWork" />
          </div>
          <div className="w-secCircle">
            <img src={work5} alt="" className="imageWork" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
