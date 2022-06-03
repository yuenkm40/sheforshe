import axios from 'axios';
const API = axios.create( { baseURL: 'http://localhost:5000' });
// const url = 'http://localhost:5000/partners';

export const fetchPartners = () => API.get('/partners');
export const createPartner = (newPartner) => API.post('/partners', newPartner);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);