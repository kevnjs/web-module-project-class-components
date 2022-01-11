import React from "react";
import Todo from "./Todo";


class TodoList extends React.Component {
    render() {
        console.log(this.props.todo)
        return (
          <div>
              {
                  this.props.todo.map((t, index) => (
                      <Todo key={index} taskName={t.task} done={this.props.toggle} task={t}/>
                  ))
              }
          </div>
        )
    }
}

export default TodoList;