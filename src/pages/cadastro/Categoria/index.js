import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);



  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  };

  return (
    <PageDefault>
      <div>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nome da Categoria:
              <input
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Descrição:
              <textarea
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Cor:
              <input
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
              />
            </label>
          </div>
          <button>Cadastar</button>
        </form>

        <ul>
          {categorias.map((categoria, index) => {
            return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
          })}
        </ul>

        <Link to="/">Ir pra home</Link>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;
