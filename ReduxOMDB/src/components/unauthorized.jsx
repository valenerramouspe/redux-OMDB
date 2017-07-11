var React = require('react');
import {Link} from 'react-router';


var Unauthorized = React.createClass({
  render: function(){
    return (
      <div>
        <h3>No es usuario, registrarse para tener lista de favoritos</h3>
        <Link to="/signup"><button>Registrarse</button></Link>
      </div>
    )
  }
});

export default Unauthorized;