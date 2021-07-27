import React from 'react';
import PropTypes from 'prop-types'

function Food( {name, price, rating}) {
  return (
    <div>
      <p>name: {name}</p>
      <p>{price}</p>
      <p>rating: {rating}</p>
    </div>
  );
}
function App() {
  return (
    <div>
      {foodList.map(props => (<Food key={props.id} name={props.name} price={props.price} rating={props.rating}/> ))}
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
    id: 2,
    name: "banana",
    price: 2000, 
    rating: 3.5,
  },
  {
    id: 3,
    name: "lemon",
    price: 10000, 
    rating: 3,
  },

]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
