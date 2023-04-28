import * as ROSTER from "./rosterTypes";

const initialState = {
  roster: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ROSTER.SAVE_PERSON_REQUEST:
    case ROSTER.FETCH_ROSTER_REQUEST:
    case ROSTER.UPDATE_ROSTER_REQUEST:
    case ROSTER.DELETE_PERSON_REQUEST:
      return {
        ...state,
      };
    case ROSTER.ROSTER_SUCCESS:
      return {
        book: action.payload,
        error: "",
      };
    case ROSTER.ROSTER_FAILURE:
      return {
        book: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;