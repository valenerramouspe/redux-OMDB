function users (state = [], action){
	switch(action.type){
		case 'ATTEMPT':
		console.log('ATTEMPT')
			return Object.assign({}, state, {
				isFetching: true,
			});

		case 'CREATE_USER':
		console.log('CREATE_USER')
			console.log(action)
			return {
				user: {
					username: action.user,
					},
				isFetching: false
				};

		case 'LOGIN_USER':
		console.log("LOGIN_USER")
		return Object.assign({}, state, {
				user: action.user,
				isFetching:false,
				isDenied:false
				});

		case 'VIEW_PRIVATE':
		return Object.assign({}, state, {
				user:{
					favorites:action.user.favorites
				},
				isDenied:false,
				isFetching:false
			})

		case 'NO_AUTORIZADO':
		console.log("no estas autorizado")
		return Object.assign({}, state, {
				isDenied: true,
				isDeniedMessage: "you shall not pass",
				isFetching: false
		})
		case 'ADD_FAVORITES':
		return Object.assign({}, state, {
			user:{
				favorites:action.favorites
			}
		})

		default:
			return state;
		}
}



export default users