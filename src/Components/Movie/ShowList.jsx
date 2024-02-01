import React, { useEffect, useState } from 'react';
import Show from './Show';
import { movieShow_Api } from '../../uitils/constain';


const ShowList = () => {
  const [shows, setShows] = useState([]);

  const getMovie = async () => {
    try {
      const response = await fetch(movieShow_Api);
      const showsData = await response.json();

      const formattedShows = showsData
        .filter(show => show.show.image) 
        .map(show => ({
          id: show.show.id,
          name: show.show.name,
          image: show.show.image.medium,
        }));

      setShows(formattedShows);
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h2 className='p-2 text-center font-bold text-2xl'>Show List</h2>
      <ul className='flex flex-wrap m-2 p-2'>
        {shows.map(show => (
          <Show key={show.id} {...show} />
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
