const redux = require('redux')

const initialState = {
	counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
	if (action.type === 'ADD') {
		return {
			counter: state.counter + 1
		}
	}

	return state
}

// Store
const store = redux.createStore(reducer)
console.log(store.getState())

// Actions
const addCounter = {
	type: 'ADD'
}
