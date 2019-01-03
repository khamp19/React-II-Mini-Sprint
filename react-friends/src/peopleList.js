import React from 'react';
import FriendsList from './friendsList';

const PeopleList = (props) => {
    return (
        <div>
            {props.peopleProp.map((person, i) => {
                return (
                    <div key={i}>
                        <p>{person.first_name} {person.last_name}: {person.email}</p>
                        <FriendsList />
                    </div>
                )
            })}
        </div>
    )
}

export default PeopleList;

// <div key={i}>
//     <p>{person.first_name}</p>
//     <p>{person.last_name}</p>
//     <br></br>
//     <p>{person.email}</p>
//     <br></br>
// </div>