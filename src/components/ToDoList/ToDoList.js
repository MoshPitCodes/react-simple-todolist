import React, { Component } from "react";
import NewToDoForm from "../NewToDoForm/NewToDoForm";
import ToDo from "../ToDo/ToDo";
import "./ToDoList.css";

export class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <ToDo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTask={this.remove}
          updateTask={this.update}
          toggleCompletion={this.toggleCompletion}
        />
      );
    });

    return (
      <div className="ToDoList">
        <h1>
          ToDoList: <span>A simple ToDo List in ReactJS</span>
        </h1>

        <ul>{todos}</ul>
        <NewToDoForm createTask={this.create} />
      </div>
    );
  }
}

export default ToDoList;
