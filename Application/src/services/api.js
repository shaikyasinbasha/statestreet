
import axios from 'axios';
import { TRANSATIONLIST, TRANSATIONDETAILS } from '../constants/services';
import { updateTransationList, updateTransationDetails } from '../actions/transctionactions';

export const fetchTransationList = (dispatch) => {
    return axios.get(TRANSATIONLIST).then(resp =>{
        if(resp.data.success){
            dispatch(updateTransationList(resp.data.data))
        }
    })
}

export const fetchDetailsTx = (dispatch, params) => {
    return axios.get(TRANSATIONDETAILS, {params}).then(resp =>{
        if(resp.data.success){
            dispatch(updateTransationDetails(resp.data.data))
        }
    })
}