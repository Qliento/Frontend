

import API from "../../API";

export function seccess(data) {
  return {
    type: "RESULT_SEARCH",
    payload: data,
  };
}
export function listResearch(data) {
  return {
    type: "GET_LIST_RESEARCH_CATEGORY",
    payload: data,
  };
}
export function allListResearch(data) {
  return {
    type: "ALL_LIST_RESEARCH",
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
export function listResearchCategory(category) {
  return async (dispatch) => {
    await API.listResearchCategory(category).then((res) => {
     dispatch(listResearch(res.data));
    });
  };
}

export function allResearch() {
  return async (dispatch) => {
    await API.allListResearch().then((res) => {
     dispatch(allListResearch(res.data));
    });
  };
}


