

import API from '../../API';

export function seccess(data){
    return{
        type:"DATA_FILTER",
        payload:data,

    }
}

export function listDataFilter(){
    return async (dispatch)=>{
      await API.dataFilter()
      .then(res => {
        dispatch(seccess(res.data))
      });

}
}