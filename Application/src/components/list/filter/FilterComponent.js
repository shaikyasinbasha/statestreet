import React from 'react';
import { LABEL_FILTER } from '../../../constants/labels';

class FilterComponent extends React.Component {
  render () {
    return <div className="">
        <label className="title">{LABEL_FILTER}</label>
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
