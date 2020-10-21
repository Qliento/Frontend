import axios from "axios";

export function seccess(data){
    return{
        type:"LIST_NEWS",
        payload:data,

    }
}

export function ListNews(){
    return async (dispatch)=>{
      await  axios
      .get("http://207.154.250.71/news",{
    headers:{
           "Accept-Language": "ru"
         }
     })
      .then(res => {
        dispatch(seccess(res.data))
 
      });

}
}