import React,{Component} from 'react'


class Click extends Component
{
    constructor(props)
    {
        super(props)

        this.state={
            Message:"hello"
        }

    }


     clickmessage=()=>
    {
        this.setState(
            {
                Message:"bye"
            }
        )
    }

    render() {
        return (    <div>
            <p>{this.state.Message}</p>
            <button onClick={this.clickmessage}>message_change</button>
        </div>

        )

    }
}

export default Click
