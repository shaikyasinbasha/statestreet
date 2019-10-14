import { UPDATE_TRANSACTION_LIST, UPDATE_TRANSACTION_SELECTED, UPDTAE_TXN_WITH_FILTER } from "../constants/actions";

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

export const updateTxnWithFilter = (data) => {
    return {
        type: UPDTAE_TXN_WITH_FILTER,
        data
    }
}
