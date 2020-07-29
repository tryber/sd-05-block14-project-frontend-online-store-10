import React from 'react';
import * as api from '../../services/api';
import './Home.css';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import Categorias from '../../components/Categorias';
import CartLink from '../../components/CartLink/CartLink';
import Items from '../../components/Items/Items';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      categorias: [],
      valorDoInput: '',
    };

    this.manipularInput = this.manipularInput.bind(this);
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categorias) => this.setState({ categorias }))
      .catch((erro) => console.error(erro.message));
  }

  manipularInput(event) {
    const valorDoInput = event.target.value;
    this.setState({ valorDoInput });
  }

  render() {
    const { categorias, valorDoInput } = this.state;
    const items = ['Produto 1', 'Produto 2', 'Produto 3'];

    return (
      <div className="container">
        <aside className="categoria">
          <Categorias categories={categorias} />
        </aside>
        <div className="conteudo">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div className="row">
            <Pesquisa manipularInput={(event) => this.manipularInput(event)} valorDoInput={valorDoInput} />
            <button data-testid="query-button" type="button" onClick={() => console.log(valorDoInput)}>
              Api
            </button>
            <CartLink />
          </div>
          <Items items={items} />
        </div>
      </div>
    );
  }
}

export default Home;
