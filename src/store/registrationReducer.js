import { ADD_USER } from "../store/action";

const initialState = {
  fullname: "diba p",
  email: "",
  username: "",
  password: "",
  address1: "",
  address2: "",
  country: "",
  state: "",
  city: "",
  zip: "",
  pan: "",
  contact_no: "",
  dob: "",
  account_type: "",
};

const registrationReducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    console.log("ACTION", action);
    return {
      ...state,
      fullname: action.fullname,
      email: action.email,
      username: action.username,
      password: action.password,
      address1: action.address1,
      address2: action.address2,
      country: action.country,
      state: action.state,
      city: action.city,
      zip: action.zip,
      pan: action.pan,
      contact_no: action.contact_no,
      dob: action.dob,
      account_type: action.account_type,
    };
  }
  return state;
};

export default registrationReducer;
