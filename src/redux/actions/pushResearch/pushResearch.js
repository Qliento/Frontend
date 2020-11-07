
import API from '../../API';
import axios from "axios"

export function researchPushBasket(id) {
    let token = localStorage.getItem("user").replace(/"/g,"");
    console.log(token)
    return async (dispatch) => {
      await API.pushBasket(id,token).then((res) => {
         
      });
    };
  }




 