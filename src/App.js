import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    }   
  }

  handleAddTask = (input => {
    const newTask = {
      task: input,
      id: Math.floor(Math.random() * 10000),
      completed: false
    }

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTask]
    })
  })  

  handleToggleDone = selected => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map( task => {
        if(task.id === selected.id) {
          return ({
            ...task,
            completed: !task.completed
          })
        } else {
          return task;
        }
      })
    })
  }

  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter( task => {return !task.completed})
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>My Todo-List</h1>
        <TodoList todo={this.state.todoList} toggle={this.handleToggleDone}/>
        <TodoForm addTask={this.handleAddTask}/>
        <br />
        <button onClick={this.handleClearCompleted}>Clear Completed Tasks</button>
      </div>
      )
  }
}

export default App;