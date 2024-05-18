// Create Todo App Component
import React from "react";
// Import todolist
import TodoList from "./todoList"
class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            // Ddefine objrct property for todo input
            inputData: "",
            // store todo items to store todo items
            todoItems: []
        }
    }
    // 
    changeTodoInput = (event) => {
        // Update existing value while typing
        this.setState({ inputData: event.target.value })
    }

    // Add todo item
    addTodo = (event) => {
        if (this.state.inputData !== '') {
            let newTodoItems = [...this.state.todoItems, this.state.inputData];
            this.setState({ todoItems: newTodoItems, inputData: "" })
        }
    }
// Delete todo item
    deleteTodo = (index) => {
        let todoItems = [...this.state.todoItems];
        let newTodoItems = todoItems.filter((value, key) => {
            return index !== key
        })
        this.setState({ todoItems: newTodoItems })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3 className="text-center">React Todo App</h3>
                        <div className="input-group">
                            <input type="text" placeholder="Enter Something" className="form-control" onChange={this.changeTodoInput} value={this.state.inputData} />
                            <div className="input-group-append">
                                <span className="btn btn-success " onClick={this.addTodo}>Add</span>
                            </div>
                        </div>
                        {/* Render the todolist items*/}
                        <TodoList items={this.state.todoItems} deleteTodo={this.deleteTodo} />
                    </div>
                </div>
            </div>

        );
    }
}

export default TodoApp;