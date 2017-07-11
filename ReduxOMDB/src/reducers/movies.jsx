//a reducer takes in 2 things. The action and a copy of current state

function movies (state = [], action){
	switch(action.type){
		case 'ATTEMPT':
			return Object.assign({}, state, {
				isFetching: true,
			});
		case 'RECEIVE_MOVIES' :
			console.log(action)
			return {
				movies: action.movies.Search,
				isFetching: false
				}
		case 'RECEIVE_SINGLE_MOVIE' :;
			return {
				movies: action.singleMovie,
				isFetching: false
			};
		default:
			return state;
		}
}



export default movies