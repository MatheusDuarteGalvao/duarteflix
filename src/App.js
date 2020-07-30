import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import Pagina404 from './pages/Pagina404';
import CadastroCategoria from './pages/cadastro/Categoria';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;