import React, { Component } from 'react'

 class CommonUser extends Component {
    render() {
        return (
            <div>
               hi {this.props.name}
               functionn {this.props.fun()}
               <br/>    
               passing arguments{this.props.fun1(true)}
            </div>
        )
    }
}

export default CommonUser
