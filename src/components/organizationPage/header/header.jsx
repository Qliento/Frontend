import React,{useState} from "react"
import classes from "./header.module.css"
import photo1 from "./img/photo.png"
import logo from "./img/logo.png"
import EditProfile from "../editPrifile/editProfile"
import EditPassword from "../editPrifile/editPassword"


const Header=()=>{
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
                        <span className={classes.title}>Турдубеков Акназар</span>
                        <span className={classes.desc}>Директор</span>
                        <span className={classes.desc}>ОсОО “Бимед Фарм”</span>
                    </div>
                    <div className={classes.centerBlock}>
                        <span className={classes.titleNumber}>+996 555 444 222</span>
                        <span className={classes.desc}>aknazar_t@gmail.com</span>
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
            <EditProfile onModalPassword={(e)=>setEdit2(e)} changeState={(e)=>setEdit(e)} edit={edit}/>
            <EditPassword edit={edit2} changeState2={(e)=>setEdit2(e)}/>
            </>
        }
        </>
    )
}
export default Header;