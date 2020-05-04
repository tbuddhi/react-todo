import React, { Component } from 'react'
import ListItem from './TodaysList';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoItems: [],
            newTodo: ''
        }
    }

    render(){
        const {todoItems, newTodo} = this.state

        return(
            <div className="App">
                <h1>TODO</h1>
                <h3>Add Your Work</h3>

                <input type="text" value={newTodo} onChange={
                    (event) => {
                        this.setState ({
                        newTodo: event.target.value
                    })}
                } />
                <button onClick={
                    () => {
                        this.setState({
                            todoItems: [...todoItems, {
                                id: newTodo,
                                name: newTodo
                            }]
                        })      
                    }
                }>Add</button>

                <h3>Today's Task List</h3>

                <ListItem todoItems={todoItems} />
            </div>
        )
    }
}

export default ToDoList