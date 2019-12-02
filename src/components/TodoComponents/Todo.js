import React from 'react';

const Todo = props => {
    return (
        <div className={`${props.task.completed ? 'completed' : ''}`}>
            <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;