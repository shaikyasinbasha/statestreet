import React from 'react';
import { connect } from 'react-redux';
import { fetchDetailsTx } from '../../services/api';
import DetailsLayout from './DetailsLayout';

const DetailsContainer = (props) => {
    const {
      getDetails,
      selecttx,
      match: {params : {account}}
    } = props;
    return <DetailsLayout
      account={account}
      selecttx={selecttx}
      getDetails={getDetails}
    />
}

const mapStateToProps = (state) => {
    return {
        selecttx: state.txdetails.selecttx
    }
}

const mapDispatchToProps = dispatch => ({
    getDetails: (params) => fetchDetailsTx(dispatch, params)
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
