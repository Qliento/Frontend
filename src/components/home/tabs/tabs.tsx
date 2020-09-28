import React from "react";
import classes from "./tabs.module.css";
import TabsItem from "./tabsItem/tabsItem";

const Tabs = () => {
  return (
    <div className={classes.tabs}>
      <TabsItem title="Потребительские товары" productCount="455" />
      <TabsItem title="Потребительские услуги" productCount="455" />
      <TabsItem title="СМИ и реклама" productCount="455" />
      <TabsItem title="Сельское хозяйство" productCount="455" />
      <TabsItem title="Промышленность" productCount="455"/>
      <TabsItem title="Строительство и недвижимость" productCount="455" />
      <TabsItem title="Тара и упаковка" productCount="455" />
      <TabsItem title="Транспорт и логистика" productCount="455" />
      <TabsItem title="IT и телекоммуникации" productCount="455" />
      <TabsItem title="Финансовые рынки,Компании " productCount="455" />
      <TabsItem title="Услуги для бизнеса" productCount="455" />
      <TabsItem title="Макроэкономика"productCount="455" />
    </div>
  );
};
export default Tabs;
