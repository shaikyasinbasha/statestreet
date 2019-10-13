import { OPEN_MODAL_POPUP, CLOSE_MODAL_POPUP } from "../constants/actions";

export const openModalPoup = (data) => {
    return{
        type: OPEN_MODAL_POPUP,
        data
    }
}

export const closeModalPopup = () => {
  return {
    type: CLOSE_MODAL_POPUP
  }
}