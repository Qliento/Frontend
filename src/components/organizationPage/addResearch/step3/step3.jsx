import React, { useState } from "react";
import classes from "./step3.module.css";
import img from "./img/Rectangle 47.png";
import { useDispatch, useSelector } from "react-redux";

const Step3 = ({ isStep3 }) => {
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
    if (dataRedux) {
      researchData = dataRedux;
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
    let formData = new FormData();
    formData.append("name_ru", researchData.dataStep1.data.name);
    formData.append("description_ru", researchData.dataStep1.data.description);
    formData.append(
      "category",
      researchData.dataStep1.data.subCategory ||
        researchData.dataStep1.dataKg.subCategory_kg ||
        researchData.dataStep1.data_en.subCategory_kg
    );
    formData.append("demo_ru", researchData.dataStep2.data.file_demo);
    formData.append("hashtag", researchData.dataStep1.hashtag);
    formData.append("old_price", data.price);
    formData.append("image", data.photo);
    formData.append("research_data_ru", file_research_ru?file_research_ru:[]);
    formData.append("research_data_en", file_research_en?file_research_en:[]);
    formData.append("research_data_ky", file_research_kg?file_research_kg:[]);
    formData.append(
      "country",
      researchData.dataStep1.data.country ||
        researchData.dataStep1.dataKg.country_kg ||
        researchData.dataStep1.data_en.country_en
    );
    let hashtag = researchData.dataStep1.hashtag;
    for (let i = 0; i < hashtag.length; i++) {
      formData.append("hashtag", hashtag[i]);
    }
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  const isData = () => {

    let count = 0;
    for (var item in data) {
      if (data[item]==null || data[item]=="") {
        count++;
      }
    }
    if (count == 0) {
      uploadResearch();
      console.log('vfdvfdvdf')
    }
  };

  console.log(data);
  return (
    <div className={classes.step3}>
      <div className={classes.form}>
        <div className={classes.blockTitle}>
          <span className={classes.title}>Исследование</span>
          <div className={classes.blockStep}>
            <span className={classes.step11} onClick={() => isStep3(1)}>
              Шаг 1
            </span>
            <span className={classes.step11} onClick={() => isStep3(2)}>
              Шаг 2
            </span>
            <span className={classes.step11}>Шаг 3</span>
          </div>
        </div>
        <div className={classes.content}>
          <img alt="img" className={classes.img} src={imgUrl ? imgUrl : img} />
          <div className={classes.rightBlock}>
            <div>
              <div className={classes.blockDescrip}>
                <span className={classes.descripTitle}>Название</span>
                <span className={classes.descrip}>
                  {data.photo ? data.photo.name : "Название документа"}
                </span>
              </div>
              <div className={classes.blockDescrip2}>
                <span className={classes.descripTitle}>Примечание</span>
                <span className={classes.descrip}>форматы .JPEG .JPG</span>
              </div>
            </div>
            <input
              className={classes.inputFile}
              onChange={(e) => handleImageChange(e)}
              name="photo"
              type="file"
              id="input__photo"
            ></input>
            {data.photo ? (
              <button
                className={classes.btnDelete}
                onClick={() => deletePhoto()}
              >
                Удалить
              </button>
            ) : (
              <label for="input__photo" className={classes.btn}>
                Загрузить
              </label>
            )}
          </div>
        </div>
        <span className={classes.titlePrice}>Цена</span>
        <div className={classes.bottomBlock}>
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
        </div>
      </div>
    </div>
  );
};
export default Step3;
