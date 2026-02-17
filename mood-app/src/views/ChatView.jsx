    import { Plus } from 'lucide-react';

    const ChatView = ({ setCurrentView, chatMessages = [], inputText, setInputText, handleSendMessage, chatEndRef }) => (
        <div className="flex flex-col h-[calc(100vh-64px)] md:h-screen bg-gray-50 animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 shadow-sm z-10 sticky top-0">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-xs">AI</div>
                <span className="font-bold text-gray-700">Wellness Check-in</span>
            </div>
            <button onClick={() => setCurrentView('home')} className="text-xs font-bold text-gray-500 hover:text-indigo-600 px-3 py-1 rounded-full border border-gray-200 hover:border-indigo-600 transition-colors">END SESSION</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
            <div className="max-w-3xl mx-auto space-y-6">
                {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.sender === 'bot' && <div className="w-8 h-8 rounded-full bg-indigo-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs text-white shadow-lg">AI</div>}
                    
                    <div className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-5 shadow-sm text-sm md:text-base leading-relaxed ${
                    msg.sender === 'user' 
                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                    }`}>
                        {msg.type === 'playlist' ? (
                        <div className="space-y-4">
                            <p>{msg.text}</p>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <ol className="list-decimal list-inside space-y-3 text-xs md:text-sm text-gray-600 font-medium">
                                {msg.songs.map((song, i) => <li key={i} className="pl-2">{song}</li>)}
                            </ol>
                            </div>
                            <button className="w-full bg-indigo-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-indigo-800 transition-colors shadow-md">Open Playlist</button>
                        </div>
                        ) : (
                        msg.text
                        )}
                    </div>
                </div>
                ))}
                <div ref={chatEndRef} />
            </div>
        </div>

        {/* Input */}
        <div className="p-4 md:p-6 bg-white border-t border-gray-200">
            <div className="max-w-3xl mx-auto relative">
            <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="w-full bg-gray-50 p-4 pr-12 rounded-xl text-sm md:text-base outline-none focus:ring-2 focus:ring-indigo-500/50 border border-gray-200 transition-all shadow-sm"
            />
            <button
                onClick={handleSendMessage}
                className="absolute right-3 top-3 bg-indigo-600 p-2 rounded-lg hover:bg-indigo-700 transition shadow-sm"
            >
                <Plus size={18} className="text-white"/>
            </button>
            </div>
        </div>
        </div>
    );

    export default ChatView;