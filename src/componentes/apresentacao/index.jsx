import './index.css';
import lucas from './lucas.png';
import linkedin from './linkedin-original.svg';
import github from  './github-square.svg';
function Apresentacao () {
    return (
        <section className="secao__apresentacao">
            <div className='secao__apresentacao__texto'>
                <h1 className='secao__apresentacao__titulo typing-animation'>Olá, meu nome é Lucas Camilo</h1>
                <h3 className='secao__apresentacao__funcao typing-animation'> Desenvolvedor fullstack</h3>
                <p className='secao__apresentacao__descricao '>
                    Eu sou um dos desenvolvedores do sQpets, uma aplicação web de produtividade. Neste projeto auxiliei no desenolvimento front-end da aplicação. Também tenho mais de 5 anos de experiência como professor de inglês, desenvolvendo habilidades sólidas em didática, comunicação, liderança e adaptabilidade.
                    <br/> 
                    Tenho experiência em desenvolver projetospessoais utilizando HTML, CSS, JavaScript, React.Js, TypeScript, Next.js, C# e .NET, aplicando técnicas como mobile-first e designs responsivos.
                </p>


                
            </div>
            <div className='secao__apresentacao__container--img'>
                <img className='minha__imagem' src={lucas} alt="" />

                <h4 className='visiteme'>Visite-me</h4>
                <div className='social__media'>
                    <a href="https://www.linkedin.com/in/lucas-ferreira-programmer/" target="_blank" rel="noopener noreferrer"><img className='social__media__icon linkedin' src={linkedin} alt="" /></a>
                    <a href="https://github.com/luckfer7" target="_blank" rel="noopener noreferrer"><img  className='social__media__icon github' src={github} alt="" /></a>
                    
                </div>
            </div>

            
            
        </section>
    )
}

export default Apresentacao;