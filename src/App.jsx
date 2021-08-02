import React from 'react'
import './App.css'

import Mega from './components/megasena/Mega'

import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'

import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
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

                <Card titulo="#13 - Mega Sena (Desafio) " color="#B9006E">
                    <Mega></Mega>
                </Card>

                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={0}></Contador>
                </Card>
                <Card titulo="#11 - Componente Controlado (input)" color="#E45F56">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#59323C">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Rendereização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ email: 'tse@email.com' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{}}></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Desafio tabela">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Listas de Repetição" color="#476c8a ">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Antonio" />
                        <FamiliaMembro nome="Maria" />
                        <FamiliaMembro nome="Lia" />
                        <FamiliaMembro nome="Max" />
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