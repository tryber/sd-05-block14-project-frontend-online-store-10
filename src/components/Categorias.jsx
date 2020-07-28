import React from 'react';


  class Categoria extends React.Component {
    render(){
        console.log(this.props.dadosApi)
        const { dadosApi} = this.props
        return(
         <div>
           <label>Categorias:
             {dadosApi.map(elemento => <div><label>
                 <input type="radio" name="categoria" key={elemento.id} value={elemento.name} />{elemento.name} </label></div>)}
            </label>
        </div>
            )
        }
    }
export default Categoria;
