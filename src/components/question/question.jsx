import React from "react";
import { Link } from "react-router-dom";
import Acardion from "./acardion/acardion";
import Form from "./form/form";
import classes from "./question.module.css";
import {useSelector} from 'react-redux';

const QuestionPage = () => {
  // const language = useSelector(state => state.langReducer.lang);
  const language = localStorage.getItem('lang');
  return (
    <div className={classes.container}>
      <div className={classes.links}>
        {(language == 1 || language == undefined) && <>
          <Link to="/">Главная /</Link>
        <Link to=""> Вопросы ответы</Link>
        </>}
        {language == 2 && <>
          <Link to="/">Home /</Link>
        <Link to=""> Q&A</Link>
        </>}
        {language == 3 && <>
          <Link to="/">Башкы бет /</Link>
        <Link to=""> Суроолор жана жооптор</Link>
        </>}
      </div>
        {(language == 1 || language == undefined) && <span className={classes.title}>Форма обратной связи</span>}
        {language == 2 && <span className={classes.title}>Feedback form</span>}
        {language == 3 && <span className={classes.title}>Байланыш формасы</span>}
      <Form />
      <div className={classes.blockTitle}>
        {(language == 1 || language == undefined) && <span className={classes.titleQuestion}>Часто задаваемые вопросы</span>}
        {language == 2 && <span className={classes.titleQuestion}>FAQ</span>}
        {language == 3 && <span className={classes.titleQuestion}>Көп берилүүчү суроолор</span>}
      </div>
      <div className={classes.questionBlock}>
        <Acardion />
      </div>
    </div>
  );
};
export default QuestionPage;
