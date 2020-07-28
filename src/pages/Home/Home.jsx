import React from 'react';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import './Home.css'
import Categoria from '../../components/Categorias';
import * as api from '../../services/api';
import Cart from '../cart.png';

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      categorias: [],

    }
  }

  componentDidMount() {
    api
      .getCategories()
      .then(categorias => this.setState({ categorias }))
      //.catch(erro => console.error(erro.message));
  }

  render() {
    const { categorias } = this.state;

    return (
      <div className="container">
       <aside className="categoria">
        <Categoria  dadosApi={categorias} />
      </aside>
      <div className="conteudo">  
       <Pesquisa />
       <h3 data-testid="home-initial-message" className="texto-central">
          Digite algum termo de pesquisa ou escolha uma categoria.
       </h3>
      </div>
      <div><img src={Cart} width="50px" height="50px" alt="icone carrinho" /></div>
    </div>        
    );
  }
}

export default Home;
