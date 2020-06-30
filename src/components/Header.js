import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {startLogout} from "../actions/auth";

const Header = (props) => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <button onClick={()=>{
        props.dispatch(startLogout())
      }}
      >
        Logout
      </button>
    </header>
  );

  export default connect()(Header);