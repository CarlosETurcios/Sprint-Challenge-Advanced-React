import React, { Component } from 'react';
import Styling from "./DarkModeStyling/styling"
import './App.css';
import PlayerCard from './PlayerCard';
import Nav from './Nav';

class App extends Component {
  state = {
    playerCard: []
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(player => {
        console.log("this is the what the player returns", player)
        this.setState({ ...this.state, playerCard: player })
      })
      .catch(err => console.log("error", err))
  }
  render() {
    return (
      <Styling>
        <div className="App">
          <Nav />
          {this.state.playerCard.map(playerCard => (
            <PlayerCard playerCard={playerCard} key={playerCard.id} />
          ))}

        </div>
      </Styling>
    );
  }
}

export default App;
