import React from "react";
import classes from "./order.module.css";
import OrderCard from "./orderCard/orderCard";

const Order = () => {
  return (
    <div className={classes.blockOrder}>
      <OrderCard />
    </div>
  );
};
export default Order;
