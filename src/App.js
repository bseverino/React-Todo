import React from 'react';

import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/TodoComponents/SearchForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: window.localStorage.getItem('todo') ? JSON.parse(window.localStorage.getItem('todo')) : [],
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

  toggleCompleted = completeTask => {
    const currentTask = this.state.todo.indexOf(this.state.todo.find(item => item.id === completeTask.id));
    const updatedTodo = this.state.todo;

    if (completeTask.completed === false) {
      updatedTodo.splice(currentTask, 1, {task: completeTask.task, id: completeTask.id, completed: true})
    } else {
      updatedTodo.splice(currentTask, 1, {task: completeTask.task, id: completeTask.id, completed: false})
    };

    this.setState({todo: updatedTodo});
  };

  clearCompleted = e => {
    e.preventDefault();
    const filteredTodo = this.state.todo.filter(task => !task.completed)
    this.setState({todo: filteredTodo});
  };

  render() {
    window.localStorage.setItem('todo', JSON.stringify(this.state.todo));

    return (
      <div className='todo-container'>
        <h2>To-Do List:</h2>
        {/* <SearchForm todo={this.state.todo} /> */}
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} />
        <TodoForm inputField={this.state.inputField} handleChange={this.handleChange} handleSubmit={this.handleSubmit} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
