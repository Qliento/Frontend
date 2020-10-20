import axios from "axios";

export function seccess(data){
    return{
        type:"LIST_QUESTION",
        payload:data,

    }
}

export function getQuestion(){
    return async (dispatch)=>{
      await  axios
      .get("http://207.154.250.71/faq",{
    headers:{
           "Accept-Language": "ru"
         }
     })
      .then(res => {
    dispatch(seccess(res.data))

      });

}
}