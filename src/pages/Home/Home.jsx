import React from 'react';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <aside className="categoria">
          <h3>Categorias</h3>
          <ul>
            <li>1</li>
          </ul>
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
