import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart.png';
import * as api from '../../services/api';
import './Home.css';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import Categorias from '../../components/Categorias';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { categorias: [] };
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categorias) => this.setState({ categorias }))
      .catch((erro) => console.error(erro.message));
  }

  render() {
    const { categorias } = this.state;

    return (
      <div className="container">
        <aside className="categoria">
          <Categorias categories={categorias} />
        </aside>
        <div className="conteudo">
          <Pesquisa />
          <h3 data-testid="home-initial-message" className="texto-central">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </div>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={Cart} width="30px" height="30px" alt="icone carrinho" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
