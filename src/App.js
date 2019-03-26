import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import lotr from "./lotr.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import shuffle from 'shuffle-array';
// import "./App.css";

class App extends React.Component {
  state={
    lotr: lotr,
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
    shuffle(this.state.lotr);
    console.log(this.state.lotr)
    return (
      <div>
        <Navbar 
          message={this.state.message}
          score={this.state.score}
          tScore={this.state.tScore}
        />
        <Jumbotron/>
        <Wrapper>
          {this.state.lotr.map(
            character => <ImageCard 
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                handleClick={this.handleClick}
              />
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
