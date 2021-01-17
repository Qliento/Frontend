import React, { useState, useEffect } from "react";

import Tabs from "../tabs/tabs";
import classes from "./step2.module.css";
import pdf from "./img/pdf.png";
import xls from "./img/xls.png";
import jpeg from "./img/jpeg.png";
import jpg from "./img/jpg.png";
import png from "./img/png.png";
import xlsx from "./img/xlsx.png";
import ppt from "./img/ppt.png";
import csv from "./img/csv.png";
import krestik from "./img/download 1.png";
import { Link } from "react-router-dom";
import Step2Ru from "./lang/ru";
import Step2Kg from "./lang/kg";
import Step2En from "./lang/en";
import { useDispatch, useSelector } from "react-redux";
import { dataStep2 } from "../../../../redux/actions/organizationPage/action";

const Step2 = ({ isLang, isStep2 ,cahngeArrLang}) => {
  const dataRedux = useSelector((state) => state.ResearchList.dataStep2);
  const [files, setFiles] = useState([]);
  const [fields, setFields] = useState([{ value: null, page: null }]);
  const [objErr, setObjErr] = useState([]);
  const [triger, setTriger] = useState(true);
  const [lang, setLang] = useState(isLang.filter((number) => number > 0)[0]);
  const [errorPage,setErrorPage]=useState()
  const [pages,setPages]=useState(dataRedux.pages?dataRedux.pages:'')
  console.log(lang);
 
  const [data, setData] = useState(
    dataRedux.data
      ? dataRedux.data
      : {
          files_research: [],
          file_demo: null,
        
          content: [{ value: null, page: null }],
        }
  );
  const [dataKg, setDataKg] = useState(
    dataRedux.dataKg
      ? dataRedux.dataKg
      : {
          files_research_kg: [],
          file_demo_kg: null,
          
          content_kg: [{ value: null, page: null }],
        }
  );
  const [data_en, setData_en] = useState(
    dataRedux.data_en
      ? dataRedux.data_en
      : {
          files_research_en: [],
          file_demo_en: null,
         
          content_en: [{ value: null, page: null }],
        }
  );

  const arrImg = [
    { url: pdf, img: "pdf" },
    { url: xls, img: "xls" },
    { url: jpeg, img: "jpeg" },
    { url: png, img: "png" },
    { url: xlsx, img: "xlsx" },
    { url: ppt, img: "ppt" },
    { url: csv, img: "csv" },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    checkForm();
    dispatch(dataStep2({ data, dataKg, data_en,pages }));
  }, [data, dataKg, data_en,pages]);
  let count = 0;
  const checkForm = () => {
  
    if (lang === 1) {
      for (const item in data) {
        if (data[item] == null || data[item].length == 0) {
          count += 1;
        }
      }
    }
    if (lang === 2) {
      for (const item in dataKg) {
        if (dataKg[item] == null || dataKg[item].length === 0) {
          count += 1;
        }
      }
    }
    if (lang === 3) {
      for (const item in data_en) {
        if (data_en[item] == null || data_en[item].length === 0) {
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
  const pushErr = (e) => {
    setObjErr(e);
  };


  const isModal = (is) => {
    if(!pages){
      
      setErrorPage(true)
    }
    else{
      setErrorPage(false)
    }
    
    let arr = [];
    if (is) {
      setObjErr([]);
    }
    if (lang === 1) {
      for (const item in data) {
        if (data[item] == null || data[item].length == 0) {
          arr.push(item);
          pushErr(arr);
        }
      }
    }
    if (lang === 2) {
      for (const item in dataKg) {
        if (dataKg[item] == null || dataKg[item].length == 0) {
          arr.push(item);
          pushErr(arr);
        }
      }
    }
    if (lang === 3) {
      for (const item in data_en) {
        if (data_en[item] == null || data_en[item].length == 0) {
          arr.push(item);
          pushErr(arr);
        }
      }
    }
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    let index = null;
    let filetype = file.name.split(".").pop();
  

    if (files) {
      arrImg.forEach((element, idx) => {
        if (element.img == filetype) {
          index = idx;
        }
      });
    }
    reader.onloadend = () => {
      if (index!==null) {
        if (lang === 1) {
          setData({
            ...data,
            files_research: [
              ...data.files_research,
              {
                file: file,
                img: index,
              },
            ],
          });
        }
        if (lang === 2) {
          setDataKg({
            ...dataKg,
            files_research_kg: [
              ...dataKg.files_research_kg,
              {
                file: file,
                img: index,
              },
            ],
          });
        }
        if (lang === 3) {
          setData_en({
            ...data_en,
            files_research_en: [
              ...data_en.files_research_en,
              {
                file: file,
                img: index,
              },
            ],
          });
        }
      }
    };

    // console.log(files[0].img==arrImg[4])
    reader.readAsDataURL(file);
  };

  const deleteFile = (e) => {
    if (lang === 1) {
      setData({
        ...data,
        files_research: data.files_research.filter((item) => {
          return item.file.name !== e;
        }),
      });

      if (data.files_research.length == 1) {
        setData({
          ...data,
          files_research: [],
        });
      }
    }
    if (lang === 2) {
      setDataKg({
        ...dataKg,
        files_research_kg: dataKg.files_research_kg.filter((item) => {
          return item.file.name !== e;
        }),
      });

      if (dataKg.files_research_kg.length == 1) {
        setDataKg({
          ...dataKg,
          files_research_kg: [],
        });
      }
    }
    if (lang === 3) {
      setData_en({
        ...data_en,
        files_research_en: data_en.files_research_en.filter((item) => {
          return item.file.name !== e;
        }),
      });

      if (data_en.files_research_en.length == 1) {
        setData_en({
          ...data_en,
          files_research_en: [],
        });
      }
    }
  };
  const handleImageChangeDemo = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    let filetype = file.name.split(".").pop();
    reader.onloadend = () => {
      if (lang === 1 && filetype=="pdf") {
        setData({
          ...data,
          file_demo: file,
        });
      }
      if (lang === 2 && filetype=="pdf") {
        setDataKg({
          ...dataKg,
          file_demo_kg: file,
        });
      }
      if (lang === 3 && filetype=="pdf") {
        setData_en({
          ...data_en,
          file_demo_en: file,
        });
      }
    };


    reader.readAsDataURL(file);
  };
  const deleteFileDemo = () => {
    if (lang === 1) {
      setData({
        ...data,
        file_demo: null,
      });
    }
    if (lang === 2) {
      setDataKg({
        ...dataKg,
        file_demo_kg: null,
      });
    }
    if (lang === 3) {
      setData_en({
        ...data_en,
        file_demo_en: null,
      });
    }
  };

  function handleChange(i, event) {
    if (lang === 1) {
      const values = [...data.content];
      values[i].value = event.target.value;
      setData({
        ...data,
        content: values,
      });
    }
    if (lang === 2) {
      const values = [...dataKg.content_kg];
      values[i].value = event.target.value;
      setDataKg({
        ...dataKg,
        content_kg: values,
      });
    }
    if (lang === 3) {
      const values = [...data_en.content_en];
      values[i].value = event.target.value;
      setData_en({
        ...data_en,
        content_en: values,
      });
    }
  }
  function handleChangePage(i, event) {
    if (lang === 1) {
      const pages = [...data.content];
      pages[i].page = event.target.value;

      setData({
        ...data,
        content: pages,
      });
    }
    if (lang === 2) {
      const pages = [...dataKg.content_kg];
      pages[i].page = event.target.value;

      setDataKg({
        ...dataKg,
        content_kg: pages,
      });
    }
    if (lang === 3) {
      const pages = [...data_en.content_en];
      pages[i].page = event.target.value;

      setData_en({
        ...data_en,
        content_en: pages,
      });
    }
  }

  function handleAdd() {
    if (lang === 1) {
      const values = [...data.content];
      values.push({ value: null, page: null });
      setData({
        ...data,
        content: values,
      });
    }
    if (lang === 2) {
      const values = [...dataKg.content_kg];
      values.push({ value: null, page: null });
      setDataKg({
        ...dataKg,
        content_kg: values,
      });
    }
    if (lang === 3) {
      const values = [...data_en.content_en];
      values.push({ value: null, page: null });
      setData_en({
        ...data_en,
        content_en: values,
      });
    }
  }

  function handleRemove(i) {
    if (lang === 1) {
      if (data.content.length > 1) {
        const values = [...data.content];
        values.splice(i, 1);

        setData({
          ...data,
          content: values,
        });
      }
    }
    if (lang === 2) {
      if (dataKg.content_kg.length > 1) {
        const values = [...dataKg.content_kg];
        values.splice(i, 1);

        setDataKg({
          ...dataKg,
          content_kg: values,
        });
      }
    }
    if (lang === 3) {
      if (data_en.content_en.length > 1) {
        const values = [...data_en.content_en];
        values.splice(i, 1);

        setData_en({
          ...data_en,
          content_en: values,
        });
      }
    }
  }

  const changeLang = (e) => {
    setLang(e);
  };
  const changePage = (e) => {
    setPages(e.target.value)
    console.log(e.target.value)
    
    if(pages){
      setErrorPage(false)
      console.log("1")
    }
    else{
      setErrorPage(true)
      console.log("2")
    }
  };

  const further = (e, a) => {
    let from = 0;
    const arrLang1 = [];
    from += Object.values(data).every((o) => o !== null || o !== "" || o !== [])
      ? 1
      : 0;
    from += Object.values(dataKg).every(
      (o) => o !== null || o !== "" || o !== []
    )
      ? 1
      : 0;
    from += Object.values(data_en).every(
      (o) => o !== null || o !== "" || o !== []
    )
      ? 1
      : 0;

    arrLang1.push(
      Object.values(data).every((o) => o !== null || o !== "" || o !== [])
        ? 1
        : 0
    );
    arrLang1.push(
      Object.values(dataKg).every((o) => o !== null || o !== "" || o !== [])
        ? 2
        : 0
    );
    arrLang1.push(
      Object.values(data_en).every((o) => o !== null || o !== "" || o !== [])
        ? 3
        : 0
    );

    if (triger && from > 0 && pages) {
      if (a) {
        if (JSON.stringify(arrLang1) == JSON.stringify(isLang)) {
          isStep2(e);
          isModal();
        }
      } else {
        isStep2(e);
        isModal(true);
        cahngeArrLang()
      }
    } else {
      isStep2(2);
      isModal();
    }
  };

  console.log("step2", pages);
  return (
    <div className={classes.step1}>
      <Tabs
        changeLang={changeLang}
        triger={triger}
        isLang={isLang}
        isModal={isModal}
      />
      {lang === 1 ? (
        <Step2Ru
          handleImageChange={handleImageChange}
          handleImageChangeDemo={handleImageChangeDemo}
          changePage={changePage}
          deleteFileDemo={deleteFileDemo}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          data={data}
          errorPage={errorPage}
          pages={pages}
          arrImg={arrImg}
          deleteFile={deleteFile}
          objErr={objErr}
          further={further}
        />
      ) : null}
      {lang === 2 ? (
        <Step2Kg
          handleImageChange={handleImageChange}
          handleImageChangeDemo={handleImageChangeDemo}
          changePage={changePage}
          deleteFileDemo={deleteFileDemo}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          data={dataKg}
          errorPage={errorPage}
          pages={pages}
          arrImg={arrImg}
          deleteFile={deleteFile}
          objErr={objErr}
          further={further}
        />
      ) : null}
      {lang === 3 ? (
        <Step2En
          handleImageChange={handleImageChange}
          handleImageChangeDemo={handleImageChangeDemo}
          changePage={changePage}
          deleteFileDemo={deleteFileDemo}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          data={data_en}
          errorPage={errorPage}
          pages={pages}
          arrImg={arrImg}
          deleteFile={deleteFile}
          objErr={objErr}
          further={further}
        />
      ) : null}
    </div>
  );
};

export default Step2;
