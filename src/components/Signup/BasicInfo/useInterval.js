import { useState, useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			console.log('실행');
			let id = setInterval(tick, delay);
			return () => {
				console.log(id);
				clearInterval(id);
			};
		}
	}, [delay]);
};

export default useInterval;
