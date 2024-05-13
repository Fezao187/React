// we import useState from the react library as we will be using it for hooks
// import useEffect from the react library.
import React, { useState } from 'react';
import useFetch from './useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Users from './Users';

// Declare the app
const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts",
    todosUrl = "https://jsonplaceholder.typicode.com/todos",
    // we have a variable requested in our state, and we set its initial value to postsUrl.
    // setRequested is the setter method to update the value of this piece of state
    [requested, setRequested] = useState(postsUrl),
    // nitialize data to an empty array
    data = useFetch(requested);

  return (
    <div>
      <Users />
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested:{requested}
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;