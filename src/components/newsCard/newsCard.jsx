import React, { useState ,useEffect} from "react";
import st from "./newsCard.module.css";
import {useSelector} from 'react-redux';

// import f from "./img/f.png";
// import in1 from "./img/in.png";
// import twiter from "./img/twiter.png";
// import vk from "./img/vk.png";
// import bg from "./img/bg.png";
// import { Link } from "react-router-dom";

const NewsCard = ({ key,data }) => {
  // const language = useSelector(state => state.langReducer.lang); 
  const language = localStorage.getItem('lang');
  const [cardId, setCardId] = useState("");
  const [heightBlock,setHeightBlock]=useState('495px');
  const text =" Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий позволяет оценить значение систем массового участия.Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий позволяет оценить значение систем массового участия.Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий позволяет оценить значение систем массового участия.Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий позволяет оценить значение систем массового участия.Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий"
const str=""
  useEffect(() => {
    window.Ya.share2('ya', {
        theme: { services: 'vkontakte,facebook,telegram,linkedin,twitter',
        size: 'l',
    },
      });
    })


  const showHidePara =(h)=>{
    setCardId(h)

  }
  return (
    <div className={cardId !==""? st.analitic_card1:st.analitic_card}>
      <div className={cardId !==""? st.blockImg1:st.blockImg}>
        <img alt="img" src={data.image} className={st.img} />
        <div className={st.buttomBlock}>
          {(language == 1 || language == undefined) && <span className={st.buttomBlockTitle}>Поделиться в соц сетях</span>}
          {language == 2 && <span className={st.buttomBlockTitle}>Share in social networks</span>}
          {language == 3 && <span className={st.buttomBlockTitle}>Социалдык тармактарда бөлүшүү</span>}
          <div className={st.icons}>
            <div id="ya"></div>
          </div>
        </div>
      </div>
      <div className={cardId==key?st.content1:st.content}>
         <span className={st.date}>{data.date}</span>
        <span className={st.title}>
         {data.name}
        </span>
        <span className={cardId !==""? st.description1 :st.description}>
         {data.description}
        </span>
        {cardId == key ? (
          <>
          {(language == 1 || language == undefined) && <button className={st.btn} onClick={() => showHidePara("")}>Закрыть</button>}
          {language == 2 && <button className={st.btn} onClick={() => showHidePara("")}>Close</button>}
          {language == 3 && <button className={st.btn} onClick={() => showHidePara("")}>Жабуу</button>}</>
         ) : (<>
          {(language == 1 || language == undefined) && <button className={st.btn} onClick={() => showHidePara(key)}>Развернуть</button>}
          {language == 2 && <button className={st.btn} onClick={() => showHidePara(key)}>Expand</button>}
          {language == 3 && <button className={st.btn} onClick={() => showHidePara(key)}>Кеңейтүү</button>}
          </>
        )}
      </div>
    </div>
  );
};
export default NewsCard;
