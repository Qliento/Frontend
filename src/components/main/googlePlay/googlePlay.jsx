import React from "react";
import classes from "./googlePlay.module.css";
import phone from "./img/phone.png";
import google from "./img/google-play-badge 1.png"

const GooglePlay = () => {
  return (
    <div className={classes.googlePlay}>
      <img alt="img" src={phone} className={classes.img} />
      <div className={classes.blockText}>
        <span className={classes.title}>мобильном приложении QlientO</span>
        <span className={classes.description}>
          Повседневная практика показывает, что постоянный количественный рост и
          сфера нашей активности позволяет выполнять.
        </span>
      </div>
      <img alt="img" src={google} className={classes.btnGoogle}/>
    </div>
  );
};
export default GooglePlay;
