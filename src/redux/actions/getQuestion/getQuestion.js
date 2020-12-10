import API from '../../API';

export function seccess(data){
    return{
        type:"LIST_QUESTION",
        payload:data,

    }
}
export function TrigerFalse(){
  return{
      type:"TRIGER_FALSE"


  }
}

export function seccesPost(){
  return {
    type: "UPDATE_STATE_QUESTION"
  };
}

export function getQuestion(){
    return async (dispatch)=>{
      await API.getQuestion()
      .then(res => {
    dispatch(seccess(res.data))

      })
  

}
}