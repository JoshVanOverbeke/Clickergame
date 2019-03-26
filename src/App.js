import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import shuffle from 'shuffle-array';
// import "./App.css";

class App extends React.Component {
  state={
    friends: friends,
    message: "Click an image to begin!",
    score: 0,
    tScore: 0,
    clicked: []
  }
  handleClick = id => {
    for(let i in this.state.clicked){
      if(this.state.clicked[i] === id){
        if(this.state.score > this.state.tScore){
          this.setState({
            tScore: this.state.score
          });
        }
        this.setState({
          message: "You picked incorrectly!",
          score: 0,
          clicked: []
        });
        return console.log("Game Over")
      }
    }
    this.setState({
      message: "You picked correctly!",
      score: this.state.score + 1,
      clicked: [...this.state.clicked, id], //this is the spread operator. Used to push into an array...but better
    });
    console.log(this.state.clicked)
  }
  
  render() {
    shuffle(this.state.friends);
    console.log(this.state.friends)
    return (
      <div>
        <Navbar 
          message={this.state.message}
          score={this.state.score}
          tScore={this.state.tScore}
        />
        <Jumbotron/>
        <Wrapper>
          {this.state.friends.map(
            friend => <FriendCard 
                key={friend.id}
                id={friend.id}
                name={friend.name}
                location={friend.location}
                occupation={friend.occupation}
                image={friend.image}
                handleClick={this.handleClick}
              />
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
