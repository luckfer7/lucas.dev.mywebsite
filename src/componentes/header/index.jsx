
import { Link } from 'react-router-dom';
import './index.css';
import HeaderLinks from '../headerLinks';

function Header () {

    return (
        <header className="header">
            <Link to="./" className='navegacao home'>Lucas.</Link>
            <nav className="navegacao">
                <HeaderLinks url="meusprojetos">Meus projetos</HeaderLinks>
                <HeaderLinks url="minhasskills">Minhas skills</HeaderLinks>
                <HeaderLinks url="sobremim">Sobre mim</HeaderLinks>
                    
            </nav>
        </header>
    )
}

export default Header;