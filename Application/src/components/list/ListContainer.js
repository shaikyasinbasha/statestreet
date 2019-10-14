import React from 'react';
import { connect } from 'react-redux';
import ListLayout from './ListLayout';
import { fetchTransationList } from '../../services/api';
import { openModalPoup } from '../../actions/appactions';

const ListContainer = (props) => {
    return <ListLayout {...props} />
}

const mapStateToProps = (state) => {
    return {
      transactionlist: state.transaction.transactionlist
    }
}

const mapDispatchToProps = dispatch => ({
    getList: () => fetchTransationList(dispatch),
    openFilter: (data) => dispatch(openModalPoup(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
