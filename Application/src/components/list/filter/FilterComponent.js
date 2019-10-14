import React from 'react';
import { LABEL_FILTER } from '../../../constants/labels';
import FilterSection from './FilterSection';
import { TransationsColumns } from '../listconfigs';
import ManageFilter from './ManageFilter';

class FilterComponent extends React.Component {
  constructor() {
    super();
    this.manageFilter = this.manageFilter.bind(this);
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
          return <span key={index}><FilterSection
            filterType={filterType}
            transactionlist={this.props.transactionlist}
          /></span>
        })
        }
        
    </div>
  }  
}

export default FilterComponent;
