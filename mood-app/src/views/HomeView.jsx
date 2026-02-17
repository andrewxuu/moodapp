import { MessageSquare, ChevronRight, MoreHorizontal, Music } from 'lucide-react';

    const HomeView = ({ setCurrentView, savedPlaylists = [] }) => (
    <div className="max-w-5xl mx-auto w-full p-6 md:p-12 space-y-12 animate-in fade-in duration-300">
        <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-light text-gray-800">
            How are you <br className="md:hidden"/> <span className="font-semibold text-indigo-900">feeling today?</span>
            </h1>

            {/* Main Card */}
            <div
            onClick={() => setCurrentView('chat')}
            className="bg-gradient-to-br from-indigo-900 to-slate-800 w-full md:max-w-2xl h-48 md:h-64 rounded-3xl shadow-xl flex items-end p-6 md:p-8 cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-all relative overflow-hidden group"
            >
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-2 rounded-lg group-hover:bg-white/20 transition">
                <MessageSquare size={24} className="text-white" />
            </div>
            <div>
                <p className="text-white/90 text-lg font-medium mb-1">Start a new session</p>
                <p className="text-indigo-200 text-sm">Tap here to chat about your day...</p>
            </div>
            </div>

            <div className="flex justify-between md:justify-start md:space-x-8 items-center text-xs font-bold text-gray-500 px-1 md:max-w-2xl">
            <span>Daily Check-in</span>
            <span className="flex items-center cursor-pointer hover:text-indigo-600 transition-colors">Continue (1/27) <ChevronRight size={14}/></span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Saved Playlists */}
            <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <h2 className="text-sm font-bold text-gray-400 tracking-wider">SAVED PLAYLISTS</h2>
                <MoreHorizontal className="text-gray-400" size={16}/>
            </div>
            <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 no-scrollbar">
                {savedPlaylists.map((playlist) => (
                <div key={playlist.id} className="group relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 text-indigo-400 rounded-full flex items-center justify-center mb-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Music size={18} />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-500 group-hover:text-gray-800">{playlist.title}</span>
                </div>
                ))}
            </div>
            </div>

            {/* Uploaded */}
            <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <h2 className="text-sm font-bold text-gray-400 tracking-wider">RECENT UPLOADS</h2>
                <MoreHorizontal className="text-gray-400" size={16}/>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {[1,2,3].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-xl animate-pulse"></div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );

    export default HomeView;