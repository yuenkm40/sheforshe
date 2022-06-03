import axios from 'axios';
const url = 'http://localhost:5000/partners';

export const fetchPartners = () => axios.get(url);
export const createPartner = (newPartner) => axios.post(url, newPartner);