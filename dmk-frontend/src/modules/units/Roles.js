/**
|--------------------------------------------------
| IMPORTS
|--------------------------------------------------
*/

import { NotificationManager } from "react-notifications";
import { getFunc, postFunc, deleteFunc, putFunc } from "../../services/mainApiServices";

/**
|--------------------------------------------------
| TYPES
|--------------------------------------------------
*/
// GET
const GET_DATA_REQ = "GET_DATA_REQ";
const GET_DATA_SCS = "GET_DATA_SCS";
const GET_DATA_FLR = "GET_DATA_FLR";
// POST
const POST_DATA_REQ = "POST_DATA_REQ";
const POST_DATA_SCS = "POST_DATA_SCS";
const POST_DATA_FLR = "POST_DATA_FLR";
// DEACTIVATE
const DEACTIVATE_DATA_REQ = "DEACTIVATE_DATA_REQ";
const DEACTIVATE_DATA_SCS = "DEACTIVATE_DATA_SCS";
const DEACTIVATE_DATA_FLR = "DEACTIVATE_DATA_FLR";
// PUT
const PUT_DATA_REQ = "PUT_DATA_REQ";
const PUT_DATA_SCS = "PUT_DATA_SCS";
const PUT_DATA_FLR = "PUT_DATA_FLR";
// ACTIVATE
const ACTIVATE_DATA_REQ = "ACTIVATE_DATA_REQ";
const ACTIVATE_DATA_SCS = "ACTIVATE_DATA_SCS";
const ACTIVATE_DATA_FLR = "ACTIVATE_DATA_FLR";

/**
|--------------------------------------------------
| ACTIONS
|--------------------------------------------------
*/

export const getData = (url) => async dispatch => {
  dispatch({ type: GET_DATA_REQ });

  const response = await getFunc(url);

  if (response.status.errorCode === 200) {
    dispatch({ type: GET_DATA_SCS, payload: response.data, total: response.total });
  } else {
    dispatch({ type: GET_DATA_FLR });
    NotificationManager.error(response.status.description);
  }
};

export const postData = (url, body) => async dispatch => {
  dispatch({ type: POST_DATA_REQ });

  const response = await postFunc(url, body);

  if (response.status.errorCode === 200) {
    dispatch({ type: POST_DATA_SCS, payload: response.data });
    NotificationManager.success(response.status.description);
  } else {
    dispatch({ type: POST_DATA_FLR });
    NotificationManager.error(response.status.description);
  }
};

export const deactivateData = url => async dispatch => {
  dispatch({ type: DEACTIVATE_DATA_REQ });

  const response = await deleteFunc(url);

  if (response.status.errorCode === 200) {
    dispatch({ type: DEACTIVATE_DATA_SCS, payload: response.data });
    NotificationManager.success(response.status.description);
  } else {
    dispatch({ type: DEACTIVATE_DATA_FLR });
    NotificationManager.error(response.status.description);
  }
};

export const putData = (url, body) => async dispatch => {
  dispatch({ type: PUT_DATA_REQ });

  const response = await putFunc(url, body);

  if (response.status.errorCode === 200) {
    dispatch({ type: PUT_DATA_SCS, payload: response.data});
    NotificationManager.success(response.status.description);
  } else {
    dispatch({ type: PUT_DATA_FLR });
    NotificationManager.error(response.status.description);
  }
};

export const activateData = (url, body) => async dispatch => {
  dispatch({ type: ACTIVATE_DATA_REQ });

  const response = await postFunc(url, body);

  if (response.status.errorCode === 200) {
    dispatch({ type: ACTIVATE_DATA_SCS, payload: response.data });
    NotificationManager.success(response.status.description);
  } else {
    dispatch({ type: ACTIVATE_DATA_FLR});
    NotificationManager.error(response.status.description);
  }
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
        total: action.total,
        loading: false
      };
    case GET_DATA_FLR:
      return {
        ...state,
        loading: false
      };
    case POST_DATA_REQ:
      return {
        ...state,
        loading: true
      };
    case POST_DATA_SCS:
      return {
        ...state,
        data: state.data.concat(action.payload),
        total: state.total + 1,
        loading: false
      };
    case POST_DATA_FLR:
      return {
        ...state,
        loading: false
      };
    case DEACTIVATE_DATA_REQ:
      return {
        ...state,
        loading: true
      };
    case DEACTIVATE_DATA_SCS:
      return {
        ...state,
        data: state.data.map(item => {
          if(item.id === action.payload.id){
            const { ...itemCopy} = item;
            return { ...itemCopy, status: 0}
          }
          return item;
        }),
        loading: false
      };
    case DEACTIVATE_DATA_FLR:
      return {
        ...state,
        loading: false
      };
    case PUT_DATA_REQ:
      return {
        ...state,
        loading: true
      };
    case PUT_DATA_SCS:
      return {
        ...state,
        data: state.data.map(item => {
          (item.id === action.payload.id)
          if(item.id === action.payload.id){
            const { ...itemCopy} = item;
            return { ...itemCopy, ...action.payload }
          }
          return item;
        }),
        loading: false
      };
    case PUT_DATA_FLR:
      return {
        ...state,
        loading: false
      };
    case ACTIVATE_DATA_REQ:
      return {
        ...state,
        loading: true
      };
    case ACTIVATE_DATA_SCS:
      return {
        ...state,
        data: state.data.map(item => {
          if(item.id === action.payload.id){
            const { ...itemCopy} = item;
            return { ...itemCopy, status: 1}
          }
          return item;
        }),
        loading: false
      };
    case ACTIVATE_DATA_FLR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
