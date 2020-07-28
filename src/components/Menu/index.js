import React from 'react';
import Logo from '../../assets/imagem/logo.png';
import './menu.css';
import Button from '../../components/Button';

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;