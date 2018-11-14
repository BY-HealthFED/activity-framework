import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './style/common.scss';
import './core/setRem';

const INITIAL = {};
const store = createStore( reducer, INITIAL, typeof window.devToolsExtension==='function' ? window.devToolsExtension() : undefined);

window.onresize = () => {
	window.location.reload();
};
let root;
function init() {
	let App = require('./components/app').default;
	root = render(<Provider store={store}>
		<App />
	</Provider>, document.body, root);
}

init();



