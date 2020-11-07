import { BE_PARTNER_DATA, REGISTRATION_CLIENT, REGISTRATION_CLIENT_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, AGREEMENT_DATA, ORDER_RESEARCH_DATA, BLOG_DATA} from './constants';
import API from '../API';


export function AgreementData(){
  return async (dispatch)=>{
    await API.agreementData()
    .then(res => {
      dispatch({ type: AGREEMENT_DATA, payload: res })
    })}
}

export function BePartnerData(){
    return async (dispatch)=>{
      await API.bePartnerData()
      .then(res => {
        dispatch({ type: BE_PARTNER_DATA, payload: res })
      })}
}

export function blogData(){
  return async (dispatch)=>{
    await API.blogData()
    .then(res => {
      dispatch({ type: BLOG_DATA, payload: res })
    })}
}

export function orderResearchData(){
  return async (dispatch)=>{
    await API.orderResearchData()
    .then(res => {
      dispatch({ type: ORDER_RESEARCH_DATA, payload: res })
    })}
}

export function errorClientReg() {
  return {
    type: REGISTRATION_CLIENT_ERROR,
  };
}

export function registrationClient(data){
  return async (dispatch)=>{
    await API.registrationClient(data)
    .then(res => {
      console.log(res)
      if( res.status == 201){
        dispatch({ type: REGISTRATION_CLIENT})
      }
      else{
        dispatch({ type: REGISTRATION_CLIENT_ERROR})
      }
    });

}
}

export function recoveryPassword(data){
  return async ()=>{
    const data1 = JSON.stringify(data)
    console.log(data1);
    await API.recoveryPassword(data1)
      .then(res => {
        console.log(res);
      })
}
}

export function authClient(username, password){
    return dispatch => {
        dispatch(request({ username }));

        login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    dispatch(createToken(username, password));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

async function login(email, password) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
  };

  const response = await fetch(`http://207.154.250.71/users/login/clients/`, requestOptions);
  // const user = await handleResponse(response);
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  // localStorage.setItem('user', JSON.stringify(response));
  return response;
}

export function createToken(email, password){
  return async (dispatch)=>{
    const data = JSON.stringify({email, password})
    await API.createToken(data)
    .then(res => {
      console.log(res)
      if( res.status == 200){
        localStorage.setItem('user', res.data.access);
      }
      // else{
      //   dispatch({ type: REGISTRATION_CLIENT_ERROR})
      // }
    });
}}