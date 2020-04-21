/**
|--------------------------------------------------
| IMPORTS
|--------------------------------------------------
*/

import { NotificationManager } from "react-notifications";
import { getFunc } from "../../services/mainApiServices";

/**
|--------------------------------------------------
| TYPES
|--------------------------------------------------
*/

const GET_DATA_REQ = "GET_DATA_REQ";
const GET_DATA_SCS = "GET_DATA_SCS";
const GET_DATA_FLR = "GET_DATA_FLR";

/**
|--------------------------------------------------
| ACTIONS
|--------------------------------------------------
*/

export const getData = () => async dispatch => {
  dispatch({ type: GET_DATA_REQ });

  const response = await getFunc("city");
  console.log(response)
  if (response.status.errorCode === 200) {
    dispatch({ type: GET_DATA_SCS, payload: response.data });
  } else {
    NotificationManager.error(response.status.description);
    dispatch({ type: GET_DATA_FLR });
  }
};

export const postData = () => async dispatch => {
  
};
/**
|--------------------------------------------------
| REDUCERS
|--------------------------------------------------
*/

const INIT_STATE = {
  data: ""
};

export default function reducer(state = INIT_STATE, action = {}) {
  switch (action.type) {
    case GET_DATA_REQ:
      return {
        ...state,
        loading: true
      };
    case GET_DATA_SCS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case GET_DATA_FLR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
