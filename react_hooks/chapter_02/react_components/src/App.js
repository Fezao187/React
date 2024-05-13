import React from 'react';
import Products from './Products';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Lim',
    imageUrl: 'https://picsum.photos/200/300'
  };

  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <br/>
      <img src={user.imageUrl}></img>
      {/* Call the products component */}
      <Products />
    </div>
  );
}
export default App;