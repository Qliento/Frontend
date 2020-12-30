import API from "../../API";

export function getReearchListOrgnPage() {
  return async (dispatch) => {
    let token = localStorage.getItem("user");

    await API.getResearchListOrgn(token)
      .then((res) => {
        dispatch(seccess(res.data));
      })
      .catch((err) => {});
  };
}
export function detailResearch(id) {
  return async (dispatch) => {
    let token = localStorage.getItem("user");
    await API.detailResearchOrg(token, id)
      .then((res) => {
        dispatch(dataDetail(res.data));
      })
      .catch((err) => {});
  };
}
export function UbdateResearch(price, id) {
  return async (dispatch) => {
    let token = localStorage.getItem("user");
    await API.UbdateResearch(price, id, token)
      .then((res) => {
        dispatch({ type: "SECCESS_UBDATE_RESEARCH" });
      })
      .catch((err) => {
        dispatch({ type: "ERR_UBDATE_RESEARCH" });
      });
  };
}

export function seccess(data) {
  return {
    type: "SECCESS_RESEARCH_LIST",
    payload: data,
  };
}

export function dataDetail(data) {
  return {
    type: "SECCESS_DATA_DETAIL",
    payload: data,
  };
}

export function dataStep2(data) {
  return {
    type: "UPLOAD_DATA_STEP_2",
    payload: data,
  };
}
export function dataStep2null() {
  return {
    type: "UPLOAD_DATA_STEP_2_NULL",
    
  };
}
export function dataStep1(data) {
  return {
    type: "UPLOAD_DATA_STEP_1",
    payload: data,
  };
}
export function Spiner(data) {
  return {
    type: "UPLOAD_RESEARCH_SPINER",
    isModal: data,
  };
}

export function uploadResearchAction(dataStep3) {
  return async (dispatch) => {
    dispatch(Spiner(0));
    let token = localStorage.getItem("user");
    await API.UploadResearch(dataStep3, token)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          dispatch(Spiner(1));
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          dispatch(Spiner(2));
        }
        console.log(err);
      });
  };
}


export function StaticSaccess(data) {
  return {
    type: "SECCESS_STATIC",
    data: data,
  };
}

export function StaticResearch(id,key) {
  return async (dispatch) => {
    let token = localStorage.getItem("user");
    await API.staticResearchApi(id, key ,token)
      .then((res) => {
        console.log(res.data)
        dispatch(StaticSaccess(res.data))
      })
  };
}
