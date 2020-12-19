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

export function payResearch(data) {
  let token = localStorage.getItem("user");
  return async (dispatch) => {
    await API.payResearchApi(data,token).then((res) => {
      console.log(res)
      var win = window.open(res.data, '_blank');
      win.focus();
   
    });
  };
}

