import { useState } from "react";
import Navbar from "../../components/Navbar";
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
      <div>
        <h1>This is dahsboard page</h1>
      </div>
    </>
  );
}
export default Home;
