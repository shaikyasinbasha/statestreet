import React from 'react';

export const RowsComponent = ({data, columns}) => {
  return data.map((row, index) => {
    return(
      <tr key={index}>
        <TdComponent row={row} columns={columns} />
      </tr>
    )
  })
}

export const TdComponent = ({row, columns}) => {
  return columns.map((column, index) => {
    if(column.render){
      return <td key={index}>{column.render({row, column})}</td>
    }
    return <td key={index}>{row[column.dataIndex]}</td>
  })
}