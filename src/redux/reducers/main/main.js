const initialState = {
  mainData: {},
};
export function mainGet(state = initialState, action) {
  switch (action.type) {
    case "SECCESS_DATA_MAIN":
      return {
        ...state,
        mainData: action.payload,
      };
    default:
      return state;
  }
}
