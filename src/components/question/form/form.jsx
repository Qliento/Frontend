import React,{useState} from "react"
import classes from "./form.module.css"
import { useForm } from "react-hook-form";

const Form=()=>{
    const [fio,setFio]=useState("");
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [question,setQuestion]=useState("")
    return(
        <form className={classes.form}>
            <div className={classes.leftColumn}>
                <div className={classes.inputs}>
                    <label>ФИО*</label>
                    <input type="text"
                    className={classes.input}
                    placeholder="Ваш ФИО"
                    onChange={(e)=>setFio(e.target.value)}
                   />
                </div>
                <div className={classes.inputs}>
                    <label>Название организации</label>
                    <input type="text"
                    className={classes.input}
                    placeholder="Название организации"/>
                </div>
                <div className={classes.inputs}>
                    <label>Почта*</label>
                    <input type="text"
                    className={classes.input}
                    placeholder="Ваш email"/>
                </div>
                <div className={classes.inputs}>
                    <label>Телефон*</label>
                    <input type="text"
                    className={classes.input}
                    placeholder="+996 ___ - __ - __ - __"/>
                </div>

            </div>
            <div className={classes.rightColumn}>
            <div className={classes.inputs}>
                    <label>Ваш вопрос</label>
                    <textarea type="text"
                    className={classes.inputTextarea}
                    placeholder="Ваш вопрос"/>
                </div>
                <button type="submit" className={classes.btn}>Отправить</button>
            </div>
        </form>
    )
}
export default Form;