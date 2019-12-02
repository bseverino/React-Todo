import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form className='todo-form' onSubmit={this.props.handleSubmit}>
                <input className='todo-input' type='text' name='task' value={this.props.inputField} onChange={this.props.handleChange} />
                <button className='todo-button'>Add Task</button>
                <button className='todo-button' onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        );
    };
};

export default TodoForm;