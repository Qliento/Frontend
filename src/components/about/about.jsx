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
  const language = useSelector(state => state.langReducer.lang);

  return (
    <div className={classes.aboutPage}>
      <div className={classes.blockCrumbs}>
        {language === 1 && <><Link to="/">Главная / </Link>
        <Link to="/about-us">О нас</Link></>}
        {language === 2 && <><Link to="/">Home / </Link>
        <Link to="/about-us">About</Link></>}
        {language === 3 && <><Link to="/">Башкы бет / </Link>
        <Link to="/about-us">Биз</Link></>}
      </div>
      {language === 1 && <span className={classes.title}>О нас</span>}
      {language === 2 && <span className={classes.title}>About</span>}
      {language === 3 && <span className={classes.title}>Биз</span>}

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
