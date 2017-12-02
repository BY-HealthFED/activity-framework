import { h, Component } from 'preact';
import Loading from '~/components/Loading';
import { apiTest } from '~/servicer/index.js';
import less from './less';
import scss from './scss';
import css from './css';
export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			provinces: []
		};
	}

	componentWillMount() {
		Loading.show();
		apiTest().then((res) => {
			Loading.hide();
			this.setState({
				provinces: res || []
			});
		}).catch((error) => {
			Loading.hide();
			console.log(error);
		});
	}

	render() {
		return (
			<div class={less.home}>
				<h1 className={scss.title}>Home</h1>
				<p className={css.paragraph}>This is the Home component.
					<br /> Copyright &copy; By-Health Co Ltd. All rights reserved.
					<br /><br /> <a className={scss.link} href="/profile">profile</a>
				</p>
				<div className="mgt2 formBox">
					<div> Development environment agent API to local </div>
					<div className="clearfix pdt2">
						{/* Development environment agent API to local */}
						<div className="fl pdt-5">
							API-test：
						</div>
						<div className="fl">
							<select>
								{
									this.state.provinces.map((item) => {
										return <option className="bg-green">{item.provinceName}</option>;
									})
								}
							</select>
						</div>
					</div>

				</div>
			</div>
		);
	}
}
