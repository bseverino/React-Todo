import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type='text' name='task' value={this.props.inputField} onChange={this.props.handleChange} />
                <button>Add Task</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        );
    };
};

export default TodoForm;