import API from "../../API";

export function seccess(data) {
  return {
    type: "DETAIL_RESEARCH",
    payload: data,
  };
}

export function seccess1() {
  return {
    type: "REGISTRATION_ORGANIZATION",
  };
}
export function errorMesseg() {
  return {
    type: "REGISTRATION_ERROR_MESSEG",
  };
}
export function error() {
  return {
    type: "REGISTRATION_ORGANIZATION_ERROR",
  };
}

export function detailResearchAction(id) {
  return async (dispatch) => {
    await API.interiorPage(id).then((res) => {
      dispatch(seccess(res.data));
    });
  };
}

export function sendDemoVersion(data, id) {
  return async (dispatch) => {
    await API.sendDemoVersionApi(data, id)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          dispatch(seccess1());
          
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          dispatch(error());
          
        }
      });
  };
}
