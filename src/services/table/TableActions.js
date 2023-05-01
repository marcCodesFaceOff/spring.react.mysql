import * as ROSTER from "./rosterTypes";
import axios from "axios";

export const deletePerson = (bedID) => {
    return (dispatch) => {
      dispatch({
        type: ROSTER.DELETE_PERSON_REQUEST,
      });
      axios
        .delete("http://localhost:8080/api/roster/" + bedID)
        .then((response) => {
          dispatch(rosterSuccess(response.data));
        })
        .catch((error) => {
          dispatch(rosterFailure(error));
        });
    };
  };

  const rosterSuccess = (book) => {
    return {
      type: ROSTER.ROSTER_SUCCESS,
      payload: book,
    };
  };
  
  const rosterFailure = (error) => {
    return {
      type: ROSTER.ROSTER_FAILURE,
      payload: error,
    };
  };