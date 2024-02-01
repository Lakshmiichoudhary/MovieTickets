import React, { useEffect, useState } from 'react';

const BookTickets = ({ movieName }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim()) {
      alert('Please enter both name and contact details.');
      return;
    }

    const userBooking = {
      movieName,
      name: formData.name,
      contact: formData.contact,
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = [...existingBookings, userBooking];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    setFormData({
      name: '',
      contact: '',
    });

    alert('Booking added successfully!');
  };

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    setUserDetails(storedUserDetails);
  }, []);

  return (
    <div className="text-center p-2 ">
      <h1 className='font-bold text-2xl'>Booking Your Show🍿</h1>
      {userDetails && (
        <div>
          <p className='m-2 p-2 font-bold text-purple-900'>
            Movie Name: {userDetails.movieName}
          </p>
          <form className='p-6 h-60 text-center bg-gray-950 m-6 md:w-3/12 text-white mx-auto left-0 right-0' 
          onSubmit={handleSubmit}>
            <label className='m-2 p-2'>
              Name:
              <input className='p-2 m-2 rounded-md'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label  className='m-2 p-2'>
              Contact:
              <input className='p-2 m-2 rounded-md'
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </label>
            <button className='p-2 m-2 bg-purple-900 rounded-lg' type="submit">Add Booking</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookTickets;
