import API from '../../API';

const initialState = {
  isModal: '',
};

export function bePartnerReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTED_SUCCES_PARTNER":
      return {
        ...state,
        isModal: 1,
      };
      
  case 'POSTED__ERROR_PARTNER':
          return {
            ...state,
            isModal: 2,
          };
  case 'POSTED__AFTER_PARTNER':
          return {
            ...state,
            isModal: '',
          }
    default:
      return state;
  }
}

export function bePartner(data){
    return async (dispatch)=>{
      await API.bePartner(data)
      .then(res =>{
        if(res.status == 201){
          dispatch({ type: 'POSTED_SUCCES_PARTNER'})
        }
        else{
          dispatch({ type: 'POSTED__ERROR_PARTNER'})
        }
      })
}
}

export function afterPosted(){
  return {
    type: 'POSTED__AFTER_PARTNER',
  };
}