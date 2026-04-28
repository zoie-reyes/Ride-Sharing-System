import React from 'react';
import { X, Send } from 'lucide-react';
import './ChatPopup.css';

export default function ChatPopup({ onClose }) {
  return (
    <div className="chat-popup">
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-avatar"></div>
          <div>
            <div className="chat-name">Zoie R.</div>
            <div className="chat-role">Rider</div>
          </div>
        </div>
        <button className="chat-close" onClick={onClose}><X size={20}/></button>
      </div>
      
      <div className="chat-body">
        <div className="chat-message received">
          <div className="chat-bubble">
            Hi Zoie, I've arrived at the pickup location. I'm in a Black Honda Civic.
          </div>
          <div className="chat-time">12:45 PM</div>
        </div>
      </div>
      
      <div className="chat-footer">
        <div className="chat-input-wrapper">
          <input type="text" placeholder="Type a message..." className="chat-input" />
          <button className="chat-send"><Send size={16}/></button>
        </div>
      </div>
    </div>
  );
}
