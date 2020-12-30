import React, { useEffect } from "react";
import ResearchCard from "./researchCard/researchCard";
import { useDispatch, useSelector } from "react-redux";
import { getReearchListOrgnPage } from "../../redux/actions/organizationPage/action";
import classes from "./organizationPage.module.css"

const ResearchCards = () => {
  const language = localStorage.getItem('lang');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ResearchList.ResearchList);
  useEffect(() => {
    dispatch(getReearchListOrgnPage());
  }, []);
  return (
    <>
      {data.length>0 ? (
        <></>
      ) : (
        <div className={classes.noResearch}>
          {(language == 1 || language == undefined) && (
            <span className={classes.text}>Исследований нет</span>
          )}
          {language == 2 && <span className={classes.text}>No research</span>}
          {language == 3 && (
            <span className={classes.text}>Изилдөөлөр жок</span>
          )}
        </div>
      )}
      {data &&
        data.map((item) => {
          return <ResearchCard key={item.id} data={item} />;
        })}
    </>
  );
};
export default ResearchCards;
