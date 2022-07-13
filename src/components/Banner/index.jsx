import React, { useContext } from "react";
import "./index.css";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import vector2 from "../../assets/back1.png";
import vector1 from "../../assets/back2.png";
import minion1 from "../../assets/minion1.png";
import minion2 from "../../assets/minion2.png";
import minion3 from "../../assets/minion3.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import myphoto from "../../assets/myphoto.png";
import Floating from "../Floating";
const Banner = ({ darkMode }) => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;

  return (
    <div className="banner" id="Intro" style={darkMode ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      {/* left name side */}
      <div className="banner-left">
        <div className="banner-name">
          {/* yahan change hy darkmode ka */}
          <span>Hay People!</span>
          <span>I'm Rifang Pri Asmara</span>
          <span>"Always be learning whenever, wherever, and whatever you are"</span>
        </div>
        <Link to="/" smooth={true} spy={true}>
          <button className="button banner-button">Contact me</button>
        </Link>
        {/* social icons */}
        <div className="banner-icons">
          <BsLinkedin size={100} color={"blue"} onMouseOver={({ target }) => (target.style.color = "#ffd55e")} onMouseOut={({ target }) => (target.style.color = "blue")} />
          <BsInstagram size={100} color={"blue"} onMouseOver={({ target }) => (target.style.color = "#ffd55e")} onMouseOut={({ target }) => (target.style.color = "blue")} />
          <BsGithub size={100} color={"blue"} onMouseOver={({ target }) => (target.style.color = "#ffd55e")} onMouseOut={({ target }) => (target.style.color = "blue")} />
        </div>
      </div>
      {/* right image side */}
      <div className="banner-right">
        <img src={vector1} alt="" className="banner-background2" />
        <img src={myphoto} alt="" className="banner-photo" />
        <img src={vector2} alt="" className="banner-background1" />
        {/* animation */}
        <motion.img initial={{ left: "-50%" }} whileInView={{ left: "-24%" }} transition={transition} src={minion3} alt="" className="floating-div banner-emote" />

        <motion.div initial={{ top: "-4%", left: "74%" }} whileInView={{ left: "68%" }} transition={transition} className="floating-div banner-cardfloting">
          <Floating img={minion1} text="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div initial={{ left: "9rem", top: "18rem" }} whileInView={{ left: "0rem" }} transition={transition} className="floating-div banner-cardfloting">
          <Floating img={minion2} text="Scientist" />
        </motion.div>

        <div className="blur" style={{ background: "#FFD55E", width: "5rem", top: "0.5rem", left: "2rem" }}></div>
        <div
          className="blur"
          style={{
            background: "blue",
            top: "20rem",
            width: "15rem",
            height: "6rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
