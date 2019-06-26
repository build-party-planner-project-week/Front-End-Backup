import React from "react";
import Parties from "./Parties";
import { connect } from "react-redux";
import { createParty } from "../actions/partyCreateActions";
import Modal from 'react-responsive-modal'

class Home extends React.Component {
  state = {
      openModal: false,
      partyDetails: {
          title: '',
          guests: '',
          theme: '',
          date: '',
          budget: ''
      }
  };
  handleChanges = e => {
      this.setState({
        party : {
            ... this.state.party,
            [e.target.name]: e.target.value
        }
      })
  }
  openModal = () => {
      this.setState({openModal: true})
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="create-party">
          Add new party
        </button>
        <Modal open={this.state.openModal} onClose={() => this.setState({openModal: false})}>
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
