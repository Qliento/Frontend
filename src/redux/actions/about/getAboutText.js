import axios from "axios";

export function seccess(data){
    return{
        type:"ABOUT_DATA",
        payload:data,

    }
}

export function aboutData(){
    return async (dispatch)=>{
      await  axios
      .get("http://207.154.250.71/about-us/",{
         headers:{
            "Accept-Language": "ru"
          }
      })
      .then(res => {
        dispatch(seccess(res.data))
      });

}
}