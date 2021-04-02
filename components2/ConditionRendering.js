import React, { Component } from 'react'

/*  class ConditionRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn:true
        }
    }
    
    render() {
        if(this.state.IsLoggedIn)
        {
            return (
                <div>
                    <p>welcome vushwas</p>
                    
                </div>
            )
        }
        else{
            return (
                <div>
                    
                    <p>welcome guest</p>
                </div>
            )
        }
       
    }
} */

class ConditionRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn:false
        }
    }
    
    render() {
      // return this.state.IsLoggedIn?(<div>Welcome karthik</div>):(<div>welcome</div>)
      return this.state.IsLoggedIn && (<div>Welcome karthik</div>)
    }
}

export default ConditionRendering
