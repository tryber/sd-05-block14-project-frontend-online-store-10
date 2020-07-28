import React from 'react';


  class Categoria extends React.Component {
    render(){
        console.log(this.props.dadosApi)
        const { dadosApi} = this.props
        return(
         <div>
           <label>Categorias:
             {dadosApi.map(elemento => <div data-testid="category"  key={`l${elemento.id}`} >
                 <input type="radio" name="categoria" key={elemento.id} value={elemento.name} />{elemento.name}</div>)}
            </label>
        </div>
            )
        }
    }
export default Categoria;
