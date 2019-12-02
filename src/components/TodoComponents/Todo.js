import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.task.completed
        };
    };
    
    toggleCompleted = () => {
        if (this.state.completed === false) {
            this.setState({completed: true})
        } else {
            this.setState({completed: false})
        };
    };

    render() {
        console.log(`${this.props.task.task}: ${this.state.completed}`);
        return (
            <div className={`${this.state.completed ? 'completed' : ''}`} onClick={this.toggleCompleted}>
                <p>{this.props.task.task}</p>
            </div>
        );
    };
};

export default Todo;