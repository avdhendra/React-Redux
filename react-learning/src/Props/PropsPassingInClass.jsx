import React, { Component } from 'react'

export default class PropsPassingInClass extends Component {
 
    render() {
        const {name,desc}=this.props
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{desc}</p>
        </div>
    )
  }
}
