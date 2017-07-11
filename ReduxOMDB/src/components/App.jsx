import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator.jsx';
import Main from './main.jsx';

function mapStateToProps(state){
	return{
		users: state.users,
		movies: state.movies,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App