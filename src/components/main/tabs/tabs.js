import React from "react";
import classes from "./tabs.module.css";
import TabsItem from "./tabsItem/tabsItem";

const Tabs = ({ category }) => {
  console.log(category);
  return (
    <div className={classes.blockIsledov}>
      <span className={classes.title}>Маркет исследований</span>
      <div className={classes.tabs}>
        {category &&
          category.map((item) => {
            return <TabsItem title={item.name} productCount={item.count} />;
          })}
      </div>
    </div>
  );
};
export default Tabs;
