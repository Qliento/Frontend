import API from '../../API';

export function seccess(data){
    return{
        type:"LIST_QUESTION",
        payload:data,

    }
}

export function getQuestion(){
    return async (dispatch)=>{
      await API.getQuestion()
      .then(res => {
    dispatch(seccess(res.data))

      });

}
}