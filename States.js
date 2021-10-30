import React, { Component } from 'react'

export default class States extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"sai"
        }
    }
    
    render() {
        setTimeout(() => {
            this.setState({name:"sai damisetti"})
        },3000);
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

