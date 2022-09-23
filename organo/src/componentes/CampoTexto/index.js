import './CampoTexto.css'

const CampoTexto = (props) => { // Props são as propriedades que o componente recebeu

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto