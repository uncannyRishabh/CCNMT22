import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../../assets/slideshow/clg-crop.jpg"
import img2 from "../../assets/slideshow/clg-crop.jpg"
import img3 from "../../assets/slideshow/clg-crop.jpg"

const fadeImages = [
    img1,
    img2,
    img3
];
  
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false
  };
  
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {fadeImages.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} alt="none"/>
          ))}
        </Zoom>
      </div>
    );
  };

  export default Slideshow;