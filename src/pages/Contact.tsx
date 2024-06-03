import { FC } from "react";
import logo from "../assets/logo.svg";

export const Contact: FC = () => {
	return (
		<div
			className='bg-black w-full h-screen flex flex-col justify-center'
			id='contact'>
			<div className='container xxxs:py-10 lg:py-24'>
				<div className='flex justify-center items-center'>
					<h1 className='font-sub text-main font-bold xxxs:text-lg md:text-2xl lg:text-[40px]'>
						GET IN
					</h1>
					<img
						src={logo}
						className='md:w-24 h-auto'
					/>
					<h1 className='font-sub text-main font-bold xxxs:text-lg md:text-2xl lg:text-[40px]'>
						TOUCH
					</h1>
				</div>
				<h1 className='customHover font-email text-white text-center py-24 border-y border-zinc-500 mt-10 xxxs:text-2xl lg:text-[90px]'>
					email@francistinao.tech
				</h1>
				<p className='text-center mt-4 font-text font-light text-white'>
					© FRANCIS TIN-AO{" "}
					<span>All rights reserved {new Date().getFullYear()}</span>
				</p>
			</div>
		</div>
	);
};
