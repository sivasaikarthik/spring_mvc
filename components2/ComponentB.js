import React, { Component } from 'react'
import { UserConsumer } from './UserContet'

 class ComponentB extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
               {
                 (username)=>{
                     return <div>hello {username}</div>

                 }
               }
                </UserConsumer>
              
            </div>
        )
    }
}

export default ComponentB
