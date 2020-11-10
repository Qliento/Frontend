import API from "../../API";

export function seccess(data) {
  return {
    type: "LIST_NEWS",
    payload: data,
  };
}

export function getBasketActions() {
    let token = localStorage.getItem("user").replace(/"/g,"");
  return async (dispatch) => {
    await API.getBasket(token).then((res) => {
  console.log("String ",res.data)
    });
  };
}
