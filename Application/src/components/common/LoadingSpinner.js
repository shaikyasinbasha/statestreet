import React from 'react';
import { connect } from 'react-redux';

export const LoadingSpinner = (props) => {
    const {loading} = props;
    return <div >
        <div className={`modal modal-${loading ? 'show': 'hide'}`}>
            <div className="loading"><h2>Loading...</h2></div>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
      loading: state.appdata.loading
    }
}
  
  export default connect(mapStateToProps)(LoadingSpinner);