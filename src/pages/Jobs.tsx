import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BsFillArrowDownRightCircleFill } from "react-icons/bs";

import jobs from "../data/jobs.json";

function SetOfJobs({ name, desc }: { name: string; desc: string }): ReactNode {
	const [collapsed, setCollapsed] = useState(false);
	const iconSize =
		window.innerWidth >= 280 && window.innerWidth <= 640 ? 40 : 90;

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	const variants = {
		collapsed: { height: 0, opacity: 0 },
		expanded: { height: "auto", opacity: 1 },
	};

	return (
		<motion.div
			className='flex flex-col gap-4 w-full'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			<button
				className='font-head text-semi border-b border-[#212121] pb-4 flex gap-4 items-center justify-between font-bold hover:text-[#aa4f45] duration-150 xxxs:text-xl md:text-6xl'
				onClick={toggleCollapse}>
				{name}
				<motion.div
					className='rotate-icon'
					onClick={toggleCollapse}
					initial={false}
					animate={{ rotate: collapsed ? 0 : 90 }}
					transition={{ duration: 0.3 }}>
					<BsFillArrowDownRightCircleFill
						size={iconSize}
						className='border-2 border-black rounded-full'
					/>
				</motion.div>
			</button>
			<AnimatePresence>
				{!collapsed && (
					<motion.div
						key='content'
						initial='collapsed'
						animate='expanded'
						exit='collapsed'
						variants={variants}
						transition={{ duration: 0.3 }}>
						<p className='font-text xxxs:text-md md:text-xl'>{desc}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

function Jobs() {
	return (
		<div className='bg-main w-full pb-36 xl:p-24 2xl:px-40'>
			<div className='flex flex-col gap-4 w-full mb-10 container'>
				<h1 className='font-span text-black mt-4 font-extrabold xxxs:text-2xl w-11/12 lg:text-4xl w-9/12 xl:text-6xl 2xl:text-7xl w-5/12'>
					Work Experience
				</h1>
			</div>
			<div className='flex flex-col gap-8 container'>
				{jobs.map((job, idx) => {
					return (
						<SetOfJobs
							key={idx}
							name={job.name}
							desc={job.desc}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Jobs;
