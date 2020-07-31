import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000",
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, values]);
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
                value={values.nome}
                onChange={(event) => {
                  setValue("nome", event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.descricao}
                onChange={(event) => {
                  setValue("descricao", event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Cor:
              <input
                type="color"
                value={values.cor}
                onChange={(event) => {
                  setValue("cor", event.target.value);
                }}
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
