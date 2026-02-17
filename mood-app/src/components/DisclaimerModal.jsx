import React from 'react';

const DisclaimerModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
        <div className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="p-8 text-center space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Welcome</h3>
            <p className="text-sm text-gray-600">
            Please remember that this is an <span className="underline decoration-dotted font-semibold text-gray-800">AI chat bot</span>.
            </p>
            <p className="text-xs text-gray-500">
            If you are experiencing concerning issues at the moment, please seek out <a href="#" className="underline font-bold text-indigo-600">professional help</a>.
            </p>
        </div>
        <div className="flex border-t border-gray-200 divide-x divide-gray-200 bg-gray-50">
            <button
            onClick={onClose} // Use the onClose prop
            className="flex-1 py-4 text-sm font-bold text-gray-500 hover:bg-gray-100 transition-colors"
            >
            Cancel
            </button>
            <button
            onClick={onClose} // Use the onClose prop
            className="flex-1 py-4 text-sm font-bold text-indigo-600 hover:bg-gray-100 transition-colors"
            >
            I Understand
            </button>
        </div>
        </div>
    </div>
    );
};

export default DisclaimerModal;