import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import Pagina404 from './pages/Pagina404';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;