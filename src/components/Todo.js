import React from "react";

class Todo extends React.Component {

    handleClick = () => {
        this.props.done(this.props.task)
    }

    render() {
        console.log(this.props.task.completed)
        return (
            <div onClick={this.handleClick} className={this.props.task.completed ? "completed" : ""}>
                <p>{this.props.taskName}</p>
            </div>
        )
    }
}

export default Todo;