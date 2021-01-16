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

const Step2En = ({
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
  further,
  pages,
  errorPage
}) => {
    console.log(objErr)
  return (
    <div className={classes.form}>
      <div className={classes.blockTitle}>
        <span className={classes.title}>Research</span>
        <div className={classes.blockStep}>
          <span className={classes.step11} onClick={()=>further(1)}>Step 1</span>
          <span className={classes.step11}>Step 2</span>
          <span className={classes.step} onClick={() => further(3,true)}>Step 3</span>
        </div>
      </div>
      <div className={classes.topBlock}>
        <span>File of research</span>
      </div>
      <div className={classes.blockFiles}>
        {data.files_research_en &&
          data.files_research_en.map((item, index1) => {
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
            if (item == "files_research_en") {
              return (
                <span className={classes.err}>
                  Download at least one research!!!
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
            Add document
          </label>
        </div>
      </div>
      <div className={classes.topBlock}>
        <span>File of the demo version of research</span>
      </div>
      <div className={classes.files}>
        {data.file_demo_en ? (
          <>
            <img alt="img" src={pdf} />
            <span className={classes.fileName}>{data.file_demo_en.name}</span>
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
              add document
            </label>
          </>
        )}
      </div>
      {objErr &&
          objErr.map((item) => {
            if (item == "file_demo_en") {
              return (
                <span className={classes.err}>
                  Download at least one research!!!
                </span>
              );
            }
          })}
      <div className={classes.topBlock}>
        <span>Number of pages</span>
      </div>
      <input
        type="number"
        className={classes.inputNumberPage}
        placeholder="Amoung of pages"
        value={pages || ""}
        onChange={ changePage}
      />
      {errorPage &&

                <span className={classes.err}>
                  Download at least one research!!!
                </span>
}
      <div className={classes.topBlock}>
        <span>Title</span>
      </div>
      <div className={classes.titleContent}>
        <div className={classes.leftBlock}>
          <span className={classes.contentTitle}>№</span>
        </div>
        <div className={classes.centerBlock}>
          <span className={classes.contentTitle}>Name of chapter</span>
        </div>
        <div className={classes.rightBlock}>
          <span className={classes.contentTitleNone}>Pag</span>
          <span className={classes.contentTitle1}>Pages</span>
        </div>
      </div>

      {data.content_en.map((field, idx) => {
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
      <button className={classes.btn} onClick={() => further(3,true)}>Next</button>
      </div>
    </div>
  );
};
export default Step2En;
