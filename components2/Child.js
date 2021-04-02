import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={props.methodpass}>greet parent</button>
        </div>
    )
}
export default Child