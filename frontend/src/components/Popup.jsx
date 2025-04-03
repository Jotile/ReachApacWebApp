import React from 'react';

export const Popup = ({ message, onClose, type }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50`}
    >
      <div
        className={`bg-white p-6 rounded-md shadow-lg max-w-xs w-full ${type === 'success' ? 'border-green-500' : 'border-red-500'} border-2`}
      >
        <p className="text-center text-lg">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};
