
import API from "../../API";
import { getBasketActions } from "../getBasket/getBasket";

export function seccess(data) {
  return {
    type: "BASKET_LIST_RESEARCH",
    payload: data,
  };
}

export function deleteBasket(id) {
  let token = localStorage.getItem("user");
  return async (dispatch) => {
    await API.deleteResearchBasket(id,token).then((res) => {
    dispatch(getBasketActions())
    });
  };
}
