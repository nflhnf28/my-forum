// apiService.js
import axios from 'axios';

const BASE_URL = 'https://forum-api.dicoding.dev/v1';

const apiService = axios.create({
	baseURL: BASE_URL,
});

// Add a request interceptor to include authorization token if available
apiService.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export const registerUser = async (userData) => {
	try {
		const response = await apiService.post('/register', userData);
		return response.data;
	} catch (error) {
		throw error.response.data;
	}
};

// Implement other API functions here...

export default apiService;
