import React from 'react';
import { Link } from "react-router-dom";

export const AccountNo = ({row, column}) => {
    return <span className="">
      <Link to={`/transcation/${row.account}`}>
        {row[column.dataIndex]}
      </Link>
    </span>
}