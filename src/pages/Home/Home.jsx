import React from 'react';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import './Home.css'
import Categoria from '../../components/Categorias';
import * as api from '../../services/api';

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
        <Categoria  dadosApi={categorias}/>
      </aside>
      <div className="conteudo">  
       <Pesquisa />
       <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
       </h3>
      </div>
      <div><h1>BT</h1></div>
    </div>        
    );
  }
}

export default Home;
