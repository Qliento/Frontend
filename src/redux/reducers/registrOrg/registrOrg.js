const initialState = {
  isModal: "",
};
export function RegistrOrg(state = initialState, action) {
  switch (action.type) {
    case "REGISTRATION_ORGANIZATION":
      return {
        ...state,
        isModal: 1,
      };

    case "REGISTRATION_ORGANIZATION_ERROR":
      return {
        ...state,
        isModal: 2,
      };
    case "REGISTRATION_ERROR_MESSEG":
      return {
        ...state,
        isModal: "",
      };

    default:
      return state;
  }
}
