import React, { useEffect } from 'react';
import classes from './content.module.css';
import MarketCard from './marketCard/marketCard';
import OrderCard from './orderCard/orderCard';
import { clientPage } from '../../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";

const Content = () =>{
    const token = localStorage.getItem("user");
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    useEffect(() => {
        dispatch(clientPage(token));
    }, []);

    return(
        <div className={classes.content}>
            <h2>Мои покупки</h2>
            <div className={classes.market_cards}>
                <MarketCard />
                <MarketCard />
            </div>
            <OrderCard />
        </div>
    )
}

export default Content;