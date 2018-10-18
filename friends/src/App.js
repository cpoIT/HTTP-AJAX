import React, { Component } from 'react';
import FriendsList from './component/FriendsList';
import Friend from './component/Friend';
// import logo from './logo.svg';
import './App.css';
import axios from '../../node_modules/axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: '',
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      console.log("GET RESPONSE:", response);
      this.setState({ friendsData: response.data})
    })
    .catch(err => {
      console.log(err)
    });
  };

  handleSetData = data => this.setState({friendsData: data})

  handleNameChange = event => {
    this.setState({ friend: event.target.value })
  }

  handleAddFriend = () => {
    const friend = {name: this.state.friend};
    axios
      .post('http://localhost:5000/friends', friend )
      .then(response => {
        console.log("POST RESPONSE:", response)
        this.setState({ friendsData: response.data, friend: ""})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lambda Friends</h1>
          <input 
            type='text' 
            placeholder="new friend's name" 
            onChange={this.handleNameChange}
            name="friend"
            value={this.state.friend}
            />
            <button onClick={this.handleAddFriend}>Add Friend</button>
          <FriendsList 
            friends={this.state.friendsData} 
            handleSetData={this.handleSetData}/>
        </header>
      </div>
    );
  }
}

export default App;



//   const friend = {name: this.state.name, age: this.state.age, email: this.state.email};

//       this.setState({ friendsData: response.data, age:'', email:''})
