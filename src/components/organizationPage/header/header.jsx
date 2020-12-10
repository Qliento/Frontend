import React, { useState } from "react";
import classes from "./header.module.css";
import photo1 from "./img/photo.png";
import logo from "./img/logo.png";
import noPhoto from "./img/noPhoto.jpg"
import EditProfile from "../editPrifile/editProfile";
import EditPassword from "../editPrifile/editPassword";
import { useSelector } from "react-redux";

const Header = ({ data, onModal }) => {
  const [edit, setEdit] = useState(false);
  const [edit2, setEdit2] = useState(false);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");

  return (

<>
{data?<>
    <div className={classes.blockWrapp}>
        <div className={classes.topItem}>
          <img alt="img" className={classes.logo1} src={logo} />
        </div>
        <div className={classes.headerItem}>
          <div className={classes.bloc}>
            <div className={classes.leftBlock}>
              <span className={classes.title}>
                {data.admin_status.name && data.admin_status.name}{" "}
                {data.admin_status.surname && data.admin_status.surname}
              </span>
              <span className={classes.desc}>{data && data.position}</span>
              <span className={classes.desc}>{data && data.logo}</span>
            </div>
            <div className={classes.centerBlock}>
              <span className={classes.titleNumber}>
                {data && data.admin_status.phone_number}
              </span>
              <span className={classes.desc}>
                {data && data.admin_status.email}
              </span>
              <span></span>
            </div>
            <div className={classes.rightBlock}>
              {(language == 1 || language == undefined) && (
                <span className={classes.redact} onClick={() => onModal()}>
                  Редактировать
                </span>
              )}
              {language == 2 && (
                <span className={classes.redact} onClick={() => onModal()}>
                  Edit
                </span>
              )}
              {language == 3 && (
                <span className={classes.redact} onClick={() => onModal()}>
                  Түзөтүү
                </span>
              )}
            </div>
          </div>
        </div>
        <img alt="img" className={classes.photo} src={data.admin_status.photo?'https://qliento.com' + data.admin_status.photo:noPhoto} />
      </div>
</>:<></>}
      
    </>

    
  );
};
export default Header;
