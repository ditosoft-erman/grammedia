import { FC, useState, useEffect } from "react";

import test from "../data/test.json";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import  "../pages/about.css"

export const Testimony: FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setIsOnPage] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const testimonyElement = document.getElementById("testimony");
			if (testimonyElement) {
				const rect = testimonyElement.getBoundingClientRect();
				setIsOnPage(rect.top <= window.innerHeight && rect.bottom >= 0);
			}
		};

		window.addEventListener("scroll", handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className='w-full h-full bg-black'
			id='testimony'>
			<div className='container'>
				<h1 className='gradient-text font-bold p-10 font-sub xxxs:text-2xl md:text-7xl text-center'>
					Testimonials
				</h1>
			
				<div className='xxxs:mt-14 p-0 md:mt-40 px-10'>
					<div className='flex flex-col gap-40'>
						{test.map((testimony, idx) => (
							<ParallaxProvider key={idx}>
								<Parallax
									speed={1}
									translateY={["0px", "-1000px"]}>
									<div
										id='testimony'
										className='flex flex-col gap-4 py-24 border-t-2 border- lg:px-36'>
										<div className='flex gap-10'>
											<h1 className='xxxs:text-white text-[100px] font-span'>
												"
											</h1>
											<div className='flex flex-col mt-4'>
												<h1
													className={` text-white font-sub text-justify font-bold xxxs:text-lg tracking-tighter md:text-3xl lg:text-6xl
													} hover:text-secondary `}>
													{testimony.test}
												</h1>
												
											</div>
											<h1 className='xxxs:text-white font-bold text-[100px] font-span'>
												"
											</h1>
										</div>
									</div>
								</Parallax>
							</ParallaxProvider>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
