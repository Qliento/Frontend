import API from '../../API';

export function seccess(data){
    return{
        type:"ABOUT_DATA",
        payload:data,

    }
}

export function sendQuestions(data){
    return async (dispatch)=>{
      await API.sendQuestions(data)
      .then(res => {
        console.log(res)
      });

}
}