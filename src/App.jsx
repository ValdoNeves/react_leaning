import React from 'react'
import './App.css'

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'

export default function App(props) {
    return (
        <div className="App">
            <h2>Fundamentos React</h2>
            <div className="Cards">
                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Antonio"/>
                        <FamiliaMembro nome="Maria"/>
                        <FamiliaMembro nome="Lia"/>
                        <FamiliaMembro nome="Max"/>
                    </Familia>
                </Card>



                <Card titulo="#04 - Exemplo de Card" color="#88d8b0">
                    <NumeroAleatorio mini={1} maxi={10} />
                </Card>
                <Card titulo="#03 - Fragmentos" color="#54b2a9">

                    <Fragmento />
                </Card>

                <Card titulo="#02 - Boletim do Aluno" >
                    <ComParametro
                        titulo="Boletim"
                        nota={8.9}
                        aluno="Titan" />
                </Card>

                <Card titulo="#01 - Primeiro Teste">
                    <Primeiro></Primeiro>
                </Card>

            </div>
        </div>
    )
}

/*
forma de renderezar

// const tag = <strong><i>Terceira linha</i></strong>

// const el = document.getElementById('root')
// ReactDOM.render('Olá React', el)

// ReactDOM.render(
//     <div>
//         segunda linha
//     </div>,
//     document.getElementById('root')
// )
// ReactDOM.render(
//     <div>
//         {tag}
//     </div>,
//     document.getElementById('root')
// )

*/