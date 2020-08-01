import React from 'react';

class Categoria extends React.Component {
  render() {
    console.log(this.props.dadosApi);
    const { dadosApi } = this.props;
    return (
      <div>
        <label>Categorias:</label>
        {dadosApi.map((elemento) => {
          const { id, name } = elemento;
          return (
            <div data-testid="category" key={`l${id}`}>
              <input type="radio" name="categoria" key={id} id={id} value={name} />
              <label htmlFor={id}>{name}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Categoria;
