import React from "react";
import Loan from "../customer/Loan";
import Profile from "../customer/Profile";
import Loanlist from "../customer/Loanlist";
import Mytiles from "../customer/Mytiles";
import { useLocation } from "react-router";

const Content = () => {
  const path = useLocation().pathname;
  return (
    <React.Fragment>
      {path === "/dashboard" ? <Mytiles /> : ""}
      {path === "/loan" ? <Loan /> : ""}
      {path === "/profile" ? <Profile /> : ""}
      {path === "/list" ? <Loanlist /> : ""}
    </React.Fragment>
  );
};

export default Content;
