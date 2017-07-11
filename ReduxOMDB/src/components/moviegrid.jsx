import React from 'react';
import BuscarPelis from './buscarpelis.jsx';
import ReactDOM from 'react-dom';
import Movie from './Movie.jsx';
import {Link} from 'react-router';

const MovieGrid = React.createClass({

	render() {
		if(this.props.movies.isFetching)
			return(<img src="http://www.amaniocular.com/Content/images/loader.gif"></img>);
		return (
			<div>
				{this.props.movies.movies.map((movie, i) =>
					<Link to={`/single/${movie.imdbID}`}><Movie key={movie.imdbID + i} movie={movie} /></Link>
				)}
			</div>
		)
	}
});

export default MovieGrid;