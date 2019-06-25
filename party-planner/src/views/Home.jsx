import React from 'react';
import Parties from './Parties'

class Home extends React.Component {
    state = {


    }

    render(){
        return (
            <div>
                <button className="create-party">Add new party</button>
                <Parties />
            </div>
        )
    }
}

export default Home