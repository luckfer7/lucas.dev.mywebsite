
import { Link } from 'react-router-dom';
import './index.css';
import HeaderLinks from '../headerLinks';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Header () {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="header">
            <Link to="./" className='home'>Lucas.</Link>
                <div className="menu-icon" onClick=     {toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            <nav className={`navegacao ${menuOpen ? 'open' : ''}`}>
                <HeaderLinks url="meusprojetos" onClick={() => setMenuOpen(false)}>Meus projetos</HeaderLinks>
                <HeaderLinks url="minhasskills" onClick={() => setMenuOpen(false)}>Minhas skills</HeaderLinks>
                <HeaderLinks url="sobremim" onClick={() => setMenuOpen(false)}>Sobre mim</HeaderLinks>
                    
            </nav>

        </header>

        
    )
}

export default Header;