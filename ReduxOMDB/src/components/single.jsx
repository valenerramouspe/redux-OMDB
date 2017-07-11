var React = require('react')
var ReactDOM = require('react-dom');
import Movie from './Movie.jsx';
//import FavButton from './favbutton.jsx'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator.jsx';
import { bindActionCreators } from 'redux'; 

function mapStateToProps(state){
  return{
    movies: state.movies,
    users: state.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const Single = React.createClass({
	componentWillMount() {
		console.log("buscando una movie");
		this.props.findMovie(this.props.params.imdbID)
	},
	handleSubmit() {
		console.log('hola')
        var movie = {Title: this.props.movies.movies.Title, id: this.props.movies.movies.imdbID}
        console.log("handle submit triggered");
        this.props.agregarFavorito(movie)
      },

	render() {
		console.log('props--------------------',this.props)
		if(this.props.movies.isFetching)
			return(<img src="http://www.amaniocular.com/Content/images/loader.gif"></img>);
	return(
		<div>
			<img src={this.props.movies.movies.Poster} />
			<p>Title: {this.props.movies.movies.Title}</p>
			<p>Type: {this.props.movies.movies.Type}</p>
			<p>Year: {this.props.movies.movies.Year}</p>
			<p>Director: {this.props.movies.movies.Director}</p>
			<p>Actors: {this.props.movies.movies.Actors}</p>
			<p>Plot: {this.props.movies.movies.Plot}</p>
			<button onClick={this.handleSubmit} type="submit">Agregar favoritos</button>
		</div>
	)
}
})

export default connect(mapStateToProps, mapDispatchToProps)(Single);