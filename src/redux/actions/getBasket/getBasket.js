import API from "../../API";

export function seccess(data) {
  return {
    type: "BASKET_LIST_RESEARCH",
    payload: data,
  };
}

export function getBasketActions() {
  let token = localStorage.getItem("user");
  return async (dispatch) => {
    await API.getBasket(token).then((res) => {
      dispatch(seccess(res.data));
   
    });
  };
}
