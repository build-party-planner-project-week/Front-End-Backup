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
            <label>Username</label>
          <input type="text" name="username" value={this.state.creds.username} onChange={this.handleChanges} required/>
          <label>Password</label>
          <input type="password" name="password" value={this.state.creds.password} onChange={this.handleChanges} required/>

        </form>
      </div>
    );
  }
}

export default Login
