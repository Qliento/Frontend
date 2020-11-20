import API from '../../API';

const initialState = {
  isModal: '',
};


export function orderResearchReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTED_SUCCES":
      return {
        ...state,
        isModal: 1,
      };
      
  case 'POSTED__ERROR':
          return {
            ...state,
            isModal: 2,
          };
  case 'POSTED__AFTER':
          return {
            ...state,
            isModal: '',
          }
    default:
      return state;
  }
}

export function orderResearch(data){
    return async (dispatch)=>{
      await API.orderResearch(data)
      .then(res =>{
        if(res.status == 201){
          dispatch({ type: 'POSTED_SUCCES'})
        }
        else{
          dispatch({ type: 'POSTED__ERROR'})
        }
      })
}
}

export function afterPosted(){
  return {
    type: 'POSTED__AFTER',
  };
}