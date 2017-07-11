/*export function findMovies(i){
	console.log("removing a movie");
	return{
		type:'FETCH_MOVIE',
		i
	}
}*/

export function attempt(){
	return{
		type: 'ATTEMPT',
	}
}

//Add comment

export function receiveMovies(movies){

	return{
		type:'RECEIVE_MOVIES',
		movies
	}
}

//Remove comment

export function receiveSingleMovie(singleMovie){
	return{
		type:'RECEIVE_SINGLE_MOVIE',
		singleMovie
	}
}

export function failedToFetch(err){
	return {
		type:'ERROR',
		err
	}
}


export function createUser(user){

  return {
    type:'CREATE_USER',
    user,
  }
}

export function logIn(user){
  return{
    type:'LOGIN_USER',
    user,
  }
}

export function privada(user){
  return{
    type:'VIEW_PRIVATE',
    user,
  }
}

export function noAutorizado(){
  return{
    type:'NO_AUTORIZADO'
  }
}

export function addFavorites(favorites){
  return{
    type: 'ADD_FAVORITES',
    favorites,
  }
}

//////////////////////////////////////////////////////////////////////////////////77

export function findMovies(name) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(attempt());
 
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${name}`)
      .then(response => response.json())
      .then(data => {
      	dispatch(receiveMovies(data))})
      .catch(err => dispatch(failedToFetch(err)));
      // In a real world app, you also want to
      // catch any error in the network call.
  };
}

export function findMovie(id) {
  return (dispatch) => {
    dispatch(attempt());
    return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
      .then(response => response.json())
      .then(data => {
      	dispatch(receiveSingleMovie(data))})
      .catch(err => dispatch(failedToFetch(err)));
  };
}

export function crearUsuario(username, password) {
  return (dispatch) => {
    dispatch(attempt());
    return fetch('./api/register', { 
              method: 'POST',
              headers: { 'Content-Type': "application/json"},
              body: JSON.stringify({username, password})
        })
      .then(response => response.json())
      .then(user => {
        dispatch(createUser(user))})
      .catch(err => dispatch(failedToFetch(err)));
  };
}

export function logInUser(username, password) {
  return (dispatch) => {
    dispatch(attempt());
    return fetch('./api/login', { 
              method: 'POST',
              headers: { 'Content-Type': "application/json"},
              credentials: 'include',
              body: JSON.stringify({username, password})
        })
      .then(response => response.json())
      .then(user => {
        console.log("user", user.username)
        if (user.username !== null)
          dispatch(logIn(user.username))
        else
          dispatch(failedToFetch({err:'error'}))
      })
      .catch(err => dispatch(failedToFetch(err)));
  };
}

export function privado(user) {
  return (dispatch) => {
    dispatch(attempt());
    return fetch('./api/privada',{
      method: 'GET',  
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
        if(data.isLogged){
          dispatch(privada(data))
        } else {
          dispatch(noAutorizado())
        }
    })
    .catch(err => dispatch(noAutorizado()));
  }
}

export function agregarFavorito(data) {
  return (dispatch) => {
    dispatch(attempt());
    return fetch('./api/addfav', { 
              method: 'POST',
              headers: { 'Content-Type': "application/json"},
              credentials: 'include',
              body: JSON.stringify(data)
        })
      .then(response => response.json())
      .then(user => {
        if(user.err){
          dispatch(failedToFetch(user.err))
        }
        else{
          dispatch(addFavorites(user.favorites))
        }
      })
      .catch(err => dispatch(failedToFetch(err)));
  };
}