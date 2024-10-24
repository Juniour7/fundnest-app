import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getLoggedInUseremail, getTempuser } from "../../../services/api";

import {
  deleteDocument,
  Getdocuments,
  Postdocument
} from '../../../services/documentsServises'

const UserDocuments = () => {
  const [documents, setDocuments] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortKey, setSortKey] = useState('')
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { register, handleSubmit, reset } = useForm()
  const userId = localStorage.getItem('userId');
  const { tempuserEmail, tempuserId } = getTempuser();
  const loggedInEmail = getLoggedInUseremail();
  const emailToUse = tempuserEmail || loggedInEmail;
  const userIdToUse = tempuserId || userId;
  useEffect(() => {
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    try {
  
      const docs = await Getdocuments();
      const filteredDocs = docs.filter(doc => doc.user_id === parseInt(userIdToUse)); 
      setDocuments(filteredDocs);
    } catch (error) {
      console.error('Error fetching documents:', error)
    }
  }

  const onSubmit = async data => {
    try {
      const file = data.document_file[0];
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];

      if (!allowedTypes.includes(file.type)) {
        toast.error('Only PDF, JPG, and PNG files are allowed.');
        return;
      }

      const formData = new FormData();
      
    
      formData.append('user_id', userIdToUse);
      formData.append('document_name', data.document_name);
      formData.append('document_file', data.document_file[0]);

      const uploadedDocument = await Postdocument(formData)
      
      setDocuments([...documents, uploadedDocument])
      reset();
      toast.success('Document uploaded successfully.');
 
     
   
      
      setDocuments([...documents, uploadedDocument])
      reset()
    } catch (error) {
      console.error('Error uploading document:', error)
      toast.error('Failed to upload document.')
    }
  }

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSortChange = key => {
    setSortKey(key)
  }

  const handleView = doc => {
    setSelectedDocument(doc)
    setIsModalOpen(true)
  }
  const handleDelete = async (document_id) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        await deleteDocument(document_id);
        setDocuments(documents.filter(doc => doc.document_id !== document_id));
      } catch (error) {
        console.error('Error deleting document:', error);
        toast.error('Failed to delete document.');
      }
    }
  }

  const filteredDocuments = documents.filter(doc =>
    doc.document_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedDocuments = filteredDocuments.sort((a, b) => {
    if (sortKey === 'document_name') {
      return a.document_name.localeCompare(b.document_name)
    } else if (sortKey === 'uploaded_at') {
      return new Date(a.uploaded_at) - new Date(b.uploaded_at)
    }
    return 0
  })


    return (
      <div className='max-w-4xl mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>User Documents</h1>
  
        {/* Upload Section */}
        <form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
          <input
            type='text'
            placeholder='Document Name'
            {...register('document_name', { required: true })}
            className='border p-2 mr-2'
          />
          <input
            type='file'
            {...register('document_file', { required: true })}
            className='border p-2 mr-2'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            Upload
          </button>
          <p className="text-gray-600 mt-2">
          Only PDF, JPG, and PNG files are allowed.
        </p>
        </form>
  
        {/* Search Section */}
        <div className='mb-4'>
          <input
            type='text'
            onChange={handleSearchChange}
            placeholder='Search documents...'
            className='border p-2 w-full'
          />
        </div>
  
        {/* Sort Section */}
        <div className='mb-4'>
          <select
            onChange={e => handleSortChange(e.target.value)}
            className='border p-2 w-full'
          >
            <option value=''>Sort By</option>
            <option value='document_name'>Document Name</option>
            <option value='uploaded_at'>Upload Date</option>
          </select>
        </div>
  
        {/* Documents Table */}
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-200'>
            <thead>
              <tr className='w-full border-b border-gray-300'>
                <th className='px-4 py-2 text-left'>Document Name</th>
                <th className='px-4 py-2 text-left'>Uploaded At</th>
                <th className='px-4 py-2 text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedDocuments.map(doc =>
                <tr key={doc.document_id} className='border-b border-gray-200'>
                  <td className='px-4 py-2'>
                    {doc.document_name}
                  </td>
                  <td className='px-4 py-2'>
                    {new Date(doc.uploaded_at).toLocaleString()}
                  </td>
                  <td className='px-4 py-2 flex space-x-2'>
                    <button
                      onClick={() => handleView(doc)}
                      className='bg-blue-500 text-white px-2 py-1 rounded'
                    >
                      View
                    </button>
                    <button
                    onClick={() => handleDelete(doc.document_id)}
                    className='bg-red-500 text-white px-2 py-1 rounded'
                  >
                    Delete
                  </button>   
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
  

      {/* Modal for viewing document content */}
      {isModalOpen && selectedDocument && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 h-full w-full"   onClick={() => setIsModalOpen(false)}>
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative h-full">
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        aria-label="Close Modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 className="text-2xl font-semibold mb-4">{selectedDocument.document_name}</h2>
      <div className="overflow-hidden rounded-lg border">
        <iframe
          src={`https://backend.iraady.com${selectedDocument.document_url}`}
          width="100%"
          height="1000px"
          title="Document Viewer"
        
        />
      </div>
    </div>
  </div>
)}



    </div>
  )
}

export default UserDocuments
