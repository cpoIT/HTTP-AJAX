import React from 'react';

const EditFriendForm = props => {
  return (
    <div>
      <input 
        placeholder={props.friend.name} 
        type="text" 
        onChange={props.editName} 
      />
      <button onClick={props.saveEditFriend}>Save Friend</button>
    </div>
  )
};

export default EditFriendForm;