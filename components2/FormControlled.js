import React, { Component } from 'react'

 class FormControlled extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'',
              comments:''
         }
     }
     HandlerNamechage=(event)=>{
         this.setState(
             {
                name:event.target.value
             }
         )
        
            }
            HandlerCommentchage=(event)=>{
                this.setState(
                    {
                       comments:event.target.value
                    }   
                )
            }
            submitEvent=(event)=>
            {
                alert(`${this.state.name}   ${this.state.comments}`)
                event.preventDefault()
            }
    render() {
        return (
            <form onSubmit={this.submitEvent}>
            <label>name</label>
            <input type="text" value={this.state.name} onChange={this.HandlerNamechage}></input>
            <br/>
            <label>comment</label>
           <textarea value={this.state.comments}  onChange={this.HandlerCommentchage}></textarea>
           <button  type="submit">submit</button>
            
            </form>

        )
    }
}

export default FormControlled
