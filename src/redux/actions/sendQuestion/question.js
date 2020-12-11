import API from '../../API';
import {TrigerFalse} from "../getQuestion/getQuestion"


export function sendQuestions(data){
    return async (dispatch)=>{
      await API.sendQuestions(data)
      .then(res => {
        if( res.status == 201){
        dispatch({type:"SECCESS_POST_QUESTION"})
        }
      })
      .catch(err =>{
        dispatch(TrigerFalse())
      })
      ;

}
}