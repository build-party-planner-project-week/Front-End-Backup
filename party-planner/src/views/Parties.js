import React from "react";
import Party from './Party'

class Parties extends React.Component {
  //class component Component Didi Mount to retrive parties from back end

  render() {
    return (
      <div>
        <h1>Parties</h1>
        <Party />
      </div>
    );
  }
}

export default Parties;
