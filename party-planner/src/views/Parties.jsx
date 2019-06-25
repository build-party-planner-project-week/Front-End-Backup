import React from "react";
import Party from './Party'

class Parties extends React.Component {
  //class component Component Didi Mount to retrive parties from back end

  render() {
    //List of parties
    return (
      <div className="party-list">
        <Party />
      </div>
    );
  }
}

export default Parties;
