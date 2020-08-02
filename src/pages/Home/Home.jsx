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
      items: [],
      cart: [],
    };
    this.apiButton = this.apiButton.bind(this);
    this.manipularInput = this.manipularInput.bind(this);
    this.manipularCategoria = this.manipularCategoria.bind(this);
    this.addingToCart = this.addingToCart.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categorias) => this.setState({ categorias }))
      .catch((erro) => console.error(erro.message));
    }

  setLocalStorage() {
    localStorage.setItem('Cart', JSON.stringify(this.state.cart));
  }
  async apiButton() {
    const { categoryId, inputValue } = this.state;
    return api
      .getProductsFromCategoryAndQuery(categoryId, inputValue)
      .then((data) => data.results)
      .then((items) => this.setState({ items }));
  }

  manipularInput(event) {
    const valorDoInput = event.target.value;
    this.setState({ valorDoInput });
  }

  async manipularCategoria(event) {
    const categoryId = event.target.id;
    await this.setState({ categoryId });
    this.apiButton();
  }

  async addingToCart(item, quantity) {
    const arr = this.state.cart;
    const index = arr.findIndex((prod) => prod.id === item.id);

    if (index >= 0) {
      arr[index].quantity += 1;
    } else {
      arr.push(Object.assign({}, item, { quantity }));
    }
    await this.setState({ cart: arr });
    await this.setLocalStorage();
  }

  render() {
    const { inputValue, notFound, categorias, items } = this.state;
    if (notFound) return <div className="not-found">Not found!</div>;
    return (
      <div className="container">
        <aside className="categoria">
          <Categorias
            setCategoryId={(event) => this.manipularCategoria(event)}
            refreshItems={this.apiButton}
            categories={categorias}
          />
        </aside>
        <div className="conteudo">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.

          </p>
          <div className="row">
            <Pesquisa handleInput={(event) => this.manipularInput(event)} inputValue={inputValue} />
            <button data-testid="query-button" type="button" onClick={() => this.apiButton()}>
              Api
            </button>
            <CartLink cart={this.state.cart} />
          </div>
          <Items items={items} addingToCart={this.addingToCart} />
        </div>
      </div>
    );
  }
}

export default Home;
