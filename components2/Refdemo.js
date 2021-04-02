import React, { Component } from 'react'

 class Refdemo extends Component {
     constructor(props) {
         super(props)
         this.inputRef=React.createRef()
     
         this.state = {
              
         }
     }
     componentDidMount()
     {
         this.inputRef.current.focus() 
        console.log(this.inputRef) 
     }
     clickHandler=()=>{
         alert(this.inputRef.current.value)
     }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default Refdemo