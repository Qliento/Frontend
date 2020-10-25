import React, { useEffect } from "react";
import classes from "./main.module.css";
import Inputs from "./inputs/inputs";
import Tabs from "./tabs/tabs";
import Order from "./order/order";
import AboutUs from "./aboutUs/aboutUs";
import News from "./news/news";
import banner from "./img/Group 45.png";
import GooglePlay from "./googlePlay/googlePlay";
import Analytics from "./analytics/analytics";
import { useDispatch, useSelector } from "react-redux";
import { mainData } from "../../redux/actions/main/getMain";

const Main = () => {
  const dispatch = useDispatch();
  const data=useSelector((state)=>state.mainGet.mainData)
useEffect(()=>{
  dispatch(mainData())
},[])
console.log(data)
//iravolv7
  return (
    <>
      <div className={classes.wrapper}>
        <img alt="img" src={banner} className={classes.banner} />
        <div className={classes.blockSearch}>
          <Inputs />
        </div>
      </div>
      <Tabs category={data.category} />
      <Order />
      <AboutUs />
      <News />
      <Analytics data={data.post} />
      <GooglePlay />
    </>
  );
};

export default Main;
