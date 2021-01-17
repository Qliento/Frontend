import React, { useState } from "react";
import classes from "./step3.module.css";
import img from "./img/Rectangle 47.png";
import { useDispatch, useSelector } from "react-redux";
import {dataStep2null, uploadResearchAction} from "../../../../redux/actions/organizationPage/action"
import PostResearchModal from "./modal";

const Step3 = ({ isStep3 }) => {
  let dispatch=useDispatch();
  const language = localStorage.getItem('lang');
  const [data, setData] = useState({
    photo: null,
    price: null,
  });
  const [imgUrl, setImgUrl] = useState("");
  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setData({
        ...data,
        photo: file,
      });
      setImgUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const deletePhoto = () => {
    setData({
      ...data,
      photo: null,
    });
    setImgUrl(null);
  };
  const handleInputChange = (e) => {
    setData({
      ...data,
      price: e.target.value,
    });
  };
  const dataRedux = useSelector((state) => state.ResearchList);
  const uploadResearch = () => {
    let researchData = {};
    let file_research_ru = [];
    let file_research_kg = [];
    let file_research_en = [];

    let country = "";
    let hashtags=""
    if (dataRedux) {
      researchData = dataRedux;
      //console.log(researchData.data.subCategory)
      let arr = [];
      country =
        (researchData.dataStep1.mainCountry &&
          researchData.dataStep1.mainCountry
            .map((item) => item.value)
            .join(", "))
            hashtags =
            (researchData.dataStep1.hashtag 
                .map((item) => item.value)
                .join(", "))

      if (researchData.dataStep2.data.files_research) {
        file_research_ru = researchData.dataStep2.data.files_research.map(
          (item) => {
            return item.file;
          }
        );
      }
      if (researchData.dataStep2.dataKg.files_research_kg) {
        file_research_kg = researchData.dataStep2.dataKg.files_research_kg.map(
          (item) => {
            return item.file;
          }
        );
      }
      if (researchData.dataStep2.data_en.files_research_en) {
        file_research_en = researchData.dataStep2.data_en.files_research_en.map(
          (item) => {
            return item.file;
          }
        );
      }
    }
    let arr_content_ru=[];
    let arr_content_ky=[];
    let arr_content_en=[];
    console.log("join", hashtags);
    let formData = new FormData();
    if (researchData.dataStep1.data.name) {
      formData.append("name_ru", researchData.dataStep1.data.name);
      formData.append(
        "description_ru",
        researchData.dataStep1.data.description
      );
      formData.append("demo_ru", researchData.dataStep2.data.file_demo);
      file_research_ru.map((item)=>  formData.append("file_ru",item))
   arr_content_ru=researchData.dataStep2.data.content.map((item)=>{
     if(item.value && item.page){
         return{
          content:item.value,
          page:item.page
         }
        }
       })
       
    }
    if (researchData.dataStep1.dataKg.name_kg) {
      formData.append("name_ky", researchData.dataStep1.dataKg.name_kg);
      formData.append(
        "description_ky",
        researchData.dataStep1.dataKg.description_kg
      );
      formData.append("demo_ky", researchData.dataStep2.dataKg.file_demo_kg);

      file_research_kg.map((item)=>  formData.append("file_ky",item))
    arr_content_ky=researchData.dataStep2.dataKg.content_kg.map((item)=>{
      if(item.value && item.page){
        return{
         content_ky:item.value,
         page_ky:item.page
        }
        }
      })
     
    }

    if (researchData.dataStep1.data_en.name_en) {
      formData.append("name_en", researchData.dataStep1.data_en.name_en);
      formData.append(
        "description_en",
        researchData.dataStep1.data_en.description_en
      );
      formData.append("demo_en", researchData.dataStep2.data_en.file_demo_en);
      file_research_en.map((item)=>  formData.append("file_en",item))
       arr_content_en=researchData.dataStep2.data_en.content_en.map((item)=>{
        if(item.value && item.page){
        return{
         content_en:item.value,
         page_en:item.page
        }
      }
      })
  
    } 
    let main_arr_content=[]
    if(arr_content_ru[0])
    {
      main_arr_content=[...main_arr_content,...arr_content_ru]
    }
    if(arr_content_ky[0])
    {
      main_arr_content=[...main_arr_content,...arr_content_ky]
    }
    if(arr_content_en[0])
    {
      main_arr_content=[...main_arr_content,...arr_content_en]
    }
    formData.append("content_data", JSON.stringify([...main_arr_content]))
    formData.append(
      "pages",
      researchData.dataStep2.pages && researchData.dataStep2.pages);
    formData.append(
      "category",
      (researchData.dataStep1.mainCategory.subCategory1.id &&
        researchData.dataStep1.mainCategory.subCategory1.id)
    );

    formData.append("hashtag", hashtags);
    formData.append("old_price", data.price);
    formData.append("image", data.photo);
    formData.append("country", country);
   
   
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    dispatch(uploadResearchAction(formData));
    dispatch(dataStep2null())
  };

  const isData = () => {
    let count = 0;
    for (var item in data) {
      if (data[item] == null || data[item] == "") {
        count++;
      }
    }
    if (count == 0) {
      uploadResearch();

    }
  };

  console.log(data);
  return (
    <>
    <div className={classes.step3}>
      <div className={classes.form}>
        <div className={classes.blockTitle}>
          {(language == 1 || language == undefined) && <span className={classes.title}>Исследование</span>}
          {language == 2 && <span className={classes.title}>Research</span>}
          {language == 3 && <span className={classes.title}>Изилдөө</span>}
          <div className={classes.blockStep}>
          {(language == 1 || language == undefined) && <>
            <span className={classes.step11} onClick={() => isStep3(1)}>Шаг 1</span>
            <span className={classes.step11} onClick={() => isStep3(2)}>Шаг 2</span>
            <span className={classes.step11}>Шаг 3</span>
          </>}
          {language == 2 && <>
            <span className={classes.step11} onClick={() => isStep3(1)}>Step 1</span>
            <span className={classes.step11} onClick={() => isStep3(2)}>Step 2</span>
            <span className={classes.step11}>Step 3</span>
          </>}
          {language == 3 && <>
            <span className={classes.step11} onClick={() => isStep3(1)}>Кадам 1</span>
            <span className={classes.step11} onClick={() => isStep3(2)}>Кадам 2</span>
            <span className={classes.step11}>Кадам 3</span>
          </>}
            
          </div>
        </div>
        <div className={classes.content}>
          <img alt="img" className={classes.img} src={imgUrl ? imgUrl : img} />
          <div className={classes.rightBlock}>
            <div>
              <div className={classes.blockDescrip}>
                {(language == 1 || language == undefined) && <>
                  <span className={classes.descripTitle}>Название</span>
                <span className={classes.descrip}>
                  {data.photo ? data.photo.name : "Название документа"}
                </span>
                </> }
                {language == 2 && <>
                  <span className={classes.descripTitle}>Name</span>
                <span className={classes.descrip}>
                  {data.photo ? data.photo.name : "Name of the document"}
                </span>
                </> }
                {language == 3 && <>
                  <span className={classes.descripTitle}>Аты</span>
                <span className={classes.descrip}>
                  {data.photo ? data.photo.name : "Документтин аталышы"}
                </span>
                </> }
              </div>
              <div className={classes.blockDescrip2}>
                {(language == 1 || language == undefined) && <>
                  <span className={classes.descripTitle}>Примечание</span>
                <span className={classes.descrip}>форматы .JPEG .JPG</span>
                </>}
                {language == 2 && <>
                  <span className={classes.descripTitle}>Notice</span>
                <span className={classes.descrip}>formats .JPEG .JPG</span>
                </>}
                {language == 3 && <>
                  <span className={classes.descripTitle}>Эскертүү</span>
                <span className={classes.descrip}>.JPEG .JPG форматтары</span>
                </>}
              </div>
            </div>
            <input
              className={classes.inputFile}
              onChange={(e) => handleImageChange(e)}
              name="photo"
              type="file"
              id="input__photo"
            ></input>
            {data.photo ? (<>
              {(language == 1 || language == undefined) && <button className={classes.btnDelete} onClick={() => deletePhoto()}>Удалить</button>}
              {language == 2 && <button className={classes.btnDelete} onClick={() => deletePhoto()}>Delete</button>}
              {language == 3 && <button className={classes.btnDelete} onClick={() => deletePhoto()}>Очүрүү</button>}
            </>) : (<>
              {(language == 1 || language == undefined) && <label for="input__photo" className={classes.btn}>Загрузить</label>}
              {language == 2 && <label for="input__photo" className={classes.btn}>Download</label>}
              {language == 3 && <label for="input__photo" className={classes.btn}>Жүктөө</label>}
            </>)}
          </div>
        </div>
        {(language == 1 || language == undefined) && <span className={classes.titlePrice}>Цена ($)</span>}
        {language == 2 && <span className={classes.titlePrice}>Price ($)</span>}
        {language == 3 && <span className={classes.titlePrice}>Баа ($)</span>}
        {(language == 1 || language == undefined) && <div className={classes.bottomBlock}>
          <input
            className={classes.inputPrice}
            type="text"
            placeholder="Цена"
            value={data.price}
            onChange={(e) => handleInputChange(e)}
          />
          <button className={classes.btn2} onClick={() => isData()}>
            Оформить
          </button>
        </div>}
        {language == 2 && <div className={classes.bottomBlock}>
          <input
            className={classes.inputPrice}
            type="text"
            placeholder="price"
            value={data.price}
            onChange={(e) => handleInputChange(e)}
          />
          <button className={classes.btn2} onClick={() => isData()}>
            Checkout
          </button>
        </div>}
        {language == 3 && <div className={classes.bottomBlock}>
          <input
            className={classes.inputPrice}
            type="text"
            placeholder="Баа"
            value={data.price}
            onChange={(e) => handleInputChange(e)}
          />
          <button className={classes.btn2} onClick={() => isData()}>
              Каттоо
          </button>
        </div>}
      </div>
    </div>
<PostResearchModal/>
    </>
  );
};
export default Step3;
