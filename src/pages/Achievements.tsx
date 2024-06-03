import { FC, useState, useEffect } from "react";
import { AchievementCard } from "../components/AchievementCard";

type Achievements = {
	title: string;
	desc: string;
};

export const Achievements: FC = () => {
	const dots = [".", ".", ".", "."];
	const [index, setIndex] = useState<number>(0);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const ach: Array<Achievements> = [
		{
			title: "3rd Placer Galileo Hackathon",
			desc:
				"Unexpectedly won with our solution - I AM SAFE: A IoT arduino-based device that detects an immediate flood and send signals of information to locals.",
		},
		{
			title: "DICT Diagnostic Exam Passer",
			desc:
				"Took the test for experience purposes only but unexpectedly passed the diagnostic exam.",
		},
		{
			title: "1st Place Regional Startup Competition",
			desc:
				"My team got into the Philippine Startup Challenge 7 Regional Level and surprisingly, we took the 1st runner up crown.",
		},
		{
			title: "College-wide T-shirt Design Contest 1st runner up",
			desc:
				"My entry served as the representative of our college and won 1st runner up.",
		},
		{
			title: "Hack4Health 2024 3rd Placer",
			desc:
				"Our solution titled STELLA.ai made into the Hack4Health 2024 Hackathon held at DAP Center, Tagaytay, Philippines and won 3rd place.",
		},
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % dots.length);
			setActiveIndex((prevIndex) => (prevIndex + 1) % ach.length);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [dots]);

	return (
		<div className='bg-main w-full xxxs:h-[2140px] md:h-[1490px] lg:h-[550px] xl:p-24 2xl:px-40'>
			<div className='container'>
				<h1 className='text-center font-sub text-5xl'>
					What I've achieved so far
					{dots.map((dot, i) => (
						<span
							key={i}
							style={{
								opacity: index === i ? 1 : 0.2,
								transition: "opacity 0.5s ease-in-out",
							}}>
							{dot}
						</span>
					))}
				</h1>
				<div className='row mt-16 xxxs:gap-8 md:gap-0'>
					{ach.map((item, idx) => {
						return (
							<div
								key={idx}
								className='col-lg md:col-lg-6 lg:col-span-1'>
								<AchievementCard
									key={idx}
									idx={idx}
									activeIndex={activeIndex}
									title={item.title}
									desc={item.desc}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
