import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria}
   
    return (
        props.colaboradores.length > 0 && (
            <section className='time' style={css}>
                <h3>{props.nome}</h3>
                <div className='borderArea'>
                    <span style={{ borderColor: props.corPrimaria }} className='border'></span>
                </div>
                <div className='colaboradorArea'>
                    {props.colaboradores.map((colaborador, index) => (
                        <Colaborador
                            key={index}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corDeFundo = {props.corPrimaria}
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Time