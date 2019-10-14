import { UPDATE_TRANSACTION_LIST, UPDATE_FILTER_CTRITIRAI, UPDTAE_TXN_WITH_FILTER } from "../constants/actions";

const initialState = {
  transactionlist: [],
  txfilter: ['accountName'],
  txcriteria: {}
};
    
const transaction = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION_LIST: {
      return {...state,
        transactionlist: action.data
      }
    }
    case UPDATE_FILTER_CTRITIRAI: {
      return {...state, txfilter: [...action.data]}
    }
    case UPDTAE_TXN_WITH_FILTER: {
      return Object.assign({}, state, {
        txcriteria: {...action.data}
      })
    }
    default: 
      return state
  }
};
    
export default transaction;