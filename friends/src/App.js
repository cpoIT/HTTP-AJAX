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
      friendsData: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/friends').then(response => {
      console.log(response);
      this.setState({ friendsData: response.data})
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lambda Friends</h1>
          <FriendsList friends={this.state.friendsData} />
        </header>
      </div>
    );
  }
}

export default App;
