import * as api from '../api/index.jsx';
import { FETCH_ALL} from '../constants/actionTypes.jsx';

// export const getConversations = (userId) => async (dispatch) => {
//     try {
//         const { data } = await api.fetchConversations(userId);
//         dispatch({ type:FETCH_ALL, payload: data });
//         console.log(data);
//     } catch(error) {
//         console.log(error.message);
//     }
  
// }