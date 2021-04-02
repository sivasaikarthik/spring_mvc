import React,{Component} from 'react'


class Messaage extends Component
{
    constructor() {
        super();
        this.state={
            message:'welcome vistor'
        }
    }
    changeMessage()
    {
        this.setState({message:'thank u for subcribing'})
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>subscibe</button>

            </div>



        )
    }
}

export default Messaage
