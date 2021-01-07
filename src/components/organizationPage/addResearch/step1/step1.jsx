import React, { useState, useEffect } from "react";
import Dropdown from "./select/select";
import Tabs from "../tabs/tabs";
import classes from "./step1.module.css";
import { Link, Redirect } from "react-router-dom";
import Country from "./country/country";
import CreatableInputOnly from "./heshtag/hashtag";
import Step1En from "./lang/en";
import Step1Ru from "./lang/ru";
import Step1Kg from "./lang/kg";
import Step2 from "../step2/step2";
import Step3 from "../step3/step3";
import { useDispatch, useSelector } from "react-redux";
import { dataStep1 } from "../../../../redux/actions/organizationPage/action";
import { listDataFilter } from "../../../../redux/actions/filterMarket/filterMarket";

const Step1 = ({ langChange }) => {
  const [lang, setLang] = useState(1);
  const [triger, setTriger] = useState(true);
  const [objErr, setObjErr] = useState([]);
  const [isStep, setIsStep] = useState(1);
  const [arrLang, setArrLang] = useState([1, 2, 3]);
  const [hashtag, setHashtag] = useState([]);
  const [errHashtag, setErrHashtag] = useState();
  const [subCategory,setSubCategory]= useState([])
  const [errCategory,setErrCategory]= useState()
  const [errSubCategory,setErrSubCategory]= useState()
  const [mainCountry,setMainCountry]=useState()
  const [errCountry,setErrCountry]=useState()
  const [mainCategory,setMainCategory]= useState({
    category:null,
    subCategory1:null
  })
  const [data, setData] = useState({
    name: null,
    description: null,
  });
  const [dataKg, setDataKg] = useState({
    name_kg: null,
    description_kg: null,
  });
  const [data_en, setData_en] = useState({
    name_en: null,
    description_en: null,
  });
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.FilterMarket.listData);
  useEffect(() => {
    checkForm();
    dispatch(listDataFilter());
    dispatch(dataStep1({ data, dataKg, data_en, hashtag,mainCategory,mainCountry }));
  }, [data, dataKg, data_en, hashtag,mainCategory,mainCountry]);
  let count = 0;
console.log(data.category)
console.log(mainCountry)
  const checkForm = () => {
    if (lang === 1) {
      for (const item in data) {
        if (!data[item]) {
          count += 1;
        }
      }
    }
    if (lang === 2) {
      for (const item in dataKg) {
        if (!dataKg[item]) {
          count += 1;
        }
      }
    }
    if (lang === 3) {
      for (const item in data_en) {
        if (!data_en[item]) {
          count += 1;
        }
      }
    }

    if (count == 2 || count == 0) {
      setTriger(true);
    } else {
      setTriger(false);
    }
  };
  const changeLang = (e) => {
    setLang(e);
  };
  const inputValue = (e) => {
    if (lang === 1) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
    if (lang === 2) {
      setDataKg({
        ...dataKg,
        [e.target.name]: e.target.value,
      });
    }
    if (lang === 3) {
      setData_en({
        ...data_en,
        [e.target.name]: e.target.value,
      });
    }
  };

  const changeData = (e, r) => {
   
    if (dataList.Category) {
      setSubCategory(dataList.Category.filter((item) => {
        return item.name == e.value;
      }))
    }
    setMainCategory({
      ...mainCategory,
      [r]: e
    })
    
  };
  console.log(mainCategory)
  const changeCountry = (e) => {
    setMainCountry(e)
  };
  const changeCategory=()=>{

  }
  const changeHashtag = (e) => {
    setHashtag(e);
    setErrHashtag(false);
  };
  const pushErr = (e) => {
    setObjErr(e);
  };
  const isHashtag = () => {
    if (hashtag&&hashtag.length !== 0) {
      setErrHashtag(false);
    } else {
      setErrHashtag(true);
    }
  };
  const isCountry=()=>{
    if(mainCountry){
      setErrCountry(false)
    }
    else{
      setErrCountry(true)
    }
  }
  const isCategory =()=>{
    if(mainCategory.category){
      setErrCategory(false)
    }
    if(!mainCategory.category){
      setErrCategory(true)
    }
    if(mainCategory.subCategory1){
      setErrSubCategory(false)
    }
    if(!mainCategory.subCategory1){
      setErrSubCategory(true)
    }
  }

  const isModal = (is) => {
    isHashtag();
    isCategory();
    isCountry()
    let arr = [];
    if (is) {
      setObjErr([]);
    }
    if (lang === 1) {
      for (const item in data) {
        if (!data[item]) {
          arr.push(item);
          pushErr(arr);
        }
      }
    }
    if (lang === 2) {
      for (const item in dataKg) {
        if (!dataKg[item]) {
          arr.push(item);
          pushErr(arr);
        }
      }
    }
    if (lang === 3) {
      for (const item in data_en) {
        if (!data_en[item]) {
          arr.push(item);
          pushErr(arr);
        }
      }
    }
  };

  const further = () => {
    isModal();
    const arrLang1 = [];

    let from = 0;
    from += Object.values(data).every((o) => o !== null && o !== "" && o !== [])
      ? 1
      : 0;
    from += Object.values(dataKg).every(
      (o) => o !== null && o !== "" && o !== []
    )
      ? 1
      : 0;
    from += Object.values(data_en).every(
      (o) => o !== null && o !== "" && o !== []
    )
      ? 1
      : 0;

    arrLang1.push(
      Object.values(data).every((o) => o !== null && o !== "" && o !== [])
        ? 1
        : 0
    );
    arrLang1.push(
      Object.values(dataKg).every((o) => o !== null && o !== "" && o !== [])
        ? 2
        : 0
    );
    arrLang1.push(
      Object.values(data_en).every((o) => o !== null && o !== "" && o !== [])
        ? 3
        : 0
    );
    console.log(from);
    console.log(errCategory)
    console.log(errSubCategory)
console.log(errHashtag)


    if (triger && from > 0 && !errHashtag && !errCategory && !errSubCategory && !errCountry) {

      setIsStep(2);
      isModal(false);
      setArrLang(arrLang1);
      langChange(arrLang1);
    } else {
      setIsStep(1);
      isModal();
    }
  };

  const changeStep = (e) => {
    setIsStep(e);
  };
  const cahngeArrLang = () => {
    setArrLang([1, 2, 3]);
  };
  console.log(isStep)
  console.log(subCategory)
  return (
    <div className={classes.step1}>
      {isStep === 2 ? (
        <Step2
          isStep2={(e) => changeStep(e)}
          cahngeArrLang={cahngeArrLang}
          isLang={arrLang}
        />
      ) : null}
      {isStep === 3 ? (
        <Step3
          isStep3={(e) => changeStep(e)}
          cahngeArrLang={cahngeArrLang}
          isLang={arrLang}
        />
      ) : null}
      {isStep === 1 ? (
        <>
          <Tabs
            changeLang={changeLang}
            triger={triger}
            isModal={isModal}
            langs={1}
            isLang={arrLang}
          />
          {lang === 1 && (
            <Step1Ru
              inputValue={inputValue}
              changeData={changeData}
              changeCountry={changeCountry}
              data={data}
              errCountry={errCountry}
              mainCategory={mainCategory}
              mainCountry={mainCountry}
              changeHashtag={changeHashtag}
              arrErrRu={objErr}
              further={further}
              hashtag={hashtag}
              errCategory={errCategory}
              errSubCategory={errSubCategory}
              errHashtag={errHashtag}
              dataList={dataList&&dataList.Category}
              subCategory={subCategory && subCategory[0]}
            />
          )}
          {lang === 2 && (
            <Step1Kg
              inputValue={inputValue}
              changeData={changeData}
              changeCountry={changeCountry}
              data={dataKg}
              errCountry={errCountry}
              mainCountry={mainCountry}
              changeHashtag={changeHashtag}
              arrErrRu={objErr}
              further={further}
              hashtag={hashtag}
              mainCountry={mainCountry}
              errCategory={errCategory}
              errHashtag={errHashtag}
              errSubCategory={errSubCategory}
              mainCategory={mainCategory}
              dataList={dataList&&dataList.Category}
              subCategory={subCategory && subCategory[0]}
            />
          )}
          {lang === 3 && (
            <Step1En
              inputValue={inputValue}
              changeData={changeData}
              changeCountry={changeCountry}
              data={data_en}
              errCountry={errCountry}
              changeHashtag={changeHashtag}
              arrErrRu={objErr}
              further={further}
              hashtag={hashtag}
              errCategory={errCategory}
              errSubCategory={errSubCategory}
              mainCategory={mainCategory}
              errHashtag={errHashtag}
              dataList={dataList&&dataList.Category}
              subCategory={subCategory && subCategory[0]}
            />
          )}
        </>
      ) : null}
    </div>
  );
};

export default Step1;
