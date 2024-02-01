// Show.jsx
import React from 'react';

const Show = ({ id, name, image }) => {

  return (
    <li key={id}>
        <img className='m-2 p-4 hover:scale-110' src={image} alt={name} />
        <p className='m-2 p-4'>{name}</p>
    </li>
  )
};

export default Show;
