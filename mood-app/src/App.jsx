import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import HomeView from './views/HomeView';
import ChatView from './views/ChatView';
import UploadView from './views/UploadView';
import CalendarView from './views/CalendarView';
import DisclaimerModal from './components/DisclaimerModal';

const App = () => {
  // --- STATE MANAGEMENT ---
  const [currentView, setCurrentView] = useState('home');
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [inputText, setInputText] = useState('');
  const [stressLevel, setStressLevel] = useState(3);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello. I noticed your stress levels are a bit high. Want to talk about it?' }
  ]);

  // --- MOCK DATA ---
  const savedPlaylists = [
    { id: 1, title: 'Calm Vibes', lvl: 2 },
    { id: 2, title: 'Study Focus', lvl: 4 },
    { id: 3, title: 'Gym Pump', lvl: 8 },
  ];

  // --- CHAT LOGIC ---
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (currentView === 'chat') {
      scrollToBottom();
    }
  }, [chatMessages, currentView]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    const newUserMsg = { sender: 'user', text: inputText };
    setChatMessages([...chatMessages, newUserMsg]);
    setInputText('');

    setTimeout(() => {
      let botResponse = { sender: 'bot', text: "I hear you. That sounds tough." };
      if (chatMessages.length > 2) {
          botResponse = { 
            sender: 'bot', 
            type: 'playlist',
            text: "Here is a playlist! Hope this helps <3. Here are the top 3 songs:",
            songs: ["Weightless - Marconi Union", "Strawberry Swing - Coldplay", "Electra - Airstream"]
          };
      }
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans flex flex-col md:flex-row text-gray-800">
      
      {/* 1. Navigation (Shared) */}
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />

      {/* 2. Main Content Area */}
      <main className="flex-1 h-[calc(100vh-64px)] md:h-screen overflow-y-auto relative">
          {currentView === 'home' && (
            <HomeView 
              setCurrentView={setCurrentView} 
              savedPlaylists={savedPlaylists} 
            />
          )}
          
          {currentView === 'chat' && (
            <ChatView 
              setCurrentView={setCurrentView}
              chatMessages={chatMessages}
              inputText={inputText}
              setInputText={setInputText}
              handleSendMessage={handleSendMessage}
              chatEndRef={chatEndRef}
            />
          )}
          
          {currentView === 'upload' && (
            <UploadView 
              stressLevel={stressLevel} 
              setStressLevel={setStressLevel} 
            />
          )}
          
          {currentView === 'calendar' && <CalendarView />}
      </main>

      {/* 3. Global Modals */}
      <DisclaimerModal 
        show={showDisclaimer} 
        onClose={() => setShowDisclaimer(false)} 
      />

    </div>
  );
}

export default App;