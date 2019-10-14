import React from 'react';
import { LABEL_FILTER } from '../../../constants/labels';
import FilterSection from './FilterSection';
import { TransationsColumns } from '../listconfigs';
import ManageFilter from './ManageFilter';

class FilterComponent extends React.Component {
  constructor() {
    super();
    this.manageFilter = this.manageFilter.bind(this);
    this.updateTxnWithFilterExt = this.updateTxnWithFilterExt.bind(this);
  }
  updateTxnWithFilterExt (data) {
    let {txcriteria} = this.props;
    if(!txcriteria[data.type]) {
      txcriteria[data.type] = [data.name];
    }else if (txcriteria[data.type].indexOf(data.name) !== -1) {
      txcriteria[data.type] = txcriteria[data.type].
      filter((c) => { return c !== data.name })
      if(txcriteria[data.type].length == 0)
        delete txcriteria[data.type];
    }else{
        txcriteria[data.type].push(data.name)
    }
    this.props.updateTxnWithFilter(txcriteria);
  }
  manageFilter() {
    this.props.openFilter({
      modalopen: true,
      modaltitle: 'Manage Filter',
      modalcontent: <ManageFilter 
        txfilter={this.props.txfilter}
        updateFilter={this.props.updateFilter}
        closeFilter={this.props.closeFilter}
      />
    });
  }
  render () {
    return <div className="">
        <div className="tranxlist__filtertitle">
          <label className="title">{LABEL_FILTER}</label>
          <span className="plus" onClick={this.manageFilter}></span>
        </div>
        {this.props.txfilter.map((item, index) => {
          const filterType = TransationsColumns.
          filter(column => column.dataIndex === item)[0];
          return <span key={index}>
            <FilterSection
              filterType={filterType}
              transactionlist={this.props.transactionlist}
              updateTxnWithFilterExt={this.updateTxnWithFilterExt}
            />
          </span>
        })
        }
        
    </div>
  }  
}

export default FilterComponent;
