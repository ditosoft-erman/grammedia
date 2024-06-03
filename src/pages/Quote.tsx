import { FC } from "react";
import pic from "../assets/shesh.svg";
import { motion } from "framer-motion";

export const Quote: FC = () => {
	return (
		<div className='bg-main w-full h-[1100px] grid place-content-center py-96'>
			<motion.img
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				src={pic}
				className='m-auto xxxs:w-36 h-auto lg:w-56'
			/>
			<motion.h1
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				className='font-head text-center text-semi font-bold xxxs:text-xl xxxs:px-10 xxxs:mt-20 md:text-5xl md:px-56 mt-10'>
				<span className='text-[80px] text-black font-span'>"</span>Technology is the
				silent revolution that reshapes our world, fueling progress, and shaping our
				future.
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				className='font-text text-center mt-14 font-semibold'>
				Francis Tin-ao
			</motion.p>
		</div>
	);
};
