import React from 'react';
import { Link } from 'react-router-dom';

const Show = ({ id, name, image }) => (
  <li key={id} className="show-item hover:scale-110">
    <Link to={`/movieDetail/${id}`}>
      <img className="m-2 p-4" src={image} alt={name}  />
      <p className='m-2 p-4 font-bold bg-purple-900'>{name}</p>
    </Link>
  </li>
);

export default Show;