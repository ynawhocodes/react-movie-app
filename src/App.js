import React from 'react';

function Food( {name, price}) {
  return (
    <div>
      <p>name: {name}</p>
      <p>{price}</p>
    </div>
  );
}
function App() {
  return (
    <div>
      {foodList.map(props => (<Food key={props.id} name={props.name} price={props.price}/> ))}
    </div>
  );
}

const foodList = [
  {
    id: 1,
    name: "apple",
    price: 5000, 
    rating: 4,
  },
  {
    id: 1,
    name: "banana",
    price: 2000, 
    rating: 3.5,
  },
  {
    id: 1,
    name: "lemon",
    price: 10000, 
    rating: 3,
  },

]
export default App;
