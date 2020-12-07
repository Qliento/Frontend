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

const Step2Ru = ({
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
        <span className={classes.title}>Исследование</span>
        <div className={classes.blockStep}>
          <span className={classes.step11} onClick={() => further(1)}>
            Шаг 1
          </span>
          <span className={classes.step11}>Шаг 2</span>
          <span className={classes.step} onClick={() => further(3,true)}>Шаг 3</span>
        </div>
      </div>
      <div className={classes.topBlock}>
        <span>Файл исследования</span>
      </div>
      <div className={classes.blockFiles}>
        {data.files_research &&
          data.files_research.map((item, index1) => {
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
            if (item == "files_research") {
              return (
                <span className={classes.err}>
                  Загрузите хотя-бы одно исследование!!!
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
            Добавить документ
          </label>
        </div>
      </div>
      <div className={classes.topBlock}>
        <span>Файл демо версии исследования</span>
      </div>
      <div className={classes.files}>
        {data.file_demo ? (
          <>
            <img alt="img" src={jpeg} />
            <span className={classes.fileName}>{data.file_demo.name}</span>
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
              Добавить документ
            </label>
          </>
        )}
      </div>
      {objErr &&
        objErr.map((item) => {
          if (item == "file_demo") {
            return (
              <span className={classes.err}>Загрузите файл демо версию!!!</span>
            );
          }
        })}
      <div className={classes.topBlock}>
        <span>Количество страниц</span>
      </div>
      <input
        type="text"
        className={classes.inputNumberPage}
        placeholder="количество страниц"
        value={data.pages || ""}
        onChange={(e) => changePage(e)}
      />
      {objErr &&
        objErr.map((item) => {
          if (item == "pages") {
            return <span className={classes.err}>Добавьте страницы!!!</span>;
          }
        })}
      <div className={classes.topBlock}>
        <span>Оглавление</span>
      </div>
      <div className={classes.titleContent}>
        <div className={classes.leftBlock}>
          <span className={classes.contentTitle}>№</span>
        </div>
        <div className={classes.centerBlock}>
          <span className={classes.contentTitle}>Название главы</span>
        </div>
        <div className={classes.rightBlock}>
          <span className={classes.contentTitle}>Страница</span>
        </div>
      </div>

      {data.content.map((field, idx) => {
        return (
          <div className={classes.rowInputs} key={`${field}-${idx}`}>
            <span className={classes.number}>{idx + 1}</span>
            <input
              className={classes.centerInput}
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <input
              className={classes.rightInput}
              type="text"
              placeholder="Enter text"
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

          <button className={classes.btn} onClick={() => further(3,true)}>Далее</button>
    
      </div>
    </div>
  );
};
export default Step2Ru;
