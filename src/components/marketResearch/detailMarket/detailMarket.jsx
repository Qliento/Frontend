import React,{useState} from "react";
import classes from "./detailMarket.module.css";
import img1 from "./img/Rectangle 47.png"
import Tabs1 from "./tabs/tabs";


const DetailMarket = ({data}) => {
  console.log(data)
  const [isClose,setIsClose]=useState(false)
  const clickBtn=()=>{
    setIsClose(!isClose)
    console.log(isClose)
  }
  return (
    <div className={ isClose ?classes.blockDetail1 : classes.blockDetail}>
      <div className={classes.leftCard}>
        <div className={classes.blockImg}>
          <img alt="img" src={data.image? data.image:img1}  className={classes.img}/>
        </div>
        <div className={classes.container}>
          <div className={classes.blockHeshteg}>
            {
              data.hashtag&&
              data.hashtag.map((item)=>{
                return(
                <div key={item.id}>#{item.name}</div>
                )
              })
            }
      
          </div>
          <div className={classes.blockText}>
          <span className={classes.title}>{data.name}</span>
          </div>
          <div className={classes.blockdDescrip}>
            <div className={classes.descrip}>
          <span>Дата выпуска: {data&& data.date}</span>
          <span>Количество страниц: {data&& data.pages}</span>
          <span>ID: {data&& data.id}</span>
            </div>
            <div className={classes.price}>
              <span className={classes.oldPrice}>{data&& data.old_price} сом</span>
              <span className={classes.newPrice}>{data&& data.new_price} сом</span>
            </div>
          </div>
          <div className={classes.blockBtn}>
            <button className={classes.crash}>В корзину</button>
            <button className={classes.demo}>Демо версия</button>
          </div>
        </div>
      </div>
      <div className={classes.rightCard}>
          <Tabs1 dataText={data&&data} clickBtn={clickBtn}/>
      </div>
    </div>
  );
};
export default DetailMarket;
