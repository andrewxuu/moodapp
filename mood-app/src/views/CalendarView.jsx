import React from 'react';
import { ChevronRight, Calendar } from 'lucide-react';

const CalendarView = () => {
return (
    <div className="max-w-5xl mx-auto w-full p-6 md:p-12 space-y-8 animate-in fade-in duration-300 pb-24">
    <div className="flex justify-between items-center border-b border-gray-200 pb-6">
        <div>
            <h1 className="text-3xl font-light tracking-wide text-gray-800">History</h1>
            <p className="text-gray-400 text-sm mt-1">Review past sessions and trends</p>
        </div>
        <button className="text-xs font-bold text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors">EXPORT DATA</button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Widget */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
                <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight className="rotate-180" size={20}/></button>
                <span className="font-bold text-xl text-gray-800 tracking-widest">JULY 2025</span>
                <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight size={20}/></button>
            </div>
            <div className="aspect-[16/9] lg:aspect-[21/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 space-y-2">
                <Calendar size={48} className="opacity-20" />
                <span className="font-medium">Interactive Calendar Module</span>
            </div>
        </div>

        {/* List of past chats */}
        <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Recent Sessions</h3>
            {[1, 2, 3].map(item => (
            <div key={item} className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center space-x-4 hover:shadow-md hover:border-indigo-100 transition-all cursor-pointer group">
                <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-bold ${item === 1 ? 'bg-indigo-500' : 'bg-slate-400'}`}>
                    {item === 1 ? '7' : '4'}
                </div>
                <div className="flex-1">
                    <div className="font-bold text-gray-700 text-sm group-hover:text-indigo-700">High Anxiety Check-in</div>
                    <div className="text-xs text-gray-400 mt-0.5">July {10 + item}, 10:23 AM</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <ChevronRight size={16} />
                </div>
            </div>
            ))}
        </div>
    </div>
    </div>
);
};

export default CalendarView;