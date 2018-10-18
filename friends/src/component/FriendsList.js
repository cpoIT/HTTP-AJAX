import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Friend 
            handleSetData={props.handleSetData} 
            key={friend.id} 
            friend={friend}
          />
        )
      })}
    </div>
  )
}

export default FriendsList;

// Inside your React application, create a component to display the list of friends coming from the server.
// Add a form to gather information about a new friend.
// Add a button to save the new friend by making a POST request to the same endpoint listed above.
// Each friend should have the properties listed below.
// Implement Update and Delete functionality.
// for update pass the friend id as a URL parameter, and the information you want to update about the friend inside the body. You can build a new form in the UI for this, or, if you set it up correctly, reuse the form you made for the POST request.
// for delete, add a delete button, or an x icon to each friend that will delete the friend when you click it. In the request url, pass the friend id as a URL parameter.
// For reference,

// {
//   name: should be a string,
//   age: should be a number,
//   email: should be a string,
// }
