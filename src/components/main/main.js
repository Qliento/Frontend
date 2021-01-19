import React, { useEffect } from "react";
import classes from "./main.module.css";
import Inputs from "./inputs/inputs";
import Tabs from "./tabs/tabs";
import Order from "./order/order";
import AboutUs from "./aboutUs/aboutUs";
import News from "./news/news";
import banner from "./img/Фон горы.png";
import banner1 from "./img/Frame 119.png"
import GooglePlay from "./googlePlay/googlePlay";
import Analytics from "./analytics/analytics";
import { useDispatch, useSelector } from "react-redux";
import { mainData } from "../../redux/actions/main/getMain";
import { ListNews } from "../../redux/actions/getListNews/getNews";

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mainGet.mainData);

  useEffect(() => {
    dispatch(mainData());
    dispatch(ListNews());
  }, []);
  const language = localStorage.getItem('lang');
  //iravolv7
  return (
    <div className={classes.wrapperMain}>
      <div className={classes.wrapper}>
        <img alt="img" src={banner} className={classes.banner} />
        <img alt="img" src={banner1} className={classes.banner1} />
        <div className={classes.blockTitle}>
          {(language == 1 || language == undefined) && (
            <span className={classes.title}>Маркет исследований</span>
          )}
          {language == 2 && (
            <span className={classes.title}>Research market</span>
          )}
          {language == 3 && <span className={classes.title}>Изилдөөлөр</span>}
        </div>
        <div className={classes.blockSearch}>
          <Inputs arrCategory={data && data.category} />
        </div>
      </div>
      <Tabs category={data && data.category} />
      <Order />
      <AboutUs data={data && data.info} />
      <News />
      <Analytics data={data && data.post} />
      <GooglePlay data={data && data.mob_app} />
    </div>
  );
};

export default Main;
