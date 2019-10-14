import React from 'react';

class FilterSection extends React.Component {
  construcEachItem () {
    const {transactionlist, filterType, updateTxnWithFilterExt} = this.props;
    const list = transactionlist.map(x => x[filterType.dataIndex]);
    return [...new Set(list)].map((item, index) => (
      <div key={index} className="tranxlist__checklist">
        <div className="checkbox">
            <input type="checkbox"
              name={item}
              onChange={(e) => {
                const name = e.target.getAttribute('name');
                updateTxnWithFilterExt({
                  type: filterType.dataIndex,
                  name
                })
              }}
            />
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