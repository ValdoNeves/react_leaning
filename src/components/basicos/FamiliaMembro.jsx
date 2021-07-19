import React from 'react'

export default function FamiliaMembro (props) {
    return (
        <span>
            {props.nome} <strong>{props.sobrenome} </strong><br></br>
        </span>
    )
}