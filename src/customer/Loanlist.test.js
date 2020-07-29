import React from "react";
import { shallow, configure } from "enzyme";
import Loanlist from "./Loanlist";
import Adapter from "enzyme-adapter-react-16";
import { Card } from "react-bootstrap";

configure({ adapter: new Adapter() });
describe("<Loanlist />", () => {
  it("we have 8 td elements", () => {
    const wrapper = shallow(<Loanlist></Loanlist>);
    expect(wrapper.find(Card)).toHaveLength(1);
  });
});
