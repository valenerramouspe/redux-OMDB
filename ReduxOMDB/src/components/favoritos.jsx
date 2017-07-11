
var React = require('react')
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreator.jsx';
import { hashHistory } from 'react-router';

function mapStateToProps(state){
  return{
    users: state.users,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

var Favoritos = React.createClass({
	componentWillMount() {
		this.props.privado();
			console.log("no autorizado, men");
	},
	render: function(){
		if(this.props.users.isDenied) {
			hashHistory.push('/unauthorized');
			return null;
		}
	    return (
	    	<div>
	 		<h1>Aca van los favoritos</h1>
	      	</div>
	    )
	}
	});

export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);