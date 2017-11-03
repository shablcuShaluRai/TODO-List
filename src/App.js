import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import TaskDetail from './TaskDetails'

let intialTasks = [
   "Finish react project",
   "Finish Redux Tutorials",
   "Learn more about Relay",
   "Build 5 more React apps",
   "Review React Component Lifecycle",
   "Learn Algorithms",
   "Tweet Progress",
   "Get a coffee!",
   "Learn more about React Native"
   ];

export default class App extends Component {

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
    this.state.tasks.push(this.state.newItem)
    this.setState({newItem:''})
   }

  handleReset = () => {
    this.setState({ tasks: intialTasks })
  }

  handleClear = () => {
    this.setState({tasks: []})
  }

  handleDelete = (tasks) => {
    this.setState((state) => ({
     tasks:state.tasks.filter((d) => d !== tasks )
     })
    )
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
       <div className="mainContainer">
         <h1 align="center"  className = "titles">React TO-DO List App </h1>
         <h2 className= 'subtitle'> Enhance your productivity </h2>
         <input
           className ="newTask"
           type='text'
           placeholder='Add New Item'
           value = {this.state.newItem}
           onChange = {event => this.handleChange(event.target.value)}
         />
        <input
          className = 'search'
          type = 'text'
          placeholder = 'Search the task '
          value = { this.state.query}
          onChange = {event => this.updateQuery(event.target.value)}
        />
        <button  className = 'enter' onClick = { this.updateItem}>Add New Task</button>
        <TaskDetail
          tasks = {showingTask}
          handleDelete = { this.handleDelete}
        />
        <button  className = 'clear' onClick = { this.handleClear}>Clear the list </button>
        <button className = 'reset' onClick = { this.handleReset}>Reset the list</button>
      </div>
    );
  }
}
