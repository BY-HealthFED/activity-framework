import { h } from 'preact';
import { useState } from 'preact/hooks';
import s from './style.scss';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import logo from './logo.svg';

export default function Home({redux}) {
	const [isReloading, setIsReloading] = useState(true);

	function handleCount() {
		setIsReloading(false);
		setTimeout(() => {
			setIsReloading(true);
		});
	}

	function renderTime(value) {
		return (
			<div>
				<div className={s.logo}><img src={logo} /></div>
				<div className={s.count}>{value}s</div>
				<div className={s.suffix}>后重置</div>
			</div>
		);
	}
	
	return <div className={s.root}>
		<h3 className={s.redux}>{redux}</h3>
		<h3 className={s.hooks}>Preact use hooks</h3>
		{isReloading && <CountdownCircleTimer
			isPlaying
			durationSeconds={20}
			colors={[
				['#6fba2b', .33],
				['#F7B801', .33],
				['#FF0000']
			]}
			size={300}
			strokeWidth={8}
			onComplete={handleCount}
			renderTime={renderTime}
		/>}
	</div>;
}
