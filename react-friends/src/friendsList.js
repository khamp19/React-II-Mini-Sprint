import React, { Component } from 'react';

class FriendsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: true,
        }
    }

    render() {
        return (
            <div>
                <p>here's a friendlist</p>
            </div>
        )
    }
}

export default FriendsList;