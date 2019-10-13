import React from 'react';
import { LABEL_ACCOUNT, LABEL_ACCOUNT_NAME, LABEL_TRANSATION_TYPE, LABEL_CURRENCY, LABEL_CURRENCY_NAME, LABEL_AMOUNT } from '../../constants/labels';

export const DisplayComponent = ({selecttx}) => {
  return <div>
    <div className="details__sec">
        <label className="details__title">{LABEL_ACCOUNT}:</label>
        <div className="value">{selecttx.account}</div>
    </div>
    <div className="details__sec">
        <label className="details__title">{LABEL_ACCOUNT_NAME}:</label>
        <div className="value">{selecttx.accountName}</div>
    </div>
    <div className="details__sec">
        <label className="details__title">{LABEL_TRANSATION_TYPE}:</label>
        <div className="details__txntype">{selecttx.transactionType}</div>
    </div>        
    <div className="details__sec">
        <label className="details__title">{LABEL_AMOUNT}:</label>
        <div className="value">{selecttx.amount}</div>
    </div>
    <div className="details__sec">
        <label className="details__title">{LABEL_CURRENCY}:</label>
        <div className="value">{selecttx.currencyCode}({selecttx.currencySymbol})</div>
    </div>    
    <div className="details__sec">
        <label className="details__title">{LABEL_CURRENCY_NAME}:</label>
        <div className="value">{selecttx.currencyName}</div>
    </div>
  </div>
}
 