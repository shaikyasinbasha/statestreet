import { UPDATE_TRANSACTION_SELECTED } from "../constants/actions";

const initialState = {
  selecttx: {}
};
    
const txdetails = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION_SELECTED: {
      return {...state, selecttx: action.data}
    }
    default: 
      return state
  }
};
    
export default txdetails;