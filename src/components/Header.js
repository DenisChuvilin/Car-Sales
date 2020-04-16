import React from 'react';


const Header = (props) => {
  // console.log(name);

  return (
    <>
      <h1>Header</h1>
      <figure className="props.image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default Header