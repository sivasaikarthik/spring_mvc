import React, { Component } from 'react'
import UpdateComponent from './Withcounter'
 class HoverCounter extends Component {
  
   
    render() {
        return (
            
                <h2 onMouseOver={this.props.increment}>hovered {this.props.count} times</h2>      
        )
    }
}

export default UpdateComponent( HoverCounter)

