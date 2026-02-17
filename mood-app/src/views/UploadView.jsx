    import { Upload, Music } from 'lucide-react';

    const UploadView = ({ stressLevel, setStressLevel }) => (
        <div className="max-w-4xl mx-auto w-full p-6 md:p-12 space-y-8 animate-in fade-in duration-300 pb-24">
        <div className="flex justify-between items-end border-b border-gray-200 pb-6">
        <div>
            <h1 className="text-3xl font-light tracking-wide text-gray-800">New Entry</h1>
            <p className="text-gray-400 text-sm mt-1">Record your mood manually</p>
        </div>
        <div className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Date: {new Date().toLocaleDateString()}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Col: Stress Level */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Current Stress Level</h3>
            <div className="grid grid-cols-5 gap-3">
            {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                <button 
                key={num} 
                onClick={() => setStressLevel(num)}
                className={`aspect-square rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                    stressLevel >= num 
                    ? 'bg-indigo-600 text-white shadow-md scale-100' 
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200 scale-95'
                }`}
                >
                {num}
                </button>
            ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-4 font-bold tracking-widest">
            <span>CALM</span>
            <span>STRESSED</span>
            </div>
        </div>

        {/* Right Col: Inputs */}
        <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Import Data</label>
                    <div className="h-14 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-50 transition cursor-pointer gap-2">
                        <Upload size={16} />
                        <span>Select file from device</span>
                    </div>
                </div>

                <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Sync Music</label>
                    <div className="relative">
                        <input type="text" className="w-full h-12 bg-gray-50 rounded-xl px-4 text-sm outline-none border border-gray-200 focus:border-indigo-500 focus:bg-white transition" placeholder="Paste Spotify or Apple Music link..." />
                        <div className="absolute right-3 top-3 text-gray-400">
                            <Music size={20} />
                        </div>
                    </div>
                </div>

                <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-black transform active:scale-[0.99] transition-all">
                SAVE ENTRY
                </button>
            </div>
        </div>
        </div>
    </div>
    );

    export default UploadView;