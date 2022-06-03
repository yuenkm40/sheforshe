import { combineReducers } from 'redux';

import auth from './auth';
import partners from './partners';

export const reducers = combineReducers({ auth, partners });