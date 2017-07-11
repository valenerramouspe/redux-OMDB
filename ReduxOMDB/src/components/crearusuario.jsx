var React = require('react')
var ReactDOM = require('react-dom');


function mapStateToProps(state){
  return{
    user: state.user,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};


var CrearUsuario = React.createClass({
  usuario: function(e){
    e.preventDefault();
    this.props.crearUsuario(this.refs.nombre.value, this.refs.contraseña.value)
  },
  render: function(){
    return (
      <div>
      <h1>aca se crea el usuario</h1>
        <form>
	        <input type="text" ref="nombre" placeholder="Nombre" />
          <input type="password" ref="contraseña" placeholder="Contraseña" />
	        <button type="submit" onClick={this.usuario}>Crear</button>
        </form>
      </div>
    )
  }
});

export default CrearUsuario;