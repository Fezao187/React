// Import react
import React from "react";
// Create Toto List Component
class TodoList extends React.Component {

    render() {
        return (
            // Display todolist in ul tag
            <ul className="list-group list-group-flush">
                {
                    this.props.items.map((value, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li className="list-group-item bg-light d-flex justify-content-between">{value}
                                {/* Create a delete button */}
                                    <button className="btn text-danger badge" onClick={() => { this.props.deleteTodo(index) }}>X</button>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        );
    }
}
export default TodoList;