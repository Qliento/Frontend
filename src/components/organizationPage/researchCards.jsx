import React, { useEffect } from "react";
import ResearchCard from "./researchCard/researchCard";
import { useDispatch, useSelector } from "react-redux";
import { getReearchListOrgnPage } from "../../redux/actions/organizationPage/action";

const ResearchCards = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ResearchList.ResearchList);
  useEffect(() => {
    dispatch(getReearchListOrgnPage());
  }, []);
  return (
    <>
      {data &&
        data.map((item) => {
          return <ResearchCard key={item.id} data={item} />;
        })}
    </>
  );
};
export default ResearchCards;
