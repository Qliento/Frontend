import axios from "axios";
import API from "../../API";

export function seccess() {
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

export function registrationOrg(data) {
  return async (dispatch) => {
    await API.registrOrg(data)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          dispatch(seccess());
          setTimeout(() => {
            dispatch(errorMesseg());
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          dispatch(error());
          setTimeout(() => {
            dispatch(errorMesseg());
          }, 2000);
        }
      });
  };
}

