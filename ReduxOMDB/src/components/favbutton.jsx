import React from 'react';
import { Link } from 'react-router';

function mapStateToProps(state){
  return{
    user: state.users,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const FavButton= React.createClass({

    handleSubmit(e) {
        var movie = {Title: this.props.movies.movies.Title, id: this.props.movies.movies.imdbID}
        console.log("handle submit triggered");
        this.props.agregarFavorito(movie)
    },

    render() {

        if(this.props.user.isDenied) {

            return( null )
        }
        return(
              <div className= 'buttonFav'>
              <button onClick={this.handleSubmit}>Agregar a Favoritos</button>
                </div>
        )
    }
}) 

export default connect(mapStateToProps, mapDispatchToProps)(FavButton);