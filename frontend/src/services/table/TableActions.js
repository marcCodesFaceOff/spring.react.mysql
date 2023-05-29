import * as ROSTER from "./rosterTypes";
import axios from "axios";

const url = "http://localhost:8080/api/roster";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

export const deletePerson = (bedID) => {
  console.log("Inside DeletePerson!!!");
  return (dispatch) => {
    dispatch({
      type: ROSTER.DELETE_PERSON_REQUEST,
    });
    axios
      .delete(url + bedID)
      .then((response) => {
        dispatch(rosterSuccess(response.data));
      })
      .catch((error) => {
        dispatch(rosterFailure(error));
      });
  };
};

export const getRoster = () => {
  return (dispatch) => {
    dispatch({
      type: ROSTER.FETCH_ROSTER_REQUEST,
    });
    axios
      .get(url, {}, config)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          roster: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const rosterSuccess = (roster) => {
  return {
    type: ROSTER.ROSTER_SUCCESS,
    payload: roster,
  };
};

const rosterFailure = (error) => {
  return {
    type: ROSTER.ROSTER_FAILURE,
    payload: error,
  };
};
