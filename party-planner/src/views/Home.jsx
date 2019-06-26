import React from "react";
import Parties from "./Parties";
import { connect } from "react-redux";
import { createParty } from "../actions/partyCreateActions";
import Modal from 'react-responsive-modal'

class Home extends React.Component {
  state = {
      openModal: false
  };

  render() {
    return (
      <div>
        <button onClick={this.props.createParty} className="create-party">
          Add new party
        </button>
        <Modal>
            <form>
                <label>Party title</label>
                <input name="title" value={this.state.partyDetails.title} onChange={this.handleChanges}/>
                <label>Number of guests</label>
                <input name="guests" value={this.state.partyDetails.guests} onChange={this.handleChanges}/>
                <label>Theme</label>
                <input name="theme" value={this.state.partyDetails.theme} onChange={this.handleChanges}/>
                <label>Date</label>
                <input name="date" value={this.state.partyDetails.date} onChange={this.handleChanges}/>
                <label>Budget</label>
                <input name="budget" value={this.state.partyDetails.budget} onChange={this.handleChanges}/>
            </form>
        </Modal>
        <Parties />
      </div>
    );
  }
}

export default connect(
  null,
  { createParty }
)(Home);
