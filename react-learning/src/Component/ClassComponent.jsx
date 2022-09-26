import React, { Component } from 'react' 
export default class ClassComponent extends Component {
 constructor(props){
    super(props);
    this.state={
        count:0
    }
 }
 increment=()=>{
    // this.setState({
    //     count:this.state.count+1
    // });
    //since the count state wont be sync with other call to the count made by other counter to it 
    //we have to make it
    this.setState((previouState)=>({
        count:previouState.count+1
    }))
 }
 decrement=()=>{
    // this.setState({
    //     count:this.state.count-1
    // })
    this.setState((previouState)=>({
        count:previouState.count-1
    }))
 }
    render() {
    return (
      <div>ClassComponent
<h1>
        welcom to my counter app
        </h1>
        <p>the count is: {this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        </div>

      
    )
  }
}
