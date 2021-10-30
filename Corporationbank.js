import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render() {
        return (
            <div>
                <h1>Corporationbank acoount for {this.props.info.lastname}</h1>
            </div>
        )
    }
}
