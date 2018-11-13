import {h, Component } from 'preact';


class List extends Component {

	constructor (props) {
		super(props);
		this.state = {
			test: 0
		};
	}

	componentDidMount () {
		this.myTest2();
	}
	
	myTest2 = async () => {
		const data = await this.myTest();
		this.setState({
			test: data + this.state.test
		});
		setTimeout(() => {
			console.log(2);
		}, 3000);
	}

	myTest = () => {
		this.setState({
			test: 1
		});
		return new Promise((res) => {
			setTimeout(() => {
				res(1);
			}, 3000);
		});
	}

	render() {
		return (
			<div>
				page List {this.state.test}
			</div>
		);
	}
}

export default List;
