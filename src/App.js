import React, { Component } from 'react';


class App extends Component {
  state = {
    tasks:[
      "finsih react project",
     "Finish Redux Tutorials",
     "Learn more about Relay",
     "Build 5 more React apps",
     "Review React Component Lifecycle",
     "Learn Algorithms",
     "Tweet Progress",
     "Get a coffee!",
    "Learn more about React Native"
]
  }
  render() {
    return (
      <div className="App">
       <h1 align="center">TODO List </h1>
       {this.state.tasks.map(task => <p align='center'>{task}</p>)}
      </div>
    );
  }
}

export default App;
