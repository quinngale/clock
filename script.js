let clock = document.querySelector('object');

clock.addEventListener('load', e => {
	function tick() {
		let now = new Date();

		const hours = now.getHours();
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();

		const hourRotation = (hours * 30) + ((seconds + minutes * 60) / 3600) * 30;
		const minuteRotation = minutes * 6 + seconds / 10;
		const secondRotation = seconds * 6;

		hourHand.style.transform = `rotate(${hourRotation}deg)`;
		minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
		secondHand.style.transform = `rotate(${secondRotation}deg)`;

		requestAnimationFrame(tick);
	}

	const clockDocument = clock.contentDocument;
	const secondHand = clockDocument.querySelector('#second-hand');
	const minuteHand = clockDocument.querySelector('#minute-hand');
	const hourHand = clockDocument.querySelector('#hour-hand');
	secondHand.style.transformOrigin = '175px 175px';
	minuteHand.style.transformOrigin = '175px 175px';
	hourHand.style.transformOrigin = '175px 175px';
	tick();
}, false);