import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        firstname:'sai',
        lastname:'hitman'
    }
    return (
        <div>
            <h1>Unionbank</h1>
            <Andhrabank info={data} />
            <Corporationbank info={data} />
        </div>
    )
}
