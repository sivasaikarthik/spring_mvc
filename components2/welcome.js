import React,{Component} from 'react'


class Welcome extends Component
{
    render() {
        return <h1>welcome {this.props.name} alias as {this.props.alia}</h1>;
    }
}

export default Welcome
