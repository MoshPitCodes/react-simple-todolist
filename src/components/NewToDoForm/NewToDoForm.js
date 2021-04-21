import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewToDoForm.css";

export class NewToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTask({ ...this.state, id: uuidv4(), completed: false });
    this.setState({
      task: "",
    });
  }

  render() {
    return (
      <form className="NewToDoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="text">New Task</label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="New Task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default NewToDoForm;
