//Reducer
const initialState = {
  loan_amount: 10000,
  loan_type: "",
  date: "",
  rate_of_interest: "",
  duration_of_loan: "",
};
const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_LOAN") {
    console.log(action);
    return {
      ...state,
      loan_amount: action.value,
    };
  }
  return state;
};
export default rootReducer;
