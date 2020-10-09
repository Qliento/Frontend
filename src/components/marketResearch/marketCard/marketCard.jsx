import React from "react"
import classes from "./marketCard.module.css"
import doctor from "./img/Rectangle 47.png"

const MarketCard=()=>{
    return(
        <div className={classes.marketCard}>
            <img alt="img" src={doctor} className={classes.img}/>
            <div className={classes.content}>
                <div className={classes.nameCompany}>
                    <span className={classes.name}>ОсОО “Бимед Фарм”</span>
                    <span className={classes.date}>29 / 09 / 2020</span>

                </div>
                <div className={classes.blockDescrip}>
                    <div className={classes.nameResearch}>
                        <span>Рынок частной медицины 2020. База сетей</span>
                    </div>
                    <div className={classes.description}>
                        <span>• 150 стр</span>
                    </div>

                </div>
                <div className={classes.blockHeshteg}>
                    <div>#медицина</div>
                    <div>#медицина</div>
                    <div>#медицина</div>
                    <div>#медицина</div>
                </div>

            </div>
            <div className={classes.blockAct}>
                <div className={classes.blockPrace}>
                    <span className={classes.discounts}>55 000 сом</span>
                    <span className={classes.newPrace}>55 000 сом</span>
                </div>
                <div className={classes.blockBtn}>
                    <button className={classes.toBasket}>В корзину</button>
                    <button className={classes.demo}>Демо версия</button>
                </div>
            </div>

        </div>
    )
}
export default MarketCard;