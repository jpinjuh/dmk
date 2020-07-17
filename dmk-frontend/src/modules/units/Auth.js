/**
|--------------------------------------------------
| IMPORTS
|--------------------------------------------------
*/

import { postFunc, getFunc, putFunc } from "Services/mainApiServices";
import Base64 from "Util/base64";
import { NotificationManager } from "react-notifications";
import { VALIDATION_MESSAGE, VALIDATION_CLEAR } from "./Validation";

/**
|--------------------------------------------------
| TYPES
|--------------------------------------------------
*/

const LOGIN_REQ = "auth/LOGIN_REQ";
const LOGIN_SCS = "auth/LOGIN_SCS";
const LOGIN_FLR = "auth/LOGIN_FLR";

const CHANGE_PASS_DATA_REQ = "auth/CHANGE_PASS_DATA_REQ";
const CHANGE_PASS_DATA_SCS = "auth/CHANGE_PASS_DATA_SCS";
const CHANGE_PASS_DATA_FLR = "auth/CHANGE_PASS_DATA_FLR";

const LOGOUT_USER = "auth/LOGOUT_USER";

/**
|--------------------------------------------------
| ACTIONS
|--------------------------------------------------
*/

export const getData = async (setData, url) => {
  const response = await getFunc(url);

  if (response.status.errorCode === 200) {
    setData(response.data);
  } else {
    NotificationManager.error(response.status.description);
  }
};

export const login = (url, body, history, clearInputs) => async dispatch => {
  dispatch({ type: LOGIN_REQ });

  const response = await postFunc(url, body);

  if (response.status.errorCode === 200) {
    let decode = Base64.decode(response.access_token.trim().split(".")[1]);
    // eslint-disable-next-line no-control-regex
    decode = JSON.parse(decode.replace(/[^\x01-\x7F]/g, ""));
    if (decode && response.access_token) {
      localStorage.setItem("user", JSON.stringify(decode));
      //localStorage.setItem("data", JSON.stringify(response.data));
      localStorage.setItem("jwt-token", JSON.stringify(response.access_token));
      //localStorage.setItem("meni", JSON.stringify(response.meni));
      dispatch({ type: LOGIN_SCS, payload: { user: decode, data: response } });
      dispatch({ type: VALIDATION_CLEAR });
      clearInputs();
      history.push("role");
    }
  } else {
    if (typeof response.status.description === "object") {
      dispatch({ type: VALIDATION_MESSAGE, message: response.status });
    }
    NotificationManager.error(response.message);
    dispatch({ type: LOGIN_FLR });
  }
};

export const renewToken = async (url, history) => {
  const response = await getFunc(url);

  if (response.status.errorCode === 200) {
    let decode = Base64.decode(response.access_token.trim().split(".")[1]);
    // eslint-disable-next-line no-control-regex
    decode = JSON.parse(decode.replace(/[^\x01-\x7F]/g, ""));
    if (decode && response.access_token) {
      localStorage.setItem("user", JSON.stringify(decode));
      // localStorage.setItem("data", JSON.stringify(response.data));
      localStorage.setItem("jwt-token", JSON.stringify(response.access_token));
      // localStorage.setItem("meni", JSON.stringify(response.meni));
      history.push("role");
    }
  }
};


export const editPassword = (url, body, closeModal) => async dispatch => {
  dispatch({ type: CHANGE_PASS_DATA_REQ });

  const response = await putFunc(url, body);

  if (response.status.errorCode === 200) {
    dispatch({ type: CHANGE_PASS_DATA_SCS, payload: response.data, status: response.status });
    dispatch({ type: VALIDATION_CLEAR });
    NotificationManager.success(response.status.description);
    closeModal()
  } else {
    if (typeof response.status.description === "object") {
      dispatch({ type: VALIDATION_MESSAGE, message: response.status });
    }
    else {
      NotificationManager.error(response.status.description);
    }
    dispatch({ type: CHANGE_PASS_DATA_FLR, status: response.status });
  }
};

export const logOut = history => dispatch => {
  dispatch({ type: LOGOUT_USER });
  localStorage.clear();
  history.push("");
};

/**
|--------------------------------------------------
| REDUCERS
|--------------------------------------------------
*/

const INIT_STATE = {
  user: JSON.parse(localStorage.getItem("user")),
  data: JSON.parse(localStorage.getItem("data")),
  meni: JSON.parse(localStorage.getItem("meni")),
  loading: false,
  editErrorMsg: ''
};

export default function reducer(state = INIT_STATE, action = {}) {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        items: {},
        loading: true
      };
    case LOGIN_SCS:
      return {
        ...state,
        user: action.payload.user,
        data: action.payload.data.data,
        meni: action.payload.user.meni,
        loading: false
      };
    case LOGIN_FLR:
      return {
        ...state,
        loading: false
      };
    case CHANGE_PASS_DATA_REQ:
      return {
        ...state,
        loading: true
      };
    case CHANGE_PASS_DATA_SCS:
      return {
        ...state,
        editErrorMsg: action.status,
        loading: false
      };
    case CHANGE_PASS_DATA_FLR:
      return {
        ...state,
        editErrorMsg: action.status,
        loading: false
      };
    default:
      return state;
  }
}
