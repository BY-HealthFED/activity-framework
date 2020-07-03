export interface interfaceState {
	path: string;
	style: {
	  [key: string]: any;
	};
}


const defaultState = {
};
const reducer = (state: interfaceState, action) => {
	switch (action.type) {
		case 'SET_RUNTIME_VARIABLE':
			return { ...defaultState, ...state, ...action.payload };
		default:
			return state;
	}
};

export default reducer;