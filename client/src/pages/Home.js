import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper" id="home-container">
        <div className="row">
          <div className="col s12 center-align">
            <p className="flow-text grey-text text-darken-1">
              Register or Log-in to begin Utilizing your pantry!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                className="btn"
                id="register-button"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn"
                id="login-button"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
