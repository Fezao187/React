import React from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Lim',
    imageUrl: 'https://picsum.photos/200/300'
  };

  const isValid = true;
  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <br />
      <img src={user.imageUrl} alt='random_img'></img>
      {/* Call the products component */}
      <hr />
      <Products />
      <Button variant="outline-primary" disabled={!isValid}>Default</Button>
      <hr />
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
    </div>
  );
}
export default App;