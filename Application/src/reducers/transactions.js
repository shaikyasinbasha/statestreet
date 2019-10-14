import { UPDATE_TRANSACTION_LIST, UPDATE_FILTER_CTRITIRAI } from "../constants/actions";

const initialState = {
  transactionlist: [],
  txfilter: ['accountName']
};
    
const transaction = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION_LIST: {
      return {...state, transactionlist: action.data}
    }
    case UPDATE_FILTER_CTRITIRAI: {
      return {...state, txfilter: [...action.data]}
    }
    default: 
      return state
  }
};
    
export default transaction;