import { UPDATE_TRANSACTION_LIST } from "../constants/actions";

const initialState = {
  transactionlist: []
};
    
const transaction = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION_LIST: {
      return {...state, transactionlist: action.data}
    }
    default: 
      return state
  }
};
    
export default transaction;