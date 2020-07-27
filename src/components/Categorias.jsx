import React from 'react';


  class Categoria extends React.Component {
    render(){
        console.log(this.props.dadosApi)
        const { dadosApi} = this.props
        return(
         <div>
           <h3>Categorias</h3>
            <ul>
        {dadosApi.map(elemento => <li key={elemento.id}>{elemento.name}</li>)}
            </ul>
        </div>
            )
        }
    }
export default Categoria;
