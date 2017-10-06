/**
 * Created by sravankumarganji on 10/4/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as modalActions from '../actions/modalActions'

class Modal extends Component {
constructor(props){
  super(props);
  this.state ={
    counter :0,
    rows : []
  }
}
addRows(){
  console.log(this.state)
  for(let i=1 ; i<=this.props.counter ; i++){
    this.state.rows.push(<div key={i}><label>Team {i}</label><input type="text" name={`Team ${i}`}/></div>)
  }
}
  incCounter(){
    this.props.modalActions.addCounter({counter : this.props.counter+1})
  }
  renderAddTeamsBody(){
    this.addRows()
    return(
      <div className="form-group">
        {this.state.rows}
      </div>
    )
  }
  renderBodyModal(buttonType){
    if(buttonType === 'Add Teams'){
      return (
        <div>
          <h4 className="card-title">Add teams</h4>
          <div className="card-text">{this.renderAddTeamsBody()}</div>
          <a href="#" onClick={this.incCounter.bind(this)}>+ Add Another</a>
        </div>
    )
    }
    if(buttonType === 'Edit Name'){
      return (
        <div>
          <h4 className="card-title">Edit Name</h4>
          <div className="card-text">
           Edit Name : <input type="text"/>
          </div>
        </div>
      )
    }
    if(buttonType === 'Edit Address'){
      return (
        <div>
          <h4 className="card-title">Add teams</h4>
          <div className="card-text">
            Edit Address : <input type="text"/>
          </div>
        </div>
      )
    }
  }
  saveHandler(){

  }
  render() {
    if (this.props.isOpen === false)
      return null

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }
    const {buttonType}= this.props;
    return (
      <div>
        <div style={modalStyle}>{this.props.children}
          <div className="card text-center">
            <div className="card-header">
              <span className="float-right">Close <span className="badge badge-primary" style={{borderRadius:'50%'}}><a onClick={this.props.onClose}
                style={{color:'white'}} href="">x</a></span></span>
            </div>
            <div className="card-block">
              {this.renderBodyModal(buttonType)}
            </div>
            <div className="card-footer text-muted">
              <botton className="btn btn-primary col-5" style={{marginRight:'5px'}} onClick={this.props.onClose}>Cancel</botton>
              <botton className="btn btn-primary col-5" onClick={this.saveHandler.bind(this)}>Save</botton>
            </div>
          </div>

          {/*<button className="btn btn-primary" onClick={() => this.closeModal()}>Close</button>*/}
        </div>
        <div style={backdropStyle} onClick={e => this.close(e)}/>}
      </div>
    )
  }
}

Modal.propTypes = {};
Modal.defaultProps = {};

function mapStateToProps(state) {
  return{
  counter : state.counter.counter
  }
}
function mapDispatchToProps(dispatch) {
  return{
    modalActions : bindActionCreators(modalActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);

