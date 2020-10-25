import API from '../../API';

export function bePartner(data){
    return async (dispatch)=>{
      await API.bePartner(data);
}
}