import React from "react";
import { Link } from "react-router-dom";
import Acardion from "./acardion/acardion";
import Form from "./form/form";
import classes from "./question.module.css";

const QuestionPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.links}>
        <Link to="/">Главная /</Link>
        <Link to=""> Вопросы ответы</Link>
      </div>
      <span className={classes.title}>Форма обратной связи</span>
      <Form />
      <div className={classes.blockTitle}>
        <span className={classes.titleQuestion}>Часто задаваемые вопросы</span>
      </div>
      <div className={classes.questionBlock}>
        <Acardion />
      </div>
    </div>
  );
};
export default QuestionPage;
