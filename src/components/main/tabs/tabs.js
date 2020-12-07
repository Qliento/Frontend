import React from "react";
import classes from "./tabs.module.css";
import TabsItem from "./tabsItem/tabsItem";
import {useSelector} from 'react-redux';

const Tabs = ({ category }) => {
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');
  return (
    <div className={classes.blockIsledov}>
      {(language == 1 || language == undefined) && <span className={classes.title}>Маркет исследований</span>}
      {language == 2 && <span className={classes.title}>Research market</span>}
      {language == 3 && <span className={classes.title}>Изилдөөлөр</span>}
      <div className={classes.tabs}>
        {category &&
          category.map((item) => {
            return <TabsItem key={item.id} title={item.name} productCount={item.count} />;
          })}
      </div>
    </div>
  );
};
export default Tabs;
