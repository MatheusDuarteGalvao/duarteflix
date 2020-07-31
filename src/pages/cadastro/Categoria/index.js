import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

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
          <FormField
            label="Nome da Categoria:"
            type="text"
            name="nome"
            values={values.nome} 
            handleChange={handleChange}
          />
          <FormField
            label=" Descrição:"
            type="text"
            name="descricao"
            values={values.descricao} 
            handleChange={handleChange}
          />
          <FormField
            label=" Cor:"
            type="color"
            name="cor"
            values={values.cor} 
            handleChange={handleChange}
          />
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
