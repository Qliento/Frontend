import React,{useState} from "react"
import classes from "./header.module.css"
import photo1 from "./img/photo.png"
import logo from "./img/logo.png"
import EditProfile from "../editPrifile/editProfile"
import EditPassword from "../editPrifile/editPassword"


const Header=({data})=>{
    const [edit,setEdit]=useState(false)
    const [edit2,setEdit2]=useState(false)
    return(
        <>
        <div className={classes.blockWrapp}>
            <div className={classes.topItem}>
                <img alt="img" className={classes.logo} src={logo}/>
            </div>
            <div className={classes.headerItem}>
                <div className={classes.bloc}>
                    <div className={classes.leftBlock}>
    <span className={classes.title}>{data&&data.admin_status.name}{" "}{data&&data.admin_status.surname}</span>
    <span className={classes.desc}>{data&&data.position}</span>
    <span className={classes.desc}>{data&&data.logo}</span>
                    </div>
                    <div className={classes.centerBlock}>
    <span className={classes.titleNumber}>{data&&data.admin_status.phone_number}</span>
    <span className={classes.desc}>{data&&data.admin_status.email}</span>
                        <span></span>
                    </div>
                    <div className={classes.rightBlock}>
                        <span className={classes.redact} onClick={()=>setEdit(true)}>Редактировать</span>
                    </div>
                </div>
            </div>
            <img alt="" className={classes.photo} src={photo1} />
        </div>
        {
            <>
            <EditProfile onModalPassword={(e)=>setEdit2(e)} data={data&&data} changeState={(e)=>setEdit(e)} edit={edit}/>
            <EditPassword edit={edit2} changeState2={(e)=>setEdit2(e)}/>
            </>
        }
        </>
    )
}
export default Header;