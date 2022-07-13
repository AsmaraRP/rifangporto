import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import minion1 from "../../assets/minion4.png";
import minion2 from "../../assets/minion5.png";
import minion3 from "../../assets/minion6.png";
import Resume from "./CVRifang.pdf";
import Card from "../Card";

const About = ({ darkMode }) => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="about" id="about" style={darkMode ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      {/* left side */}
      <div className="about-title">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span>Rifang</span>
        <span>
          I'm a Scientist in physics and a Fullstack Developer who has skills in creating and managing website and mobile applications based on Javascript and its framework. As Scientist, I have completed my undergraduate education in
          physics and have received several awards for national and international competitions because of my analytical and mathematical skills. However, I decided to be a programmer because I have an interest in making applications either
          for website or mobile.
          <br />I started my journey for Fullstack Developer with learning from Javascript tutorial videos and improving skills about Python that I got when I was a student in physics. And then, I joined an intensive class(Bootcamp) to
          improve my skills, and I've created some project based on Javascript framework. As a Fullstack Developer, I have a commitment to always upgrade my skills and learn about new features or new technology from Javascript framework and
          others that make me to be more expert in developing applications.
        </span>
        <a href={Resume} download>
          <button className="about-button">Download CV</button>
        </a>
        <div className="about-blur1" style={{ background: "blue" }}></div>
      </div>
      {/* right */}
      <div className="about-cards">
        {/* first card */}
        <motion.div initial={{ left: "45rem" }} whileInView={{ left: "34rem" }} transition={transition}>
          <Card emoji={minion1} heading={"Web Developement"} detail={"Bootstrap, React, Express, Next, Vue, Nuxt, Redis, Redux, MySQL"} />
        </motion.div>
        {/* second card */}
        <motion.div initial={{ left: "1rem", top: "12rem" }} whileInView={{ left: "14rem" }} transition={transition}>
          <Card emoji={minion3} heading={"Science"} detail={"Physics, Calculus, Statistics, Math, Python, Matlab, Robotic"} />
        </motion.div>
        {/* 3rd */}
        <motion.div initial={{ top: "24rem", left: "45rem" }} whileInView={{ left: "32rem" }} transition={transition}>
          <Card emoji={minion2} heading={"Additional"} detail={"Public Speaking, Problem Solving, Leader Experiences, High Motivation for Learning, Systematic Thinking"} color="rgba(252, 166, 31, 0.45)" />
        </motion.div>
        <div className="about-blur2" style={{ background: "#ffd55e" }}></div>
      </div>
    </div>
  );
};

export default About;
