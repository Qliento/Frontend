import axios from "axios";
import { BE_PARTNER_DATA, REGISTRATION_CLIENT, REGISTRATION_CLIENT_ERROR} from './constants'

export function BePartnerData(){
    return async (dispatch)=>{
      await  axios
      .get("http://207.154.250.71/partnership",{
        headers:{
           "Accept-Language": "ru"
        }
     })
      .then(res => {
        dispatch({ type: BE_PARTNER_DATA, payload: res })
      });

}
}

export function registrationClient(data){
  return async (dispatch)=>{
    await  axios
    .post("http://207.154.250.71/users/registration/clients/",{
      'client_status': {...data}
    })
    .then(res => {
      console.log(res)
      if( res.status == 200){
        dispatch({ type: REGISTRATION_CLIENT})
      }
      else{
        dispatch({ type: REGISTRATION_CLIENT_ERROR})
      }
    });

}
}