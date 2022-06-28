import axios from 'axios';
const API = axios.create( { baseURL: 'http://localhost:5000' });
// const url = 'http://localhost:5000/partners';

export const fetchPartner = (id) => API.get(`/partners/${id}`);
export const fetchPartners = (page) => API.get(`/partners?page=${page}`);
export const fetchPartnersBySearch = (searchQuery) => API.get(`/partners/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPartner = (newPartner) => API.post('/partners', newPartner);

// export const fetchConversations =(userId) => API.get(`/conversations/${userId}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);