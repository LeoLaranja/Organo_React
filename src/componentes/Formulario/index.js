import { useState } from 'react'
import CampoTexto from '../Campotexto'
import CriarCard from '../CriarCard'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

function Formulario(props) {
   
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado(
            {
                nome, 
                cargo,
                imagem,
                time
            }
        )
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }


    return (
        <section className='formArea'>
            <form onSubmit={aoSalvar}>
                <h2>
                    Preencha os dados para criar o card do colaborador.
                </h2>

                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label='Time'
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <CriarCard >Criar card</CriarCard >
            </form>
        </section>
    )
}

export default Formulario