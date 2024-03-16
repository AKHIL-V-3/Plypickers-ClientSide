import axios from 'axios'


const api = axios.create({
  baseURL: 'http://localhost:8000/auth', // Your base URL here
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

async function refreshToken() {
  try {
    const response = await api.get('/refreshtoken');
    const newToken = response.data.newToken;
    return newToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
}

async function logout (){

    try{
        await api.get("/logout")
    } catch(err){
        console.log(err);
        throw err
    }
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401 && !error.config.__isRetryRequest) {
      error.config.__isRetryRequest = true;
      try {
        await refreshToken();
        return api.request(error.config); // Retry the request with the new token
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        await logout()
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);

export default api;