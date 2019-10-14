import React from "react";
import { TransationsColumns } from '../listconfigs';

class ManageFilter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filteredItems: TransationsColumns.
        filter(item => item.filerable).
        map(item => {
          const select = props.txfilter.indexOf(item.dataIndex) !== -1;
          return {...item, select}
      })
    }
    this.handleChange = this.handleChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  handleChange (e) {
    const {filteredItems} = this.state;
    const values = filteredItems.map(item => {
      if(item.dataIndex === e.target.getAttribute('name')){
          return {...item, select: e.target.checked }
      }
      return item;
    })
    this.setState({
      filteredItems: values
    })
  }
  saveChanges(){
    const {filteredItems} = this.state;
    const items = filteredItems.filter(x => x.select).map(x => x.dataIndex);
    this.props.updateFilter(items);
    this.props.closeFilter();
  }
  render () {
    return <div className="managefilter">{
      this.state.filteredItems.
      map((item, index) => <div key={index}>
        <input
          type="checkbox"
          name={item.dataIndex}
          checked={item.select}
          onChange={this.handleChange}
        />
        <label className="title">{item.label}</label>
      </div>)
    }
      <div>
          <button onClick={this.saveChanges}>Save</button>
      </div>
    </div>
  }
}

export default ManageFilter;