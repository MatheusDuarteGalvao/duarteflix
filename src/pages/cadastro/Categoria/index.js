import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefault>
      <div>
        <h1>Cadastro de Categoria</h1>
        <form>
          <label>
            Nome da Categoria
            <input type="text"/>  
          </label>
          <button>Cadastar</button>
        </form>
        <Link to="/">
          Ir pra home
        </Link>
      </div>
    </PageDefault>
  )
}

export default CadastroCategoria;