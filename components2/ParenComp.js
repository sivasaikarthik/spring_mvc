import React, { Component } from 'react'
import REgComp from '../REgComp'
import Purecom from './PureCom'

 class ParenComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'karthik'
         }
     }
     componentDidMount()
     {
         setInterval(()=>{
             this.setState({name:'vis'})
         },2000)
        
     }
     
    render() {
        return (
            <div>
                <Purecom name={this.state.name}></Purecom>
                <REgComp name={this.state.name}></REgComp>
                Parent Component
            </div>
        )
    }
}

export default ParenComp
