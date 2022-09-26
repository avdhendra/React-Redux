import React, { Component } from 'react'

export default class UseEffectInClass extends Component {
  constructor(props){
    
  }
  componentDidMount(){
    //Lifecycle func when component mount/loads
  }
  componentDidUpdate(){
    //Lifecycle func -when component props change
  }
  componentWillUnmount(){
    //Lifecycle func-when component unmount/cleanup function
  }
    render() {
    return (
      <div>UseEffectInClass</div>
    )
  }
}
