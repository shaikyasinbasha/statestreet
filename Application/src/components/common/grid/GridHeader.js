import React from 'react';

export const GridHeader = ({columns}) => {
  return columns.map((column, index) => <td key={index}>{column.label}</td>)
}