import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };

  render() {
    return (
      <div>
        <form>
            <h3>Login</h3>
          <input />
        </form>
      </div>
    );
  }
}

export default Login
