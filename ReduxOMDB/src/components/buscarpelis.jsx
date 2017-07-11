import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {Link} from 'react-router';
import * as actionCreators from '../actions/actionCreator.jsx';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
  return{
    movies: state.movies,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}


const BuscarPelis = React.createClass({
  find: function(e){
    e.preventDefault();
    console.log("hola soy el boton")
    this.props.findMovies(this.refs.titulo.value)
  },
  render: function(){
    return (
      <div>
        <form>
	        <input type="text" ref="titulo" placeholder="Buscar peliculas" />
	        <button onClick={this.find} type="submit"><Link to='moviegrid'>Buscar</Link></button>
        </form>
      </div>    )
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BuscarPelis);