import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutData } from "../../redux/actions/about/getAboutText";
import { AboutUs } from "../../redux/reducers/about/about";
import classes from "./about.module.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";

const About = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AboutUs.arrayData);
  useEffect(() => {
    dispatch(aboutData());
  }, []);
  return (
    <div className={classes.aboutPage}>
      <span className={classes.title}>О нас</span>

      {data &&
        data.map((item) => {
          return(
            <div className={classes.block1} key={item.id}>
            <img alt="img" src={img1} />
            <div className={classes.text1}>
              <span className={classes.blockTitle}>{item.header}</span>
              <span>{item.description}</span>
            </div>
          </div>
          )

        })}
    </div>
  );
};
export default About;
