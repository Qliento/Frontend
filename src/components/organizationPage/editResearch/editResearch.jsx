import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import classes from "./edirResearch.module.css";
import img from "./img/Frame 72 (2).png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UbdateResearch } from "../../../redux/actions/organizationPage/action";
import ModalChangeResearch from "./modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "auto",
    width: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const EditModal = ({ edit, changeState, id }) => {
  // useEffect(() => {
  //   dispatch(errorMesseg());
  // }, []);
  const { handleSubmit, register, errors } = useForm();
  const [isModal, SetIsModal] = useState(true);

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
    dispatch(UbdateResearch(values, id));
  };
  return (
    <>
      <div className={classes.editResearch}>
        <form className={classes.modal} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.blockImg}>
            <img
              alt="img"
              className={classes.img}
              src={img}
              onClick={() => changeState(false)}
            />
          </div>
          <div className={classes.blockInputs}>
            <span className={classes.title}>Скидочная цена</span>
            <input
              className={classes.input}
              type="number"
              name="new_price"
              placeholder="Цена"
              ref={register({
                validate: (new_price) => new_price && new_price.length > 0,
              })}
            />
            {errors.new_price && (
              <span className={classes.error}>
                Это поле не может быть пустым
              </span>
            )}
          </div>
          <button type="submit" className={classes.btn}>
            Сохранить
          </button>
        </form>
      </div>
      <ModalChangeResearch />
    </>
  );
};
export default EditModal;
