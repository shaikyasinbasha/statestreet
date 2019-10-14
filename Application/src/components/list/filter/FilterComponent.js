import React from 'react';
import { LABEL_FILTER } from '../../../constants/labels';
import FilterSection from './FilterSection';

class FilterComponent extends React.Component {
  constructor() {
    super();
    this.manageFilter = this.manageFilter.bind(this);
  }
  manageFilter() {
    this.props.openFilter({
      modalopen: true,
      modaltitle: 'Manage Filter',
      modalcontent: <h1>COOOL</h1>
    });
  }
  render () {
    return <div className="">
        <div className="tranxlist__filtertitle">
          <label className="title">{LABEL_FILTER}</label>
          <span className="plus" onClick={this.manageFilter}></span>
        </div>
        <FilterSection txfilter={this.props.txfilter}/>
    </div>
  }  
}

export default FilterComponent;
