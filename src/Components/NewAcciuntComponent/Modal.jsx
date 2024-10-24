import React from 'react';

const Modal = ({ show, onClose, title, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#4FC0E8] py-2 w-full rounded-xl text-lg text-white hover:bg-black transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
