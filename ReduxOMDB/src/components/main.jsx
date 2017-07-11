import React from 'react';
import { Link } from 'react-router';
import BuscarUser from'./buscarusers.jsx';
import BuscarPelis from './buscarpelis.jsx';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to ='/'>OMDB</Link>
				</h1>
				<BuscarUser/><BuscarPelis />
				<br></br>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;