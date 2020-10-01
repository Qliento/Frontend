import React from "react";
import classes from "./NewsCards.module.css";
import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";

const NewsCards = () => {
  return (
    <div className={classes.cards}>
      <div className={classes.card}>
        <div className={classes.blockImg}>
          <img alt="img" className={classes.img} src={card1} />
        </div>
        <div className={classes.content}>
          <span className={classes.title}>Заголовок примерно в две строки</span>
          <div className={classes.blockDescrip}>
            <span className={classes.description}>
              Повседневная практика показывает, что постоянный количественный
              рост и сфера нашей активности позволяет выполнять важные задания
              по разработке направлений прогрессивного развития.
            </span>
          </div>

          <div className={classes.textButtom}>
            <div className={classes.textLeft}>
              <span>23.09.2020</span>
              <span>16:00</span>
            </div>
            <div className={classes.textRight}>
              <span>Сергей</span>
              <span>Антонов</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.blockImg}>
          <img alt="img" className={classes.img} src={card2} />
        </div>
        <div className={classes.content}>
          <span className={classes.title}>Заголовок примерно в две строки</span>
          <div className={classes.blockDescrip}>
            <span className={classes.description}>
              Повседневная практика показывает, что постоянный количественный
              рост и сфера нашей активности позволяет выполнять важные задания
              по разработке направлений прогрессивного развития.
            </span>
          </div>

          <div className={classes.textButtom}>
            <div className={classes.textLeft}>
              <span>23.09.2020</span>
              <span>16:00</span>
            </div>
            <div className={classes.textRight}>
              <span>Сергей</span>
              <span>Антонов</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.blockImg}>
          <img alt="img" className={classes.img} src={card3} />
        </div>
        <div className={classes.content}>
          <span className={classes.title}>Заголовок примерно в две строки</span>
          <div className={classes.blockDescrip}>
            <span className={classes.description}>
              Повседневная практика показывает, что постоянный количественный
              рост и сфера нашей активности позволяет выполнять важные задания
              по разработке направлений прогрессивного развития.
            </span>
          </div>

          <div className={classes.textButtom}>
            <div className={classes.textLeft}>
              <span>23.09.2020</span>
              <span>16:00</span>
            </div>
            <div className={classes.textRight}>
              <span>Сергей</span>
              <span>Антонов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCards;
