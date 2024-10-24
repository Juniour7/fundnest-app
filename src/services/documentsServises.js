import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import instance from "./api";
import { toast } from "react-toastify";

const api_url = 'https://backend.iraady.com:8000/upload-verification-document/'

export const Postdocument = async data => {
  try {
    const response = await axios.post(api_url, data, {
      headers: {
     
         'content-type': 'multipart/form-data',
    

        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error) {
    toast.error('Failed to upload document.')
    console.error('Error uploading document:', error)
    throw error
  }
}

export const Getdocuments = async () => {
  try {
    const response = await instance.get(api_url)
    return response.data
  } catch (error) {
    toast.error('Failed to retrieve documents.')
    console.error('Error retrieving documents:', error)
    throw error
  }
}

export const getthedocumentforuser = async id => {
  try {
    const response = await instance.get(`verification-document/${id}/`)
    return response.data
  } catch (error) {
    toast.error('Failed to retrieve user document.')
    console.error('Error retrieving user document:', error)
    throw error
  }
}
export const deleteDocument = async document_id => {
  try {
    const response = await axios.delete(`${api_url}?document_id=${document_id}`, {
      headers: {
        'accept': 'application/json',
        'X-CSRFToken': 'GhyPOFwc2RmwIAbIvNJKy16xAMQd0nlI2THS7C0dwyM6I13fhOVc7HRWeVj8MQV1'
      }
    });
    toast.success('Document deleted successfully.');
    return response.data;
  } catch (error) {
    toast.error('Failed to delete document.');
    console.error('Error deleting document:', error);
    throw error;
  }
}