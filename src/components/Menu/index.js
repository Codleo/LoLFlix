import React from 'react';
import Logo from '../../assets/img/LOLFLIX.png';
import './Menu.css'
import Button from '../components/Button'
function Menu(){
    return(
        <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="LOLFlix logo"/>
    
        </a>   
        <Button as="a" href="/">
            Novo Vídeo
        </Button>
        </nav>
    
    );
}

export default Menu;