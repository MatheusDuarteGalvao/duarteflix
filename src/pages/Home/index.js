import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <PageDefault>
      <div style={{ background: '#141414' }}>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={`PHP ainda vale a pena? PHP vai morrer? 
            WordPress vale a pena? E o Laravel? Symphony? PHP 7? PHP 8? Swoole? PHP assíncrono? 
            Qual o futuro do PHP? Vale a pena investir tempo nessa linguagem? 
            PHP para iniciantes vale a pena investir tempo nessa linguagem de programação? 
            Eu vejo todo mundo falando mal de PHP, será que essas pessoas estão certas? 
            E comprar um curso de PHP?`}
        />
        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
        <Carousel category={dadosIniciais.categorias[1]}></Carousel>
        <Carousel category={dadosIniciais.categorias[2]}></Carousel>
        <Carousel category={dadosIniciais.categorias[3]}></Carousel>
        <Carousel category={dadosIniciais.categorias[4]}></Carousel>
        <Carousel category={dadosIniciais.categorias[5]}></Carousel>
      </div>
    </PageDefault>
  );
}

export default Home;