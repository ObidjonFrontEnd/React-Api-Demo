import axios from 'axios'

// Axiosning umumiy konfiguratsiyasi
const instance = axios.create({
	baseURL: 'https://nt-devconnector.onrender.com',
})

export default instance
