//Reducer
const initialState = {
    loan_amount: 10000,
    loan_type: "",
    date: "",
    rate_of_interest: "",
    duration_of_loan: 3,
    loan_submitted: [],
};
const rootReducer = (state = initialState, action) => {
    if (action.type === "ADD_LOAN") {
        return {
            ...state,
            loan_amount: action.value,
        };
    }
    if (action.type === "SAVE_LIST") {
        let previous_state = [...state.loan_submitted];
        previous_state.push(action.value);
        return {
            ...state,
            loan_submitted: previous_state,
        };
    }
    return state;
};

/*      let new_state_rendered = state.loan_submitted;
        console.log("PREVIOUS", new_state_rendered);
        new_state_rendered.push(action.value); 

        console.log("PUSHHHH", new_state_rendered);
        */
export default rootReducer;
