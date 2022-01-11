import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = event => {
        this.setState({
          ...this.state,
          input: event.target.value
        });
      };
    
      // class property to submit form
      handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({
            ...this.state,
            input: ""
        })
      }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type="text" placeholder="Add a new Task" name="task" value={this.state.input} />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;