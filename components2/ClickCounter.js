import React, { Component } from 'react'
import UpdateComponent from './Withcounter'


 class ClickCounter extends Component {
  
    render() {
        return  <button onClick={this.props.increment}>clicked {this.props.count} times</button>
        
    }
}

export default UpdateComponent( ClickCounter)
