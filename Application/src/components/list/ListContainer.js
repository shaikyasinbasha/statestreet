import React from 'react';
import { connect } from 'react-redux';
import ListLayout from './ListLayout';
import { fetchTransationList } from '../../services/api';

const ListContainer = (props) => {
    return <ListLayout {...props} />
}

const mapStateToProps = (state) => {
    return {
      transactionlist: state.transaction.transactionlist
    }
}

const mapDispatchToProps = dispatch => ({
    getList: () => fetchTransationList(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
