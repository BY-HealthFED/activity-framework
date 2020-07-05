import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRuntimeVariable } from '~/actions';

import history from '~/core/history';

const Home = () => <div>home</div>;
const Result = () => <div>result</div>;

class App extends Component {
	render() {
		return (
			<Router history={history} onChange={this.onChange}>
				<Result path="/result" />
				<Home path="/"  />
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return state || {};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setStore: setRuntimeVariable }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
