import { useState, useEffect } from "react";

export const useCounter = (target: number, delay: number) => {
	const [counter, setCounter] = useState(0);
	//eslint-disable-next-line
	//@ts-ignore
	type NewType = NodeJS.Timeout;

	let timeoutId: NewType;

	useEffect(() => {
		let count = 0;
		const increment = 75;

		const updateCount = () => {
			if (count < target) {
				const rem = Math.ceil((target - count) / increment);
				count += rem;
				setCounter(count);
				// eslint-disable-next-line react-hooks/exhaustive-deps
				timeoutId = setTimeout(updateCount, delay);
			}
		};

		updateCount();
		return () => clearTimeout(timeoutId);
	}, [target, delay]);

	return counter;
};
