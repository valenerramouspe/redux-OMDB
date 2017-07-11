var React = require('react')
var ReactDOM = require('react-dom')

function mapStateToProps(state){
  return{
    user: state.user,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};

var BuscarUser = React.createClass({
  render: function(){
    return (
      <div>
        <form>
	        <input type="text" ref="nombre" placeholder="Buscar usuarios" />
	        <button type="submit">Buscar</button>
        </form>
      </div>
    )
  }
});

export default BuscarUser;