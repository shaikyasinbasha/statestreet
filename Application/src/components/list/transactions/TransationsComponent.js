import React from 'react';
import { TransationsColumns } from './../listconfigs';
import GridComponent from '../../common/grid/GridComponent';

class TransationsComponent extends React.Component {
  componentDidMount () {
    this.props.getList();
  }
  proccessData () {
    const {txcriteria, transactionlist} = this.props;
    return transactionlist.filter(item => {
      for (let key in txcriteria) {
        if (item[key] === undefined || txcriteria[key].indexOf(item[key]) === -1)
          return false;
      }
      return true;
    })
  }
  render () {
    return <div className="">
        <GridComponent
          columns={TransationsColumns}
          data={this.proccessData()}
        />
    </div>
  }  
}

export default TransationsComponent;
