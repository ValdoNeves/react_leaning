export default function ComParametro(props) {
    console.log(props)
    const status = props.nota > 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>O aluno <strong>{props.aluno}</strong> </p>
            <p>tirou a nota <strong>{props.nota}</strong> e foi </p>
            <p><strong>{status}</strong> !!!</p>
        </div>
    )
}