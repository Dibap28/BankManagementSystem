import { ADD_USER } from "../store/actionTypes";
import registrationReducer from "./registrationReducer";

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

describe("registration reducer", () => {
  it("it should return the initial state", () => {
    expect(registrationReducer(undefined, {})).toEqual(initialState);
  });
  it("should add user to store", () => {
    expect(
      registrationReducer(initialState, {
        type: ADD_USER,
        value: (initialState.email = "diba@gmail.com"),
      })
    );
  });
});
