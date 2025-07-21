import React from 'react';
import '../styles/SessionsSidebar.css';

const SessionsSidebar = ({ 
  isOpen, 
  onClose, 
  sessions, 
  currentSessionId, 
  onSelectSession, 
  onNewSession 
}) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
      });
    }
  };

  const getSessionPreview = (session) => {
    if (session.messages.length === 0) return 'New conversation';
    const firstUserMessage = session.messages.find(msg => msg.role === 'user');
    return firstUserMessage ? firstUserMessage.content.substring(0, 50) + '...' : 'New conversation';
  };

  const groupSessionsByDate = (sessions) => {
    const groups = {};
    sessions.forEach(session => {
      const date = formatDate(session.createdAt);
      if (!groups[date]) groups[date] = [];
      groups[date].push(session);
    });
    return groups;
  };

  const sessionGroups = groupSessionsByDate(sessions);

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sessions-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="new-chat-button" onClick={onNewSession}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            New chat
          </button>
          <button className="close-sidebar-button" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div className="sessions-list">
          {Object.entries(sessionGroups).map(([dateGroup, groupSessions]) => (
            <div key={dateGroup} className="session-group">
              <div className="session-group-header">{dateGroup}</div>
              {groupSessions.map(session => (
                <button
                  key={session.id}
                  className={`session-item ${session.id === currentSessionId ? 'active' : ''}`}
                  onClick={() => onSelectSession(session.id)}
                >
                  <div className="session-preview">
                    {getSessionPreview(session)}
                  </div>
                  <div className="session-time">
                    {new Date(session.createdAt).toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit',
                      hour12: false 
                    })}
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SessionsSidebar;