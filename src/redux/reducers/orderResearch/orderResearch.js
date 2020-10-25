import API from '../../API';

export function orderResearch(data){
    return async (dispatch)=>{
      await API.orderResearch(data);
}
}