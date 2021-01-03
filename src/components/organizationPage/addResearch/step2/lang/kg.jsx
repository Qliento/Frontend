import React, { useState } from "react";
import classes from "../step2.module.css";
import pdf from "../img/pdf.png";
import xls from "../img/xls.png";
import jpeg from "../img/jpeg.png";
import jpg from "../img/jpg.png";
import png from "../img/png.png";
import xlsx from "../img/xlsx.png";
import ppt from "../img/ppt.png";
import csv from "../img/csv.png";
import krestik from "../img/download 1.png";
import { Link } from "react-router-dom";

const Step2Kg = ({
  handleRemove,
  handleAdd,
  handleChangePage,
  handleChange,
  deleteFileDemo,
  deleteFile,
  changePage,
  handleImageChangeDemo,
  handleImageChange,
  data,
  arrImg,
  isStep,
  objErr,
  further
}) => {
  return (
    <div className={classes.form}>
      <div className={classes.blockTitle}>
        <span className={classes.title}>Изилдөө</span>
        <div className={classes.blockStep}>
          <span className={classes.step11} onClick={() => further(1)}>
            1 кадам
          </span>
          <span className={classes.step11}>2 кадам</span>
          <span className={classes.step} onClick={() => further(3,true)}>3 кадам</span>
        </div>
      </div>
      <div className={classes.topBlock}>
        <span>Изилдөө файлы Кырг</span>
      </div>
      <div className={classes.blockFiles}>
        {data.files_research_kg &&
          data.files_research_kg.map((item, index1) => {
            return (
              <div key={index1} className={classes.files}>
                {item.img !== null ? (
                  <img alt="img" src={arrImg[item.img].url} />
                ) : null}
                <span className={classes.fileName}>{item.file.name}</span>
                <img
                  alt="img"
                  className={classes.krest}
                  onClick={() => deleteFile(item.file.name)}
                  src={krestik}
                />
              </div>
            );
          })}
        {objErr &&
          objErr.map((item) => {
            if (item == "files_research_kg") {
              return (
                <span className={classes.err}>
                  Жок дегенде бир изилдөө жүктөп алыңыз!!!
                </span>
              );
            }
          })}
        <div className={classes.blockBtn}>
          <input
            className={classes.inputFile}
            onChange={(e) => handleImageChange(e)}
            name="file"
            type="file"
            id="input__file"
            multiple
          ></input>
          <label for="input__file" className={classes.addFiles}>
            Документ кошуу
          </label>
        </div>
      </div>
      <div className={classes.topBlock}>
        <span>Изилдөө демо файлы</span>
      </div>
      <div className={classes.files}>
        {data.file_demo_kg ? (
          <>
            <img alt="img" src={jpeg} />
            <span className={classes.fileName}>{data.file_demo_kg.name}</span>
            <img
              alt="img"
              className={classes.krest}
              onClick={() => deleteFileDemo()}
              src={krestik}
            />
          </>
        ) : (
          <>
            <img alt="img" src={pdf} />
            <input
              className={classes.inputFile}
              onChange={(e) => handleImageChangeDemo(e)}
              name="file"
              type="file"
              id="input__file2"
              multiple
            ></input>
            <label for="input__file2" className={classes.fileName}>
              Документ кошуу
            </label>
          </>
        )}
      </div>
      {objErr &&
        objErr.map((item) => {
          if (item == "file_demo_kg") {
            return (
              <span className={classes.err}>
                Жок дегенде бир изилдөө жүктөп алыңыз!!!
              </span>
            );
          }
        })}
      <div className={classes.topBlock}>
        <span>Барактар саны</span>
      </div>
      <input
        type="number"
        className={classes.inputNumberPage}
        placeholder="Барактар саны"
        value={data.pages_kg || ""}
        onChange={(e) => changePage(e)}
      />
      {objErr &&
        objErr.map((item) => {
          if (item == "pages_kg") {
            return (
              <span className={classes.err}>
                Жок дегенде бир изилдөө жүктөп алыңыз!!!
              </span>
            );
          }
        })}
      <div className={classes.topBlock}>
        <span>Мазмунун</span>
      </div>
      <div className={classes.titleContent}>
        <div className={classes.leftBlock}>
          <span className={classes.contentTitle}>№</span>
        </div>
        <div className={classes.centerBlock}>
          <span className={classes.contentTitle}>Бөлүмдүн аталышы</span>
        </div>
        <div className={classes.rightBlock}>
        <span className={classes.contentTitleNone}>Бар</span>
          <span className={classes.contentTitle1}>Барак</span>
        </div>
      </div>

      {data.content_kg.map((field, idx) => {
        return (
          <div className={classes.rowInputs} key={`${field}-${idx}`}>
            <span className={classes.number}>{idx + 1}</span>
            <input
              className={classes.centerInput}
              type="text"
              
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <input
              className={classes.rightInput}
              type="number"
           
              value={field.page || ""}
              onChange={(e) => handleChangePage(idx, e)}
            />
            <button
              type="button"
              className={classes.deleteInput}
              onClick={() => handleRemove(idx)}
            >
              X
            </button>
          </div>
        );
      })}
      <button
        className={classes.addInput}
        type="button"
        onClick={() => handleAdd()}
      >
        +
      </button>

      <div className={classes.blockBtn1}>
        <button className={classes.btn} onClick={() => further(3,true)}>
          Кийинки
        </button>
      </div>
    </div>
  );
};
export default Step2Kg;
