import './CriarCard.css'

function CriarCard (props) {
    return (
        <div className='areaButtonCriarCard'>
            <button>
                {props.children}
            </button>
        </div>
    )
}

export default CriarCard