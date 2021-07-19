import "./Card.css"
import React from 'react'

export default function Card(props) {
    const cardStyle = {
        backgroundColor: props.color || '#ff6f69',
        borderColor: props.color || '#ff6f69',
    }
    return (
        <div className="Card" style={cardStyle}>

            <div className="Title"><strong>{props.titulo}</strong></div>
            <div className="Content">
                {props.children}
            </div>
            
        </div>
    )
}