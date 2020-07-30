import React from 'react';
import Logo from '../../assets/imagem/logo.png';
import './menu.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function Menu () {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;