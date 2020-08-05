import { ADD_LOAN, SAVE_LIST, ADD_USER } from "../store/actionTypes";

export const saveUser = (value) => {
  return {
    type: ADD_USER,
    value: value,
  };
};
export const addUser = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveUser(value));
    }, 2000);
  };
};

export const addLoan = (value) => {
  return {
    type: ADD_LOAN,
    value: value,
  };
};

export const saveList = (value) => {
  return {
    type: SAVE_LIST,
    value: value,
  };
};
