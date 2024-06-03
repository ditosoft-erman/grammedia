import { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
	const windowSize = useWindowSize();
	const isSmallMobile = useMediaQuery("(max-width: 375px)");
	const isMobile = useMediaQuery("(max-width: 767px)");
	const isTablet = useMediaQuery("(max-width: 1024px)");
	const isLargeLaptop = useMediaQuery("(max-width: 1440px)");
	const scrollingContainerRef = useRef<HTMLDivElement>(null);

	const data = {
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0,
	};

	useEffect(() => {
		setBodyHeight();
	}, [windowSize.height]);

	const setBodyHeight = () => {
		if (scrollingContainerRef.current) {
			document.body.style.height = `${
				scrollingContainerRef.current.getBoundingClientRect().height +
				(isSmallMobile
					? 1920
					: isMobile
					? 2100
					: isTablet
					? 1520
					: isLargeLaptop
					? 1940
					: 1900)
			}px`;
		}
	};

	useEffect(() => {
		requestAnimationFrame(() => smoothScrollingHandler());
	}, []);

	const smoothScrollingHandler = () => {
		data.current = window.scrollY;
		data.previous += (data.current - data.previous) * data.ease;
		data.rounded = Math.round(data.previous * 100) / 100;

		if (scrollingContainerRef.current) {
			scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
		}

		// Recursive call
		requestAnimationFrame(() => smoothScrollingHandler());
	};

	return (
		<div className='parent'>
			<div ref={scrollingContainerRef}>{children}</div>
		</div>
	);
};

export default SmoothScroll;
