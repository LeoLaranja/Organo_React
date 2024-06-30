import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='areaSelect'>
            <label>
                {props.label}
            </label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}
                className='inputSelect'
            >
                <option value="" disabled hidden>
                    Selecione uma opção
                </option>
                {props.itens.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaSuspensa;
