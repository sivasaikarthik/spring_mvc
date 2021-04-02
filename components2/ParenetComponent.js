import React, { Component } from 'react'
import Child from './Child'

 class ParenetComponent extends Component {
     constructor(props)
     {
         super(props)
         this.state={
             message: "parent"
         }
        //s this.greetParent=this.greetParent.bind(this)
     }
     greetParent=(ChildName,p1)=>     {
         alert(`hello ${this.state.message} from ${p1}`)
     }
    render() {
        return (
            <div>
                <Child methodpass={()=>this.greetParent("chiild","kakjsa")}></Child>
            </div>
        )
    }
}

export default ParenetComponent
