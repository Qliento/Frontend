import React from "react";
import classes from "./main.module.css";
import Inputs from "./inputs/inputs";
import Tabs from "./tabs/tabs";
import Order from "./order/order";
import AboutUs from "./aboutUs/aboutUs";
import News from "./news/news";
import Header from "../header/header";
import Footer from "../footer/footer";
import banner from "./img/Group 45.png";
import GooglePlay from "./googlePlay/googlePlay"
import Analytics from "./analytics/analytics"

const Main = () => (
  < >

    <div className={classes.wrapper}>
      <img alt="img" src={banner} className={classes.banner} />
      <div className={classes.blockSearch}>
        <Inputs />
      </div>
    </div>
    <Tabs />
    <Order />
    <AboutUs />
    <News />
 
    <Analytics/>
    <GooglePlay/>

  </>
);

export default Main;
