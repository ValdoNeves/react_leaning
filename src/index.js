import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

import ReactDOM from 'react-dom' //responsavel por renderizar objetos na tela
import React from 'react'

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

ReactDOM.render(
    <div id="app">
    {/* <Primeiro></Primeiro> */}
    <ComParametro titulo="Boletim"
        nota={8.9} aluno="Titan" ></ComParametro>
    </div>,
    document.getElementById('root')
)