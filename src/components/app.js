import { h, Component } from 'preact';
import { Router } from 'preact-router';
import history from '~/core/history';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRuntimeVariable } from '~/actions';
import Loadable from "react-loadable";

import Home from '~/routes/home';
import List from '~/routes/list';

// Code-splitting
const View = Loadable({
	loader: () => import(/* webpackChunkName: "Home" */ '~/routes/view'),
	loading(){
		return <div>Loading...</div>;
	}
});

class App extends Component {
	componentDidMount() {
		this.props.setStore({
			redux: 'from redux RUNTIME'
		});
	}

	handleMenu = path => () => {
		history.push(path);
	}

	handleCount = () => {
		this.props.setStore({
			count: this.props.count + 1
		});
	}
	
	render() {
		return (
			<div id="app">
				<div style="padding:1rem; text-align:center">
					<nav>
						<a onClick={this.handleMenu('/')}>Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;
						<a onClick={this.handleMenu('/list')}>List</a>&nbsp;&nbsp;|&nbsp;&nbsp;
						<a onClick={this.handleMenu('/view')}>View</a>
					</nav>
				</div>
				<div style="padding:1rem; text-align:center" onClick={this.handleCount}>handleRedux</div>
				<Router history={history} onChange={this.handleRoute}>
					<Home path="/" redux={`this.props.redux ${this.props.count}`} />
					<List path="/list" />
					<View path="/view" />
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state || {};
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ setStore: setRuntimeVariable }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
