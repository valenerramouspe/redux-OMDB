var React = require('react')
var ReactDOM = require('react-dom');
import * as actionCreators from '../actions/actionCreator.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
  return{
    user: state.user,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};

var LogIn = React.createClass({
  ingreso: function(e){
    e.preventDefault();
    this.props.logInUser(this.refs.nombre.value, this.refs.contraseña.value)
  },
  render: function(){
    return (
      <div>
        <div>
      <h1>esto es para loginnnn</h1>
        </div>
        <div>
        <form>
	        <input type="text" ref="nombre" placeholder="Nombre" />
          <input type="password" ref="contraseña" placeholder="Contraseña"/>
	        <button type="submit" onClick={this.ingreso}>Ingresar</button>
        </form>
        </div>
      </div>
    )
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);