import React, { Component } from 'react';
export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentState: 'mundo' }
  }
  render() {
    return(
    <div>
      <h1>Hola {this.state.currentState}!</h1>
    </div>  
    )
  }
}




