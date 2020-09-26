import React from "react";
import Banner from "./banner/banner";
import Tabs from "./tabs/tabs";
import Order from "./order/order";
import AboutUs from "./aboutUs/aboutUs"
import News from "./news/news"

const Home = () => {
  return (
    <>
      <Banner />
      <Tabs />
      <Order />
      <AboutUs/>
      <News/>
    </>
  );
};
export default Home;
