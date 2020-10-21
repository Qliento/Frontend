import axios from "axios";

export function seccess(data){
    return{
        type:"ABOUT_DATA",
        payload:data,

    }
}

export function sendQuestions(data){
    return async (dispatch)=>{
      await  axios
      .post("http://207.154.250.71/have-question/",{
        'name': data.fio,
        'name_of_organization': data.name,
        'email': data.email,
        'phone': data.phone,
        'extra': data.question
      })
      .then(res => {
        console.log(res)
      });

}
}