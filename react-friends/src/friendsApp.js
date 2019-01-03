import React, { Component } from 'react';
import { people } from './people.js';
import PeopleList from './peopleList';

class FriendsApp extends Component {
    constructor() {
        super();
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        this.setState({ people: people});
    }

    render() {
        return (
            <div>
                <h3>Hello!</h3>
                <PeopleList peopleProp={this.state.people} />
            </div>
        )
    }
}

export default FriendsApp;