import React from 'react';
import {Link} from 'react-router';
import Single from './single.jsx';

function Movie(props){
	return(
		<div>
			<img src={props.movie.Poster} />
			<p>{props.movie.Title}</p>
			<p>{props.movie.Year}</p>
		</div>
	)
};

export default Movie;