import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const mapStateToProps = rootState => ({

})

const mapDispatchToProps = (dispatch) => ({
    action1:() => {dispatch({ type:'action1' })} , 
    action2:() => {dispatch({ type: 'action2'})}
})

export default connect(mapStateToProps, mapDispatchToProps)()