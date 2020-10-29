

import API from "../../API";

export function seccess(data) {
  return {
    type: "RESULT_SEARCH",
    payload: data,
  };
}

export function mainSearch(category,text) {
  return async (dispatch) => {
    await API.resultSearchList(category,text).then((res) => {
     dispatch(seccess(res.data));
    });
  };
}