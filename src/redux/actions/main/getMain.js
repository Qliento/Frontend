import API from "../../API";

export function seccess(data) {
  return {
    type: "SECCESS_DATA_MAIN",
    payload: data,
  };
}

export function mainData() {
  return async (dispatch) => {
    await API.getMainData().then((res) => {
      dispatch(seccess(res.data[0]));
    });
  };
}
