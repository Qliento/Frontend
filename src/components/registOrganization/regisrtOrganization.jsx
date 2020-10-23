import React,{useState ,useEffect} from "react";
import { useForm } from "react-hook-form";
import classes from "./regisrtOrganization.module.css";
import { useDispatch, useSelector } from "react-redux";
import cancel from "./img/cancel.png";
import { Link } from "react-router-dom";
import capcha from "./img/capcha.png";
import noVis from "./img/noVisibility.png"
import vis from "./img/visibility 1.png"
import { error, registrationOrg } from "../../redux/actions/registrationOrg/registrationOrg";
const RegistOrganization = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  //const data = useSelector((state) => state.AboutUs.arrayData);
  useEffect(()=>{
dispatch(error())
  },[])
  const onSubmit = (values) =>{
    
    if(values.repeatPassword !== values.password){
      setErr(true)
    }
    else{
      setErr(false);
      console.log("hi");
      console.log(values);
      dispatch(registrationOrg(values));
    }
  } 
  const[err,setErr]=useState(false)
  const [visibility,setVisibility]=useState(false)
  const [visibility2,setVisibility2]=useState(false)
  return (
    <div className={classes.regist}>
      <div className={classes.blockRegist}>
        <div className={classes.blockTop}>
          <div className={classes.canceling}>
            <Link to="/">
              <img alt="img" src={cancel} className={classes.img} />
            </Link>
          </div>
          <div className={classes.blockTitle}>
            <span className={classes.title}>Регистрация</span>
            <span className={classes.step}>Шаг 2</span>
          </div>
        </div>
        <form className={classes.blockForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.blockInput}>
            <label>Название организации</label>
            <input
              name="name2"
              className={classes.inputs}
              placeholder="Название"
              type="text"
              ref={register({
                validate: (name2) => name2 && name2.length>2,
              })}
            />
            {errors.name2 && (
              <span className={classes.error}>Не корректно велли данные</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>Имя</label>
            <input
              name="name"
              className={classes.inputs}
              placeholder="Ваше имя"
              type="text"
              ref={register({
                validate: (name) => name && name.length > 2,
              })}
            />
            {errors.name && (
              <span className={classes.error}>Не корректно велли данные</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>Фамилия</label>
            <input
              name="lastName"
              className={classes.inputs}
              placeholder="Ваша фамилия"
              type="text"
              ref={register({
                validate: (lastName) => lastName && lastName.length > 2,
              })}
            />
            {errors.lastName && (
              <span className={classes.error}>Не корректно велли данные</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>E-mail</label>
            <input
              name="email"
              className={classes.inputs}
              placeholder="Ваш email"
              type="text"
              ref={register({
                required: "Это поле обязательное",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный адрес электронной почты",
                },
              })}
            />
            {errors.email && (
              <span className={classes.error}>{errors.email.message}</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>Номер телефона</label>
            <input
              name="phone"
              className={classes.inputs}
              placeholder="+996 (___) __ - __ - __"
              type="number"
              ref={register({
                validate: (phone) => phone && phone.length > 2,
              })}
            />
            {errors.phone && (
              <span className={classes.error}>Не корректно велли данные</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>Пароль</label>
            <div className={classes.blockVisibil}>
            <input
              name="password"
              className={classes.inputs1}
              placeholder="Ваш пароль"
              type={visibility? "text":"password"}
              ref={register({
                validate: (password) => password && password.length > 6,
              })}
            />
            <img className={classes.imgVisib} alt="img" onClick={()=>setVisibility(!visibility)} src={visibility? vis : noVis} />
            </div>
            {errors.password && (
              <span className={classes.error}>Пароль менее 6 символов</span>
            )}
              {
              err && (
                <span className={classes.error}>Пароли не совподают</span>
              )
            }
          </div>
          <div className={classes.blockInput}>
            <label>Повторит пароль</label>
            <div className={classes.blockVisibil}>
            <input
              name="repeatPassword"
              className={classes.inputs1}
              placeholder="Ваш пароль"
              type={visibility2? "text":"password"}
              ref={register({
                validate: (repeatPassword) =>
                  repeatPassword && repeatPassword.length > 6,
              })}
            />
             <img className={classes.imgVisib} alt="img" onClick={()=>setVisibility2(!visibility2)} src={visibility2? vis : noVis}/>
            </div>
          
            {errors.repeatPasssword && (
              <span className={classes.error}>Пароль менее 6 символов</span>
            )}
            {
              err && (
                <span className={classes.error}>Пароли не совподают</span>
              )
            }
          </div>
          <div className={classes.blockChecket}>
            <input
              className={classes.checkbox}
              type="checkbox"
              name="checkbox"
              required
            />
            <div className={classes.text}>
              <span>Подтверждаю, что ознакомлен и согласен с </span>
              <span>Пользовательским соглашением</span>
            </div>
          </div>
          <div className={classes.blockCapcha}>
            <img alt="img" src={capcha} className={classes.imgCapcha} />
            <input
              name="capcha"
              className={classes.inputCapcha}
              placeholder="Введите текст "
            />
          </div>
          <button type="submit" className={classes.btnRegist}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegistOrganization;
