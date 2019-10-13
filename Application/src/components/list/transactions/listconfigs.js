import React from 'react';
import { LABEL_TRANSATION_TYPE, LABEL_AMOUNT, LABEL_CURRENCY, LABEL_ACCOUNT_NAME, LABEL_ACCOUNT } from "../../../constants/labels";
import { AccountNo } from "./AccountNo";

export const TransationsColumns = [{
    label: LABEL_ACCOUNT,
    dataIndex: 'account',
    render: (data) => <AccountNo {...data}/>
},{
    label: LABEL_ACCOUNT_NAME,
    dataIndex: 'accountName',
    filerable: true
},{
    label: LABEL_CURRENCY,
    dataIndex: 'currencyCode'
},{
    label: LABEL_AMOUNT,
    dataIndex: 'amount'
},{
    label: LABEL_TRANSATION_TYPE,
    dataIndex: 'transactionType',
    filerable: true
}]