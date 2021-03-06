import React from 'react';

const Todo = props => {
    return (
        <div className={`todo-item ${props.task.completed ? 'completed' : ''}`} onClick={() => props.toggleCompleted(props.task)}>
            <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;