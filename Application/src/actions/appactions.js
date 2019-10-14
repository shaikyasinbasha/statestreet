import { OPEN_MODAL_POPUP, CLOSE_MODAL_POPUP, LOADNG_SPINNER } from "../constants/actions";

export const openModalPoup = (data) => ({
    type: OPEN_MODAL_POPUP,
    data
})

export const closeModalPopup = () => ({
    type: CLOSE_MODAL_POPUP
})

export const showLoading = (data) => ({
    type: LOADNG_SPINNER,
    data
})