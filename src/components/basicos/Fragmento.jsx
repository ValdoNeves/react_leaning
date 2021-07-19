import React from 'react'

export default function Fragmento(props){
    return(
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse Erro!</p>
        </React.Fragment>
    )
}
/*
outra forma de envolver é utilizar o React.Fragment
é 
    <>
        <h2>Fragmento</h2>
        <p>Cuidado com esse Erro!</p>
    </>
mas dessa forma não podemos passar um atributo na tag por exemplo
    <key="1">
        <h2>Fragmento</h2>
        <p>Cuidado com esse Erro!</p>
    </>
    irá gerar um erro... apenas com Reac.Fragment será possivel enviar essa tag

*/