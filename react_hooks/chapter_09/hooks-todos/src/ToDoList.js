import React, { useContext, useState, useEffect } from 'react';
import { TodosContext } from './App';
// import the Form and Button component from react bootstrap
import { Table, Form, Button } from 'react-bootstrap';
import useAPI from './useAPI';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

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

    const endpoint = "http://localhost:3000/todos/";
    const savedTodos = useAPI(endpoint);
    useEffect(() => {
        dispatch({ type: "get", payload: savedTodos });
    }, [savedTodos]); // dispatch whoever savedTodos changes
    // Declare handlesubmit function
    const handleSubmit = async event => {
        event.preventDefault();
        // Check if edit mode is true
        if (editMode) {
            await axios.patch(endpoint+editTodo.id,{text:todoText});
            // Then edit
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } })
            // Then set edit mode to false
            setEditMode(false)
            setEditTodo(null)
        }
        else {
            const newToDo = { id: uuidv4(), text: todoText }
            // perform the post request in ToDoList
            await axios.post(endpoint, newToDo)
            // Else add
            dispatch({
                type: 'add',
                payload: newToDo
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
                            }}><Button variant="link">Edit</Button></td>
                            <td onClick={async () => {
                                await axios.delete(endpoint + todo.id)
                            }}><Button variant="link">Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default ToDoList;