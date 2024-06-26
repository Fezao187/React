import React, { useContext, useState } from 'react';
import { TodosContext } from './App';
// import the Form and Button component from react bootstrap
import { Table, Form, Button } from 'react-bootstrap';

function ToDoList() {
    /**receive state and dispatch from index.js,
     * then proceed to map and list out the todo items.
    */
    const { state, dispatch } = useContext(TodosContext);
    // store the user entered todo text in our component state with useState
    const [todoText, setTodoText] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const buttonTitle = editMode ? "Edit" : "Add";
    // Declare handlesubmit function
    const handleSubmit = event => {
        event.preventDefault();
        // Check if edit mode is true
        if (editMode) {
            // Then edit
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } })
            // Then set edit mode to false
            setEditMode(false)
            setEditTodo(null)
        }
        else {
            // Else add
            dispatch({
                type: 'add',
                payload: todoText
            })
        }
        setTodoText("") // to clear field after adding 

    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter To Do"
                        onChange={event => setTodoText(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {buttonTitle}
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>To Do</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.text}</td>
                            <td onClick={() => {
                                setTodoText(todo.text)
                                setEditMode(true)
                                setEditTodo(todo)
                            }}>Edit</td>
                            <td onClick={() =>
                                dispatch({ type: 'delete', payload: todo })}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default ToDoList;