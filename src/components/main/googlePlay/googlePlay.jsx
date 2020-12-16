import React from "react";
import classes from "./googlePlay.module.css";
import phone from "./img/phone.png";
import google from "./img/google-play-badge 1.png";
import img1 from "./img/1.png";

const GooglePlay = ({ data }) => {
  let image;
  if (data) {
    image = data.image;
  }

  return (
    <div className={classes.googlePlay}>
      <img alt="img" src={image ? data.image : phone} className={classes.img} />
      <div className={classes.blockText}>
        <span className={classes.title}>
          {data && data.header ? data.header : null}
        </span>
        <span className={classes.description}>{data && data.description}</span>
      </div>

      <img
        alt="img"
        src={google}
        onClick={(event) => {
          event.preventDefault();
          window.open(data && data.url);
        }}
        className={classes.btnGoogle}
      />
      <img
        alt="img"
        src={img1}
        onClick={(event) => {
          event.preventDefault();
          window.open(data && data.url);
        }}
        className={classes.btnGoogle2}
      />
    </div>
  );
};
export default GooglePlay;
