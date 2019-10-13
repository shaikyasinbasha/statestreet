import { OPEN_MODAL_POPUP, CLOSE_MODAL_POPUP } from "../constants/actions";

const initialState = {
  modalopen: false,
  modaltitle: 'Modal Title',
  modalcontent: null
};
    
const appdata = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_POPUP: {
      return {...state, transactionlist: action.data}
    }
    case CLOSE_MODAL_POPUP: {
      return {...state, modalopen: false}
    }
    default: 
      return state
  }
};
    
export default appdata;