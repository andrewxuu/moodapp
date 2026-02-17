import React from 'react';
import { Home, Upload, Calendar, MessageSquare } from 'lucide-react'; 

const Navigation = ({ currentView, setCurrentView }) => {
    return (
        <>
            <DesktopSidebar currentView={currentView} setCurrentView={setCurrentView} />
            <MobileNavigation currentView={currentView} setCurrentView={setCurrentView} />
        </>
    );
};

const MobileNavigation = ({ currentView, setCurrentView }) => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center px-6 z-40 safe-area-bottom">
        <button 
            onClick={() => setCurrentView('home')}
            className={`p-2 rounded-xl transition-all ${currentView === 'home' ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
            <Home size={24} />
        </button>
        <button 
            onClick={() => setCurrentView('upload')}
            className={`p-2 rounded-xl transition-all ${currentView === 'upload' ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
            <Upload size={24} />
        </button>
        <button 
            onClick={() => setCurrentView('calendar')}
            className={`p-2 rounded-xl transition-all ${currentView === 'calendar' ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
            <Calendar size={24} />
        </button>
    </div>
);

const DesktopSidebar = ({ currentView, setCurrentView }) => (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
        <div className="p-8">
            <h1 className="font-bold text-2xl tracking-widest text-indigo-900">MOOD APP</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
            <SidebarItem icon={<Home size={20} />} label="Home" active={currentView === 'home'} onClick={() => setCurrentView('home')} />
            <SidebarItem icon={<MessageSquare size={20} />} label="Chat" active={currentView === 'chat'} onClick={() => setCurrentView('chat')} />
            <SidebarItem icon={<Upload size={20} />} label="Upload" active={currentView === 'upload'} onClick={() => setCurrentView('upload')} />
            <SidebarItem icon={<Calendar size={20} />} label="History" active={currentView === 'calendar'} onClick={() => setCurrentView('calendar')} />
        </nav>

        <div className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">J</div>
                <div className="text-sm font-medium text-gray-700">Jane Doe</div>
            </div>
        </div>
    </aside>
);

const SidebarItem = ({ icon, label, active, onClick }) => (
    <button 
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
            active 
            ? 'bg-indigo-50 text-indigo-700' 
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
        }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

export default Navigation; 