import React from 'react';
import { TransationsColumns } from './../listconfigs';
import GridComponent from '../../common/grid/GridComponent';

class TransationsComponent extends React.Component {
  componentDidMount () {
    this.props.getList();
  }
  render () {
    const {transactionlist} = this.props;
    return <div className="">
        <GridComponent
          columns={TransationsColumns}
          data={transactionlist}
        />
    </div>
  }  
}

export default TransationsComponent;
