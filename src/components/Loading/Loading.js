/* eslint-disable no-unused-vars */
import preact, { h, Component } from 'preact';
import ReactDOM from 'react-dom';
import MaskSpin from '~/components/Loading/MaskSpin';

class Loading {
	constructor(component) {
		this.component = component;
		this.container = null;
		this.counter = 0;
		this.spinBgColor="rgba(0, 0, 0, 0.6)";
		this.spinColor="orange";
		this.spinHeight="0.2rem";
		this.spinWidth="0.2rem";
	}

	show = () => {
		this.counter++;

		if (this.counter === 1) {
			this.create();
		}
	}

	hide = () => {
		this.counter = this.counter < 0 ? 0 : this.counter - 1;

		if (this.counter === 0) {
			this.destory();
		}
	}

	reset = () => {
		this.destory();
		this.counter = 0;
	}

	create = () => {
		if (!this.container) {
			this.container = document.createElement('div');
			document.body.appendChild(this.container);

			ReactDOM.render(h(
				this.component,
				{
					show: true,
					fixed: true,
					spinBgColor: this.spinBgColor,
					spinColor: this.spinColor,
					spinHeight: this.spinHeight,
					spinWidth: this.spinWidth
				}
			), this.container);
		}
	}

	destory = () => {
		if (this.container) {
			ReactDOM.unmountComponentAtNode(this.container);
			document.body.removeChild(this.container);

			this.container = null;
		}
	}
}

export default new Loading(MaskSpin);