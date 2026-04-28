import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import RideHistoryPage from './pages/RideHistoryPage';
import RideBookingPage from './pages/RideBookingPage';
import ActiveRidePage from './pages/ActiveRidePage';
import PaymentsPage from './pages/PaymentsPage';
import RatingsPage from './pages/RatingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="history" element={<RideHistoryPage />} />
        <Route path="booking" element={<RideBookingPage />} />
        <Route path="active" element={<ActiveRidePage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="ratings" element={<RatingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
