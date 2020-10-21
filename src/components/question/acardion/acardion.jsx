import React, { useState, useEffect } from "react";
import "./acardion.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import strelka1 from "./img/1.png";
import strelka2 from "./img/2.png";
import classes from "./acardion.module.css";
import { getQuestion } from "../../../redux/actions/getQuestion/getQuestion";
const arr = [
  {
    uuid: 1,
    heading: "Вы даете гарантии?",
    content:
      "Идейные соображения высшего порядка, а также реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании соответствующий условий активизации.",
  },
  {
    uuid: 2,
    heading: "Вы даете гарантии?",
    content:
      "Идейные соображения высшего порядка, а также реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании соответствующий условий активизации.",
  },
  {
    uuid: 3,
    heading: "Вы даете гарантии?",
    content:
      "Идейные соображения высшего порядка, а также реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании соответствующий условий активизации.",
  },
];
const Acardion = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ListQuestion.arrayQuestion);

  useEffect(() => {
    dispatch(getQuestion());
  }, []);

  const [active, setActive] = useState(1);

  console.log(data);
  return (
    <>
      {data && (
        <Accordion preExpanded={[1]}>
          {data.map((item) => (
            <AccordionItem uuid={item.id} key={item.id}>
              <AccordionItemHeading onClick={() => setActive(item.id)}>
                <AccordionItemButton>
                  <div className="btnGreen">
                    <img
                      alt="img"
                      src={active === item.id ? strelka2 : strelka1}
                    />
                  </div>
                  {item.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.answer}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </>
  );
};
export default Acardion;
