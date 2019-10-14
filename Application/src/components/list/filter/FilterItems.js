import React from 'react';

class FilterItems extends React.Component {
  render () {
    return <div className="tranxlist__checklist">
    <div className="checkbox">
      <input type="checkbox" />
    </div>
    <label className="label">Savings</label>
  </div>
  }
}

export default FilterItems;