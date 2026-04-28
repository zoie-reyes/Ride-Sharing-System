import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function ChatFAB({ onClick }) {
  return (
    <button className="chat-fab" onClick={onClick}>
      <MessageSquare size={24} />
    </button>
  );
}
