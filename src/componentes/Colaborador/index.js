import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, corDeFundo}) => { //AQUI PODEMOS PASSAR A PROPS COMO PARAMETRO E CHAMAR PROS.NOME PROPS.CARGO ETC... MAS EXISTE UMA FORMA DE FAZER ISSO QUE FUNCIONA IGUALMENTE ECONOMIZANDO CÓDIGO, QUE É PASSANDO CHAVES {} DENTRO DO PARAMETRO E COLOCANDO AS PROPROEDADES QUE SE QUER PASSAR, ASSIM FOI FEITO.
    return (
        <div className='colaborador'>
            <div style={{backgroundColor: corDeFundo}} className='cabecalho' >
                <img src= {imagem} alt= {nome}></img>
            </div>
            <div className='rodape'>
                <h4>
                    {nome}
                </h4>
                <h5>
                    {cargo}
                </h5>
            </div>
        </div>
    )
}

export default Colaborador