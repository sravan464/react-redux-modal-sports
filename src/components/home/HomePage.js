/**
 * Created by sravankumarganji on 9/17/17.
 */
import React, {Component} from 'react';
import Display from '../Display'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as modalActions from '../../actions/sportsActions'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false ,
      buttonVal : '',
    }
  }
  openModal() {
    this.props.actions.openModal({ isModalOpen: true })
  }

  closeModal() {
    this.props.actions.closeModal({ isModalOpen: false })
  }

  buttonClickHandler(e){
    console.log("hello",e.target.name)
    this.props.actions.openModal({ isModalOpen: true ,buttonVal:e.target.name})
  }

  render() {
    const nameProps ={
      panelHeader:'Name',
      panelText:'Johnny Smith',
      buttonName:'Edit Name',
      buttonEvent:this.buttonClickHandler.bind(this)
    }
    const addressProps ={
      panelHeader:'Address',
      panelText:'123 Bowl Lane NewYork NY 10021',
      buttonName:'Edit Address',
      buttonEvent:this.buttonClickHandler.bind(this)
    }
    const teamProps ={
      panelHeader:'Favorite Teams',
      panelText:'None Added',
      buttonName:'Add Teams',
      buttonEvent:this.buttonClickHandler.bind(this)
    }
    const {isModalOpen,buttonVal} = this.props.modal;
    return (
      <div>
        <Modal isOpen={isModalOpen} buttonType={buttonVal} onClose={this.closeModal.bind(this)}/>
        <h1>Sports Magazine Settings</h1>
        <Display {...nameProps}/>
        <Display {...addressProps}/>
        <Display {...teamProps} />
      </div>
    );
  }
}
function mapStateToProps(state,ownProps) {
  return{
    modal : state.modal
  }
}
function mapDispatchToProps(dispatch) {
  return{
    actions : bindActionCreators(modalActions,dispatch)
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
