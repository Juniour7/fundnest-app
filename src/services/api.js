import axios from "axios";

export const getToken = () => {
  return localStorage.getItem('token');
};
export const getLoggedInUseremail=()=>{
  return localStorage.getItem('userEmail');
}
export const getTempuser = () => {
  return {
    tempuserEmail: localStorage.getItem('tempuserEmail'),
    tempuserId: localStorage.getItem('tempuserId')
  };
};

const instance = axios.create({
  baseURL: 'https://backend.iraady.com:8000',
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default instance;
