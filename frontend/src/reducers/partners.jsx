import * as actionType from '../constants/actionTypes';

const partnersReducer = (partners = [], action) => {
    //in redux, state need to always have a value
    switch(action.type) {
        case actionType.FETCH_ALL:
            return action.payload;
        case actionType.CREATE:
            return [...partners, action.payload];
            default:
                return partners;
    }
};
export default partnersReducer;

