import React from 'react';
import EditFriendForm from './EditFriendForm';
import axios from 'axios';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
      editedFriend: '',

    }
  }

  toggleForm = () => {
    this.setState({ showEditForm: !this.state.showEditForm})
  }

  editHandler = event => {
    this.setState({ editedFriend: event.target.value})
  }

  // setData = data => {
  //   this.setState({ friend: data })
  // }

  saveEditFriend = (props) => {
    console.log(props)
    const newFriend = { newFriend: this.state.editedFriend }
    axios
      .put(`http://localhost:5000/friends/${this.props.friend.id}`, newFriend)
      .then(response => {
        console.log("PUT RESPONSE:", response)
        this.setState({ friendsData: response.data})
      })
      .catch(error => console.log(error))
  }

  handleDelete = id => {
    console.log(id)
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log("DELETE RESPONSE:", response)
        this.setState({ friendsData: response.data })
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        {this.props.friend.name}
        {this.state.showEditForm ? (
          <EditFriendForm 
            submitEdits={this.saveEditFriend}
            friend={this.props.friend} 
            editHandler={this.editFriendHandler}
          />
        ) : null}
        <button onClick={this.toggleForm}>Edit Friend</button>
        <button onClick={this.handleDelete.id}>Delete Friend</button>
      </div>
    )
  }
}

export default Friend;

// editHandler={() => console.log("Add editHandler")}
