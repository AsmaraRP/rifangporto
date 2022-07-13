import { useState } from "react";
import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Experiences from "../../components/Experiences";
import Navbar from "../../components/Navbar";
import Portfolio from "../../components/Portfolio";
import Work from "../../components/Work";
import "./index.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  return (
    <>
      <Navbar handleTheme={handleTheme} darkMode={darkMode} />
      <Banner darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Work darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Experiences darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
}
export default Home;
