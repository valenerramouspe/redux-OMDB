var React = require('react')
var ReactDOM = require('react-dom');
import {hashHistory} from 'react-router'
import {Link} from 'react-router';

function mapStateToProps(state){
  return{
    movies: state.movies,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

var Home = React.createClass({
	favorites: function(){
		this.props.privado();
    if(this.props.users.isDenied==true){
      hashHistory.push("signup")
    }
		hashHistory.push("/favoritos");
	},
  render: function(){
    return (
      <div>
		<h1>Este es el home!</h1>
		<Link to="/signup"><button>Register</button></Link>
		<Link to="/login"><button>Log in</button></Link>
		<button onClick={this.favorites}>Favoritos</button>
      </div>
    )
  }
});

export default Home;