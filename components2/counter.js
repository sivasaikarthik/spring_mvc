import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }

    }
    incrementCout=()=>{
       this.setState(previoustsate=>{
         return{count:previoustsate.count+1}  
       })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.incrementCout)}
            </div>
        )
    }
   
}

export default Counter

