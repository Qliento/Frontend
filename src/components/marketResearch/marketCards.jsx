import React, { useEffect } from "react";
import MarketCard from "./marketCard/marketCard";
import { useDispatch, useSelector } from "react-redux";
import {
  listResearchCategory,
  mainSearch,
  allResearch,
  mainSearchText,
  mainSearchCategoryText,
} from "../../redux/actions/mainSearch/mainSearch";

const MarketCards = ({ params, sort1, sort2 ,filter}) => {

  const numberKeys = Object.keys(params).length;
  const dispatch = useDispatch();
  const language = localStorage.getItem('lang');
  let arrResearch = useSelector((state) => state.mainResultSearch.researchList);
console.log(params)
  useEffect(() => {
    const cursor = document.querySelector('.add_fly');
    const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
  };
  window.addEventListener('mousemove', editCursor);

});
useEffect(()=>{

},[filter])

const addFlyEfyf = () => {
  const cursor = document.querySelector('.add_fly');
  console.log('test')
  cursor.classList.add('add_fly_anim');
  setTimeout(function () { cursor.classList.remove('add_fly_anim') }, 1000);
}

  let arr = [];
  arr = sort1
    ? arrResearch.sort((a, b) => (a.new_price < b.new_price ? -1 : 1))
    : arrResearch;
  arr = sort2 ? arr.sort((a, b) => (a.date < b.date ? -1 : 1)) : arr;
  useEffect(() => {
    if (params.text && numberKeys === 1) {
      dispatch(mainSearchText(params.text));
    }
    if (params.category && numberKeys === 1) {
      dispatch(listResearchCategory(params.category));
      
    }
    if (params.category && params.text && numberKeys === 2) {
      dispatch(mainSearchCategoryText(params.category, params.text));
    }
    if (numberKeys === 0 ) {
      dispatch(allResearch());
    }
  }, [params, sort1, sort2,language]);

  return (
    <>
    <div className="add_fly"></div>
      {arr &&
        arr.map((item) => {
          return <MarketCard data={item} key={item.id} addFlyEfyf={addFlyEfyf} />;
        })}
    </>
  );
};
export default MarketCards;
