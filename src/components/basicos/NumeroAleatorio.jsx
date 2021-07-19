import React from 'react'

export default (props) => {
    let randomico = parseInt(Math.random() * (props.maxi - props.mini) + props.mini)
    return(
        <React.Fragment>
            <h2>Número Aleatório</h2>
            <p>{randomico}</p>

        </React.Fragment>
    )
}