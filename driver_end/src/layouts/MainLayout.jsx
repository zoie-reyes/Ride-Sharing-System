import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import ChatFAB from '../components/ChatFAB';
import ChatPopup from '../components/ChatPopup';

export default function MainLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <TopBar />
        <Outlet />
        {isChatOpen && <ChatPopup onClose={() => setIsChatOpen(false)} />}
        <ChatFAB onClick={() => setIsChatOpen(!isChatOpen)} />
      </main>
    </div>
  );
}
