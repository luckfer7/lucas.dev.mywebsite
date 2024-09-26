import './index.css';
import lucas from './lucas.png';
import linkedin from './linkedin-original.svg';
import github from  './github-square.svg';
function Apresentacao () {
    return (
        <section className="secao__apresentacao">
            <div className='secao__apresentacao__texto'>
                <h1 className='secao__apresentacao__titulo'>Olá, meu nome é Lucas Camilo</h1>
                <h3 className='secao__apresentacao__funcao'> Desenvolvedor fullstack</h3>
                <p className='secao__apresentacao__descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem sint ut quas. Minima laborum qui unde delectus accusamus repellat praesentium molestiae ipsum rerum provident veritatis eaque, asperiores autem officiis!s accusamus repellat praesentium molestiae ipsum rerum provident veritatis eaque, asperiores autem officiis!</p>


                
            </div>
            <div className='secao__apresentacao__container--img'>
                <img className='minha__imagem' src={lucas} alt="" />

                <h4 className='visiteme'>Visite-me</h4>
                <div className='social__media'>
                    <a href=""><img className='social__media__icon linkedin' src={linkedin} alt="" /></a>
                    <a href=""><img  className='social__media__icon github' src={github} alt="" /></a>
                    
                </div>
            </div>

            
            
        </section>
    )
}

export default Apresentacao;