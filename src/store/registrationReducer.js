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
    console.log("ACTION", state);
    return {
      ...state,
      fullname: action.value.fullname,
      email: action.value.email,
      username: action.value.username,
      password: action.value.password,
      address1: action.value.address1,
      address2: action.value.ddress2,
      country: action.value.country,
      state: action.value.state,
      city: action.value.city,
      zip: action.value.zip,
      pan: action.value.pan,
      contact_no: action.value.contact_no,
      dob: action.value.dob,
      account_type: action.value.account_type,
    };
  }
  return state;
};

export default registrationReducer;
