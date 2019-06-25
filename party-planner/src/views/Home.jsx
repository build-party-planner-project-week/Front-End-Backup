import React from "react";
import Parties from "./Parties";
import { connect } from "react-redux";
import { createParty } from "../actions/partyCreateActions";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <button onClick={this.props.createParty} className="create-party">
          Add new party
        </button>
        <Parties />
      </div>
    );
  }
}

export default connect(
  null,
  { createParty }
)(Home);
