import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './pages/Layout';

import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import BookingsPage from "./pages/bookings/BookingsPage";

import HospitalContext from "./contexts/HospitalContext";
import { useState } from 'react';
import BookedContext from './contexts/BookedContext';

function App() {
  const [hospitals, setHospitals] = useState([]);
  const [booked, setBooked] = useState([]);
  return (
    <HospitalContext.Provider value={[hospitals, setHospitals]}>
      <BookedContext.Provider value={[booked, setBooked]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            
            <Route path="search" element={<SearchPage />} />
            <Route path="bookings" element={<BookingsPage />} />
          </Route>
        </Routes>
      </BookedContext.Provider>
    </HospitalContext.Provider>
  );
}

export default App;
