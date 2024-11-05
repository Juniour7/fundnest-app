import React from 'react'

const ApplicationForm = ({ isOpen, onClose}) => {
  if (!isOpen) return null;
  return (
    <>
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-25"
            onClick={onClose}
        >
            {/* Modal Content */}
            <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
            >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Modal Title</h2>
                <p className="text-gray-600 mb-4">
                    This is a simple pop-up modal. Click outside to close.
                </p>
                <button
                    onClick={onClose}
                    className="w-full px-4 py-2 mt-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    </>
  )
}

export default ApplicationForm;