import { UPDATE_TRANSACTION_LIST, UPDATE_TRANSACTION_SELECTED } from "../constants/actions";

export const updateTransationList = (data) => {
    return {
        type: UPDATE_TRANSACTION_LIST,
        data
    }
}

export const updateTransationDetails = (data) => {
    return {
        type: UPDATE_TRANSACTION_SELECTED,
        data
    }
}
