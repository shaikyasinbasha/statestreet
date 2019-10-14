import React from 'react';
import FilterItems from './FilterItems';

class FilterSection extends React.Component {
  construcEachItem () {
    const {transactionlist} = this.props;
    const list = transactionlist.map(x => x[this.props.filterType.dataIndex]);
    return [...new Set(list)].map((item, index) => (
      <div key={index} className="tranxlist__checklist">
        <div className="checkbox">
            <input type="checkbox" />
        </div>
        <label className="label">{item}</label>
      </div>
    ))
  }
  render () {
    return <div className="tranxlist__filtersec">
    <label className="title">{this.props.filterType.label}</label>
    {this.construcEachItem()}   
  </div>
  }
}

export default FilterSection;