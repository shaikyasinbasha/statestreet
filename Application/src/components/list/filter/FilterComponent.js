import React from 'react';
import { LABEL_FILTER } from '../../../constants/labels';

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
        <div className="tranxlist__filtersec">
          <label className="title">Account Name</label>
          <div className="tranxlist__checklist">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <label className="label">Savings</label>
          </div>
        </div>
    </div>
  }  
}

export default FilterComponent;
