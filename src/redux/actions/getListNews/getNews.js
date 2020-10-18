import axios from "axios";

export function seccess(data){
    return{
        type:"ABOUT_DATA",
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
        //dispatch(seccess(res.data))
        console.log(res)
      });

}
}