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
],
newItem:''
  }

handleChange = (newItem) => {
  this.setState({newItem:newItem.trim()})
}

updateItem = (newItem) => {
  console.log(this.state.newItem);
  this.state.tasks.push(this.state.newItem)
  this.setState({newItem:''}) //need to update UI
}
  render() {
    return (
      <div className="App">
       <h1 align="center">TODO List </h1>
       <input
        className ="search"
        type='text'
        placeholder='Add New Item'
        value = {this.state.newItem}
        onChange = {event => this.handleChange(event.target.value)}
       />
       <button onClick = { this.updateItem}>Add New Task</button>
       {this.state.tasks.map((task, index) => <p align='center' key={index}>{task}</p>)}
      </div>
    );
  }
}

export default App;
