import * as api from '../api/index.jsx';
import { FETCH_ALL, CREATE, FETCH_BY_SEARCH, FETCH_PARTNER } from '../constants/actionTypes.jsx';

export const getPartner = (id) => async(dispatch) => {
    try{
        const { data } = await api.fetchPartner(id);
        dispatch ({ type: FETCH_PARTNER, payload: { partner: data}});
    } catch(error) {
        console.log(error);
    }
}
export const getPartners = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchPartners(page);
        dispatch({ type:FETCH_ALL, payload: data });
        console.log(data);
    } catch(error) {
        console.log(error.message);
    }
  
}
export const getPartnersBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data : { data }} = await api.fetchPartnersBySearch(searchQuery);
        dispatch({ type:FETCH_BY_SEARCH, payload:  data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const createPartner = (partner) => async (dispatch) => {
    try{    
        const { data } = await api.createPartner(partner);
        dispatch({ type: CREATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}