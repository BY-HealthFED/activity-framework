import { h, render } from 'preact';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './style/common.scss';
import './core/setRem';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.onresize = () => {
	window.location.reload();
};
let root;
function init() {
	let App = require('./components/App').default;
	root = render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.body, root);
}

init();



