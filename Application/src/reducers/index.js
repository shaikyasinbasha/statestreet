
import { combineReducers } from 'redux'
import transaction from './transactions';
import txdetails from './txdetails';
import appdata from './appdata';

export default combineReducers({   
    appdata, 
    transaction,
    txdetails
})