import { FC } from "react";
import { motion } from "framer-motion";

type AchievementProps = {
	idx: number;
	title: string;
	desc: string;
	activeIndex: number;
};

export const AchievementCard: FC<AchievementProps> = ({
	idx,
	title,
	desc,
	activeIndex,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.2 }}
			whileInView={{
				opacity: 1,
				scale: 1.05,
				transition: { duration: 0.2 },
			}}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.2 },
			}}
			style={{
				height: "350px",
				backgroundColor: activeIndex === idx ? "#000" : "",
			}}
			className={`bg-[#c9c7b8] p-4 rounded-md flex flex-col gap-2 ${
				activeIndex === idx ? "text-white" : "bg-[#c4c2b3] text-black"
			} hover:bg-secondary hover:text-black duration-150 hover:shadow-2xl hover:border-2 border-zinc-400`}>
			<h1 className='font-head text-6xl'>{idx + 1}</h1>
			<div className='mt-3'>
				<h1 className='font-head text-2xl'>{title}</h1>
				<p
					className={`font-text text-sm ${
						desc.length > 60 ? "mt-2" : "mt-2"
					} lg:text-xs`}>
					{desc}
				</p>
			</div>
		</motion.div>
	);
};
