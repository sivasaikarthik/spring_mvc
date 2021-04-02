import React, { Component } from 'react'

 class RenderProps extends Component {
     
    render() {
       const {count,incrementCount}=this.props
        return (
            <button onClick={incrementCount}>clciked {count} times</button>
        )
    }
}
export default RenderProps
