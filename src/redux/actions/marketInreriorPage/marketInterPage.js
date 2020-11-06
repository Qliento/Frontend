
import API from '../../API';

export function seccess(data){
    return{
        type:"DETAIL_RESEARCH",
        payload:data,

    }
}

export function detailResearchAction(id){
    return async (dispatch)=>{
      await API.interiorPage(id)
      .then(res => {
    dispatch(seccess(res.data))

      });

}
}