import { BE_PARTNER_DATA, REGISTRATION_CLIENT, REGISTRATION_CLIENT_ERROR} from './constants';
import API from '../API';

export function BePartnerData(){
    return async (dispatch)=>{
      await API.bePartnerData()
      .then(res => {
        dispatch({ type: BE_PARTNER_DATA, payload: res })
      })}
}

export function registrationClient(data){
  return async (dispatch)=>{
    await API.registrationClient(data)
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