import React from 'react'
import './mystyles.css'
const heading={
    fontSize:'72px',
    color:'blue'
}
function Stylesheet(po) {
    const p=po.primary?'primary':''
    return (

        //<Stylesheet primary={false}></Stylesheet>
        <div>
            <h1 className='primary'>stylesheet</h1>
            <h1 className={`${p} font-size`}>style</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Stylesheet
