import React from "react";
import { configure, mount } from "enzyme";
import Registration from "./Registration";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Form } from "react-bootstrap";

const initialState = {
  fullname: "test",
};

const mockStore = configureStore([]);
let store, container;
configure({ adapter: new Adapter() });

beforeEach(() => {
  store = mockStore(initialState);
  container = mount(<Provider store={store}></Provider>);
});

describe("<Registration />", () => {
  // Check that the correct action is dispatched on a given event

  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });
  it("render the connected Registration component", () => {
    expect(container.length).toEqual(1);
  });

  it("should have an button", () => {
    expect(container.find(".button"));
  });
  it("should have proper props for email field", () => {
    const component = mount(
      <Form.Control type="email" name="email" placeholder="enter email" />
    );
    expect(component.find('FormControl[name="email"]').props()).toEqual({
      placeholder: "enter email",
      type: "email",
      name: "email",
    });
  });
});
