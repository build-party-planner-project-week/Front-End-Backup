import React from 'react';
import ShoppingList from './ShoppingList';
import ShoppingForm from './ShoppingForm';

function ShoppingContainer() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingForm />
      <ShoppingList />
    </div>
  );
}

export default ShoppingContainer;
