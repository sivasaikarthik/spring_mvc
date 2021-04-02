import React from 'react'

const UpdateComponent=OriginalComponent=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
     
     
         increement=()=>{
             this.setState(prevstate=>{
                 return{count:prevstate.count+1}
             })
         }
        render()
        {
            return <OriginalComponent count={this.state.count}
             increment={this.state.increement}
             {...this.props}
            ></OriginalComponent>
        }
    }
    return NewComponent
}
export default UpdateComponent