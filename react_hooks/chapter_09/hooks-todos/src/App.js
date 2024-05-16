import React, { useReducer } from 'react';
import ToDoList from './ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const todosInitialState = {
  // Define initial todo state
  todos: []
};

export const TodosContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState)
  return (
    // use TodosContext to make state and dispatch available to child components. 
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  )
}

// Define our todos reducer function
function todosReducer(state, action) {
  switch (action.type) {
    case 'get':
      return { ...state, todos: action.payload }
    case 'add':  
      // add new todo onto array 
      const addedToDos = [...state.todos, action.payload]
      // spread our state and assign todos 
      return { ...state, todos: addedToDos }
    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !==
        action.payload.id)
      return { ...state, todos: filteredTodoState }
    case 'edit':
      const updatedToDo = { ...action.payload }
      const updatedToDoIndex = state.todos.findIndex(t => t.id ===
        action.payload.id)
      // create a new array with the changed todo in between
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos }
    default:
      return todosInitialState
  }
}

export default App;