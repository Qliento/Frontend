
import API from '../../API';
import axios from "axios"
import {getBasketActions} from '../getBasket/getBasket'
export function researchPushBasket(id) {
    let token = localStorage.getItem("user");
  
    return async (dispatch) => {
      await API.pushBasket(id,token).then((res) => {
        dispatch(getBasketActions())
      });
    };
  }




 