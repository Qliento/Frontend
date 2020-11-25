import API from '../../API';

export function seccess(data){
    return{
        type:"ABOUT_DATA",
        payload:data,

    }
}

export function aboutData(){
    return async (dispatch)=>{
      await API.aboutData()
      .then(res => {
        dispatch(seccess(res.data));
        console.log(res.data)
      });

}
}