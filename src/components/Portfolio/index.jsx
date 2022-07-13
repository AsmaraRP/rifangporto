import React from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import porto1 from "../../assets/porto1.png";
import porto2 from "../../assets/porto2.png";
import porto3 from "../../assets/porto3.png";
import porto4 from "../../assets/porto4.png";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Portfolio = ({ darkMode }) => {
  const image = [porto1, porto2, porto3, porto4];
  return (
    <div className="portofolio-main" style={darkMode ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      <div className="portfolio" id="portfolio">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>
        <div className="portfolio-blur1" style={{ background: "blue" }}></div>
        <div className="portfolio-blur2" style={{ background: "#ffd55e" }}></div>
      </div>
      <div className="portfolio-card">
        <Swiper loop={true} spaceBetween={10} navigation={true} modules={[Navigation, Pagination]} grabCursor={true} className="portfolio-slider" slidesPerView={1} pagination={{ clickable: true }}>
          {image.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <img src={item} alt="" className="portfolio-image" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
