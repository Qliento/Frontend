import API from '../../API'

export function seccess(data){
    return{
        type:"LIST_NEWS",
        payload:data,

    }
}

export function ListNews(){
    return async (dispatch)=>{
      await API.ListNews()
      .then(res => {
        dispatch(seccess(res.data))
      });

}
}