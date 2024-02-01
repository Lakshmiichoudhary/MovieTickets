import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { movieShow_Api } from '../../uitils/constain';

const MovieDetails = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getMovieSummary = async () => {
    try {
      const response = await fetch(movieShow_Api);
      const showDataArray = await response.json();
      const selectedShow = showDataArray.find(show => show.show.id === parseInt(id));
      if (selectedShow) {
        const { name, language, image, summary,rating
        } = selectedShow.show;
  
        setShow({
          name,
          language,
          image: image?.medium,
          rating:rating?.average,
          summary,
        });
      } else {
        console.error("Show not found for id:", id);
      }
    } catch (error) {
      console.error("Error fetching show details:", error);
    }
  };
 
  useEffect(() => {
    getMovieSummary();
  }, [id]);

  if (!show) {
    return <div>Loading...🔃</div>;
  }

  const handleBookTicket = () => {
    const userDetails = {
      movieName: show.name,
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    navigate('/bookTicket');
  };


  return (
    <div className='p-2 px-6 font-medium bg-gradient-to-br from-purple-400'>
      <h2 className='m-4'>Movie Name : {show.name}</h2>
      <p className='m-4'>Language : {show.language}</p>
      <div className='md:flex'>
      <img className='m-3' src={show.image} alt={show.name} />
      <div className='m-4 md:w-96' dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
      <div className='flex'>
      <h1 className='ml-4 m-2'>Rating : {show.rating}</h1>
      <button className='p-2 bg-gray-950 text-white ml-4' onClick={handleBookTicket}>
        Book Ticket
      </button>
      </div>
    </div>
  );
};

export default MovieDetails;
