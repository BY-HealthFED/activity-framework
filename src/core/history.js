// public hash history
import createHashHistory from 'history/createHashHistory';
let history;
if (typeof document !== 'undefined') {
	history = createHashHistory();
}
export default history;

