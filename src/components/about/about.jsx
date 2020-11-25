import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutData } from "../../redux/actions/about/getAboutText";
import { AboutUs } from "../../redux/reducers/about/about";
import classes from "./about.module.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import { Link } from "react-router-dom";

const About = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AboutUs.arrayData);
  useEffect(() => {
    dispatch(aboutData());
  }, []);
  return (
    <div className={classes.aboutPage}>
      <div className={classes.blockCrumbs}>
        <Link to="/">Главная / </Link>
        <Link to="/about-us">О нас</Link>
      </div>
      <span className={classes.title}>О нас</span>

      {data &&
        data.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div className={classes.block1} key={item.id}>
                <img alt="img" className={classes.img} src={item.images[0].url} />
                <div className={classes.text1}>
                  <span className={classes.blockTitle}>{item.header}</span>
                  <span>{item.description}</span>
                </div>
              </div>
            );
          } else {
            return (
              <div className={classes.block1} key={item.id}>
                <div className={classes.text1}>
                  <span className={classes.blockTitle}>{item.header}</span>
                  <span>{item.description}</span>
                </div>
                <img alt="img" className={classes.img}  src={img1} />
              </div>
            );
          }
        })}
    </div>
  );
};
export default About;
