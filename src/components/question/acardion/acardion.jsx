import React,{useState} from "react";
import "./acardion.css"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import strelka1 from "./img/1.png"
import strelka2 from "./img/2.png"
import classes from "./acardion.module.css"
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
    const [active,setActive]=useState(arr[0].uuid)

  return (
    <Accordion preExpanded={[arr[0].uuid]}>
      {arr.map((item) => (
        <AccordionItem uuid={item.uuid} key={item.uuid}>
          <AccordionItemHeading onClick={()=>setActive(item.uuid)}>
      <AccordionItemButton><div className="btnGreen"><img alt="img" src={active === item.uuid? strelka2 : strelka1}/></div>{item.heading}</AccordionItemButton>
        
          </AccordionItemHeading>
          <AccordionItemPanel>{item.content}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default Acardion;
