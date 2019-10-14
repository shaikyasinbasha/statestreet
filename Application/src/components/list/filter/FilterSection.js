import React from 'react';

class FilterSection extends React.Component {
  render () {
    return (this.props.txfilter.map((item, index) =>
    <div key={index} className="tranxlist__filtersec">
    <label className="title">Account Name</label>
    <div className="tranxlist__checklist">
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <label className="label">Savings</label>
    </div>
  </div>))
  }
}

export default FilterSection;