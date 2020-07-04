import { h, Component } from "preact";
import { Router } from "preact-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setRuntimeVariable } from "~/actions";
import history from "~/core/history";
import { isType } from "~/core/helpers";
import runtime from "~/core/runtime";

export interface PropsHome {
  path: string;
}

export interface PropsResult {
  path: string;
  style: {
    [key: string]: any;
  };
}

const Home = ({ path }: PropsHome) => <div>home</div>;

const Result = ({ path }: PropsResult) => <div>result</div>;

export interface Props extends runtime {}

export interface State {}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.props.chick;
  }
  async componentDidMount() {
    await this.props.setStore({
		test:123
	});
    console.log(this.props.test);
  }
  render() {
    return (
      <Router history={history}>
        <Result style={{ width: 100 }} path="/result" />
        <Home path="/" />
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
