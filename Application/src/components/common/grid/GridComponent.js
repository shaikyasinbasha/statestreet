import React from 'react';
import { RowsComponent } from './RowsComponent';
import { GridHeader } from './GridHeader';

class GridComponent extends React.Component {
  render () {
    return <div className="">
      <table className="grid">
        <thead>
          <tr>
            <GridHeader
              columns={this.props.columns}
            />
          </tr>
        </thead>
        <tbody>
          <RowsComponent
            data={this.props.data}
            columns={this.props.columns}
          />
        </tbody>
      </table>
    </div>
  }  
}

export default GridComponent;
