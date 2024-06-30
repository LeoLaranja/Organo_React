import  './campoTexto.css'

const CampoTexto = (props)=> {
   
    // let valor = 'leonardo' //DESSA FORMA O VALUE LEONARDO SERÁ RENDERIZADO NO VALUE DO INPUT, PORÉM FICARÁ FIXO, E NO CONSOLE SÓ SERÁ MOSTRADO CADA LETRA POR VEZ MANTENDO ESSE VALOR FIXADO. ISSO ESTÁ ACONTECENDO PQ CHAMAMOS A VARIÁVEL VALOR NO INPUT DO NOSSO CAMPO TEXTO, COMO VALUE={VALOR}. PARA QUE O REACT REAJA A CADA ALTERAÇÃO DO VALUE ASSIM QUE DIGITARMOS E NÃO MANTENHA A VARÍAVEL FIXA, PRECISAMOS CHAMAR UM GANCHO, QUE SE CHAMA USESTATE. ABAIXO SEGUE MODELO DE COMO É A ESTRUTURA PADRÃO:

    //const [variável, setVariável] = useState('') ... AQUI É GERADO DOIS 'PARÂMETROS' PARA NOSSA VARIÁVEL, UMA PARA O REACT LER E A OUTRA PRA ESCREVER (Set).


    const aoDigitado = (evento) => {
        props.aoAlterado (evento.target.value)
    }

    return (
        <div className='containerInput'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto
