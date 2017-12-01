import { h, Component } from 'preact';
import less from './less';
import scss from './scss';
import css from './css';

export default class Home extends Component {
	render() {
		return (
			<div class={less.home}>
				<h1 className={scss.title}>Home</h1>
				<p className={css.paragraph}>This is the Home component.
					<br /> Copyright &copy; By-Health Co Ltd. All rights reserved.
					<br /><br /> <a className={scss.link} href="/profile">profile</a>
				</p>
			</div>
		);
	}
}
