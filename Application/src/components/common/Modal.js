import React from 'react';
import { connect } from 'react-redux';
import { closeModalPopup } from '../../actions/appactions';

class Modal extends React.Component {
  constructor () {
    super ();
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose () {
    this.props.closeModalPopup();
  }
  render () {
    const {
      modalopen,
      modaltitle,
      modalcontent
    } = this.props;
    return (
      <div className={`modal modal-${modalopen ? 'show': 'hide'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.handleClose}>&times;</span>
            <label className="">{this.props.modaltitle}</label>
          </div>
          <div className="modal-body">{
            this.props.modalcontent
          }</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalopen: state.appdata.modalopen,
    modaltitle: state.appdata.modaltitle,
    modalcontent: state.appdata.modalcontent
  }
}

const mapDispatchToProps = dispatch => ({
  closeModalPopup: () => dispatch(closeModalPopup())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);