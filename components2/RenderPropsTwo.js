import React, { Component } from 'react'


class HoverCounterTwo extends Component{


    
   render() {
       const {count}=this.state
       return (
           <h2  onMouseOver={this.incrementCout }>hover counter {count}</h2>
       )
   }
}


export default HoverCounterTwo
