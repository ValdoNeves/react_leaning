import React, {useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {
    
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    return (
        <div>
            <div> Pai  </div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? 'Nerd' : 'Não é Nerd'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}