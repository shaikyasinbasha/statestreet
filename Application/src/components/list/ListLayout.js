import React from 'react';
import TransationsComponent from './transactions/TransationsComponent';
import {LABEL_MY_TRANSACTION} from '../../constants/labels';
import FilterComponent from './filter/FilterComponent';

const ListLayout = (props) => {
  return <div className="tranxlist">
    <section className="tranxlist__header">
      <label className="page-title">{LABEL_MY_TRANSACTION}</label>
    </section>
    <section className="tranxlist__body">
      <div className="tranxlist__filter">
        <FilterComponent
          openFilter={props.openFilter}
          txfilter={props.txfilter}
        />
      </div>
      <div className="tranxlist__list">
        <TransationsComponent {...props}/>
      </div>
    </section>
  </div>
}

export default ListLayout;
