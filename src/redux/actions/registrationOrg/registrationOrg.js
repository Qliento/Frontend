import axios from "axios";

export function seccess(){
    return{
        type:"REGISTRATION_ORGANIZATION",

    }
}
export function error(){
    return{
        type:"REGISTRATION_ORGANIZATION_ERROR",

    }
}

export function registrationOrg(data){
    return async (dispatch)=>{
      await  axios
      .post("http://207.154.250.71/users/registration/researchers/",{
        'logo': data.name2,
        'admin_status': {
          'name': data.name,
          'surname': data.lastName,
          'password': data.password,
          'password_check': data.repeatPassword,
          'email': data.email,
          'phone_number': data.phone
        }
      })
      .then(res => {
        console.log(res)
        if(res.status === 201){
            dispatch(seccess())
        }
      });

}
}