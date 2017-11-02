import React, { Component } from 'react'

export default class TaskDetail extends Component{



  render(){
    let { tasks, handleDelete } = this.props
    return(
      <div>
     <h1> Task Detail</h1>
     <table>
      <thead>
      <tr>
      <td>Number</td>
      <td>Tasks</td>
      <td>Actions</td>
      </tr>
      </thead>
      <tbody>
      { tasks.map((task,index) =>
        <tr key={index}>
        <td>Task No {index+1}</td>
        <td>{task}</td>
        <td><button onClick ={() => handleDelete(task)}>(X)</button></td>
        </tr>
      )}

      </tbody>
      </table>


      </div>

    )
  }
}
