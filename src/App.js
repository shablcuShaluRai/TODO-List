import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

let intialTasks = [
  "finsih react project",
 "Finish Redux Tutorials",
 "Learn more about Relay",
 "Build 5 more React apps",
 "Review React Component Lifecycle",
 "Learn Algorithms",
 "Tweet Progress",
 "Get a coffee!",
"Learn more about React Native"
];

class App extends Component {


  state = {
    tasks:intialTasks,
newItem:'',
query:''
  }

handleChange = (newItem) => {
  this.setState({newItem})
}

updateQuery = (query) => {
  this.setState({query})
}

updateItem = (newItem) => {
  console.log(this.state.newItem);
  this.state.tasks.push(this.state.newItem)
  this.setState({newItem:''}) //need to update UI
}


handleReset = () => {
  this.setState({ tasks: intialTasks })

}

handleClear = () => {
  this.setState({tasks: []})
}



  render() {
    let showingTask
   let {query, tasks} = this.state;

   if(query){
     const match = new RegExp(escapeRegExp(query), 'i')
     showingTask = tasks.filter(task => match.test(task))
   }
  else {
    showingTask = tasks
  }

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
       <input
        type = 'text'
        placeholder = 'Search the task '
        value = { this.state.query}
        onChange = {event => this.updateQuery(event.target.value)}
        />
       <button onClick = { this.updateItem}>Add New Task</button>
       <button onClick = { this.handleClear}>Clear the list </button>
       <button onClick = { this.handleReset}>Reset the list</button>
       {showingTask.map((task, index) => <p align='center' key={index}>{task}</p>)}
      </div>
    );
  }
}

export default App;
