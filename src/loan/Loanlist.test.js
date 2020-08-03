import React from "react";
import { shallow, configure } from "enzyme";
import Loanlist from "./Loanlist";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";

const initialState = {
  loan_amount: 10000,
};
const mockStore = configureStore([]);
let store, container;
configure({ adapter: new Adapter() });

beforeEach(() => {
  store = mockStore(initialState);
  container = shallow(<Loanlist store={store} />);
});

describe("<Loanlist />", () => {
  it("render the connected loanlist component", () => {
    expect(container.length).toEqual(1);
  });

  // it("checks props match with initialstate", () => {
  //   expect(container.props("loan_amount")).toEqual(initialState.loan_amount);
  // });
});
