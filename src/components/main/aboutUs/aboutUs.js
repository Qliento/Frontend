import React from "react";
import classes from "./aboutUs.module.css";
// import mainImg from "./img/mainImag.png";
// import leftImg from "./img/leftImg.png";
// import rightImg from "./img/Rectangle 24.png";

const AboutUs = ({ data }) => {
  return (
    <div className={classes.blockAbout}>
      
      <span className={classes.titleV}>{data && data.header}</span>
      <div className={classes.blockImg}>
      
        <img
          alt="img"
          className={classes.mainImg}
          src={data && data.images[0].url}
        />
      
      </div>

      <div className={classes.content}>
        <div className={classes.blockTitle}>
        <span className={classes.title}>{data && data.header}</span>
        </div>
        <div className={classes.blockDescr}>
        <span className={classes.text}>{data && data.description}</span>
        </div>
        
      </div>
    </div>
  );
};
export default AboutUs;
