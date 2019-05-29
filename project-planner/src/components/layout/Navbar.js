import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";

const Navbar = props => {
  const { auth } = props.auth;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Planner
        </Link>
        {auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
