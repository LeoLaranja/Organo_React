import './Rodape.css'

function Rodape (){
    return (
        <section className='rodapeContainer'>
            <div className='rodapeArea'>
                <div className='iconsArea'>
                    <img src='./imagens/ig.png' alt='instagran_logo'></img>
                    <img src='./imagens/tw.png' alt='twitter_logo'></img>
                    <img src='./imagens/fb.png' alt='facebook_logo'></img>
                </div>
                <div className='logoArea'>
                    <img src='./imagens/logo.png' alt='organo_logo'></img>
                </div>
                <div className='desenvolvidoArea'>
                    <h4>Desenvolvido por Leonardo</h4>
                </div>
            </div>
        </section>
    )
}

export default Rodape