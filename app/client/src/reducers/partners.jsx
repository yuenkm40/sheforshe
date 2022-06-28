
import * as actionType from '../constants/actionTypes';

const partnersReducer = (partners = [], action) => {
    //in redux, state need to always have a value
    switch(action.type) {
        case actionType.FETCH_ALL:
            return {...partners, partners:action.payload.data,
            currentPage:action.payload.currentPage,
            numberOfPage: action.payload.numberOfPage};

        case actionType.FETCH_BY_SEARCH:
                return {...partners, partners: action.payload};
            
        case actionType.FETCH_PARTNER:
            return {...partners, partner: action.payload.partner};

        case actionType.CREATE:
            return [...partners, action.payload];
            
        default:
            return partners;
    }
};
export default partnersReducer;

