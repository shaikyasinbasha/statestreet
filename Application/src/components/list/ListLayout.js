import React from 'react';
import TransationsComponent from './transactions/TransationsComponent';
import {LABEL_MY_TRANSACTION} from '../../constants/labels';
import FilterComponent from './filter/FilterComponent';

class ListLayout extends React.Component {
  render () {
    return <div className="tranxlist">
      <section className="tranxlist__header">
        <label className="page-title">{LABEL_MY_TRANSACTION}</label>
      </section>
      <section className="tranxlist__body">
        <div className="tranxlist__filter">
          <FilterComponent
            openFilter={this.props.openFilter}
            txfilter={this.props.txfilter}
            transactionlist={this.props.transactionlist}
            updateFilter={this.props.updateFilter}
            closeFilter={this.props.closeFilter}
          />
        </div>
        <div className="tranxlist__list">
          <TransationsComponent {...this.props}/>
        </div>
      </section>
    </div>
  }  
}

export default ListLayout;
