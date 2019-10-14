import React from 'react';
import { connect } from 'react-redux';
import ListLayout from './ListLayout';
import { fetchTransationList } from '../../services/api';
import { openModalPoup, updateFilter, closeModalPopup } from '../../actions/appactions';

const ListContainer = (props) => {
    return <ListLayout {...props} />
}

const mapStateToProps = (state) => {
    return {
      transactionlist: state.transaction.transactionlist,
      txfilter: state.transaction.txfilter
    }
}

const mapDispatchToProps = dispatch => ({
    getList: () => fetchTransationList(dispatch),
    openFilter: (data) => dispatch(openModalPoup(data)),
    updateFilter: (data) => dispatch(updateFilter(data)),
    closeFilter: () => dispatch(closeModalPopup())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
