import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './pages/Layout';

import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import BookingsPage from "./pages/bookings/BookingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="bookings" element={<BookingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
