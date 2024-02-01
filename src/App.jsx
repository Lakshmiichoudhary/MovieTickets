import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import MovieDetails from './Components/Pages/MovieDetails';
import BookTickets from './Components/Pages/BookTickets';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movieDetail/:id" element={<MovieDetails />} />
        <Route path="/bookTicket" element={<BookTickets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
