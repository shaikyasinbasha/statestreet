import { OPEN_MODAL_POPUP, CLOSE_MODAL_POPUP, LOADNG_SPINNER } from "../constants/actions";

const initialState = {
  loading: true,
  modalopen: false,
  modaltitle: 'Modal Title',
  modalcontent: null
};

const appdata = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_POPUP: {
      return {...state, ...action.data}
    }
    case CLOSE_MODAL_POPUP: {
      return {...state, modalopen: false}
    }
    case LOADNG_SPINNER: {
      return {...state, loading: action.data}
    }
    default: 
      return state
  }
};
    
export default appdata;