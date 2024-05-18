
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Import todoapp
import TodoApp from "./todo/todoApp";

class App extends React.Component {

  render() {

    return (
      // Render the todo app
      <TodoApp />
    );

  }
}
export default App;