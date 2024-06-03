import { FC } from "react";
import certificates from "../data/certificates.json";
import Marquee from "react-fast-marquee";
import { PiMedalFill } from "react-icons/pi";
import { motion } from "framer-motion";

export const Certificates: FC = () => {
	return (
		<div className='w-full h-full py-36 bg-main'>
			<div className='relative'>
				<h1 className='container font-bold font-sub text-2xl md:text-4xl'>
					Certificates
				</h1>
				<div className='mt-10'>
					<Marquee
						speed={60}
						direction='right'
						className='flex'>
						{certificates.map((cert, idx) => (
							<div
								className='flex bg-[#cb594c] border border-zinc-200 rounded-md shadow-md mr-3'
								key={idx}>
								<div className='w-64 h-64 flex flex-col items-center justify-center text-center p-6'>
									<motion.div
										animate={{ y: [0, 4, 0] }}
										transition={{ duration: 1, repeat: Infinity }}>
										<PiMedalFill
											size={40}
											className='mb-3 text-[#6d2a22]'
										/>
									</motion.div>
									<h1 className='font-bold font-sub text-2xl leading-none text-white'>
										{cert.title}
									</h1>

									<p className='bg-[#c25144] py-2 rounded-full px-4 text-white mt-4 font-text text-sm md:text-xs'>
										{cert.host}
									</p>
								</div>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	);
};
