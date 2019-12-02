import React from 'react';

import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo,
      inputField: ''
    };
  };

  addTask = newTaskText => {
    const newTask = {
      task: newTaskText,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  handleChange = e => {
    this.setState({
      inputField: e.target.value   
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addTask(this.state.inputField);
    this.setState({
      inputField: ''
    });
  };

  render() {
    console.log(todo);

    return (
      <div>
        <h2>To-Do List</h2>
        <TodoList todo={this.state.todo} />
        <TodoForm inputField={this.state.inputField} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
