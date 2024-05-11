// we import useState from the react library as we will be using it for hooks
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// Declare the app
const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts",
    todosUrl = "https://jsonplaceholder.typicode.com/todos",
    [requested, setRequested] = useState(postsUrl);

  return (
    <div>
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested:{requested}
    </div>
  )
}

export default App;