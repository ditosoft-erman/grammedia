import { FC } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowUpRight } from "react-icons/fi";

import cafefy from "../assets/projects/cafefy.webp";
import pinpal from "../assets/projects/pinpals.webp";
import student from "../assets/projects/student.webp";
import ccislsg from "../assets/projects/ccislsg.webp";
import navig from "../assets/projects/navig.webp";
import studefy from "../assets/projects/studefy.webp";
import garufoods from "../assets/projects/garufoods.png";
import istorya from "../assets/projects/istorya.png";

export const Projects: FC = () => {
	return (
		<div
			className='bg-black w-full'
			id='projects'>
			<div className='container'>
				<div className='row items-center'>
					<ScrollAnimation
						animateIn='fadeIn'
						delay={50}
						className='col-md col-md-6 xxxs:px-4 py-10 md:p-20 2xl:pl-36'>
						<h1 className='text-white font-bold font-sub xxxs:text-2xl md:text-4xl'>
							Take a look at some of the projects I made so far
						</h1>
						<p className='font-text text-zinc-500 mt-4'>
							{" "}
							These projects are full-stack web applications that I made for
						</p>
					</ScrollAnimation>
				</div>
				{/* First row */}
				<div className='xxxs:flex flex-col xl:px-16 2xl:px-36'>
					<div className='row '>
						{/* Start of cafefy */}
						<div className='col-md col-md-5 relative group'>
							<div
								className='bg-[#915032] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={cafefy}
									alt='cafefy'
									className='w-full h-full shadow-2xl transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-[3px] -mt-12 font-head'>Cafefy</h2>
								<p className='font-text xxxs:text-[9px] px-8 md:text-sm'>
									A platform to promote local cafes in Butuan City
								</p>
								<a
									href='https://cafefy.francistinao.tech/'
									target='_blank'
									className='bg-black flex items-center gap-2 px-3 py-2 rounded-md text-white font-text xxxs:text-[10px] hover:no-underline'>
									View Site
									<FiArrowUpRight />
								</a>
							</div>
						</div>
						{/* End of Cafefy */}
						{/* Start of Pinpal */}
						<div className='col-md col-md-7 relative group xxxs:-mt-12 md:m-0'>
							<div
								className='bg-[#6cb1ff] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={pinpal}
									alt='pinpal'
									className='w-full shadow-2xl h-75% transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-[3px] -mt-12 font-head'>Pinpal</h2>
								<p className='font-text text-center xxxs:text-[9px] px-8 md:text-sm'>
									A web application aimed at helping users keep their browser tabs
									organized and easily accessible.
								</p>
								<a
									href='https://pinpals.vercel.app/'
									target='_blank'
									className='bg-black flex items-center gap-2 px-3 py-2 rounded-md text-white font-text xxxs:text-[10px] hover:no-underline'>
									View Site
									<FiArrowUpRight />
								</a>
							</div>
						</div>
						{/* End of Pinpal */}
					</div>
					{/* End of first row */}
					{/* Second row */}
					<div className='row xxxs:-mt-12 md:-mt-[45px] lg:-mt-[80px] xl:-mt-[100px]'>
						{/* Student anon */}
						<div className='col col-span-7 relative group'>
							<div
								className='bg-[#eaa0ff] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={student}
									alt='student anon'
									className='w-full h-75% transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-[3px] -mt-12 font-head'>
									Student Anon
								</h2>
								<p className='font-text text-center xxxs:text-[9px] px-8 md:text-sm'>
									An exclusive website wherein you can communicate with students
									anonymously and vent about your problems.
								</p>
								<a
									href='https://student-anon.vercel.app/'
									target='_blank'
									className='bg-black flex items-center gap-2 px-3 py-2 rounded-md text-white font-text xxxs:text-[10px] hover:no-underline'>
									View Site
									<FiArrowUpRight />
								</a>
							</div>
						</div>
						{/* End of student anon */}
						{/* CCISLSG */}
						<div className='col-md col-md-5 relative group xxxs:-mt-12 md:m-0'>
							<div
								className='bg-[#ffb896] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={ccislsg}
									alt='ccislsg'
									className='w-full h-full transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-[3px] -mt-12 font-head'>
									CCISLSG Suggestion Board
								</h2>
								<p className='font-text text-center xxxs:text-[9px] px-8 md:text-sm'>
									A website for students to provide necessary suggestions for the
									betterment of the college.
								</p>
								<a
									href='https://suggestion-board.ccislsg.com/'
									target='_blank'
									className='bg-black flex items-center gap-2 px-3 py-2 rounded-md text-white font-text xxxs:text-[10px] hover:no-underline'>
									View Site
									<FiArrowUpRight />
								</a>
							</div>
						</div>
						{/* End of CCISLSG */}
					</div>
					{/* End of 2nd row */}
					{/* Start of 3rd row */}
					<div className='row xxxs:-mt-12 md:-mt-[45px] lg:-mt-[80px] xl:-mt-[100px]'>
						{/* Student anon */}
						<div className='col col-span-5 relative group'>
							<div
								className='bg-zinc-400 w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={navig}
									alt='NavigRater'
									className='w-full h-75% transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-[3px] -mt-12 font-head'>
									NavigRater
								</h2>
								<p className='font-text text-center xxxs:text-[10px] px-8 md:text-sm'>
									a commissioned project aimed to rate a specific location that's being
									pinned by the user on the map.
								</p>
								<a
									href='https://student-anon.vercel.app/'
									target='_blank'
									className='bg-black flex items-center gap-2 px-3 py-2 rounded-md text-white font-text xxxs:text-[10px] hover:no-underline'>
									View Site
									<FiArrowUpRight />
								</a>
							</div>
						</div>
						{/* End of NavigRater */}
						{/* CCISLSG */}
						<div className='col-md col-md-7 relative group xxxs:-mt-12 md:m-0'>
							<div
								className='bg-[#8ca9ae] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={studefy}
									alt='studefy'
									className='w-full h-full transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-[3px] -mt-12 font-head'>Studefy</h2>
								<p className='font-text text-center xxxs:text-[9px] px-8 md:text-sm'>
									A web-based application, developed as our final project in IT106. It
									leverages XML and DOM Parser in conjunction with Java Remote Method
									Invocation.
								</p>
							</div>
						</div>
						{/* End of CCISLSG */}
					</div>
					{/* Start of fourth row */}
					<div className='row xxxs:-mt-12 md:-mt-[45px] lg:-mt-[80px] xl:-mt-[100px]'>
						{/* GaruFoods */}
						<div className='col col-span-7 relative group'>
							<div
								className='bg-[#a0fff5] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={garufoods}
									alt='GaruFoods'
									className='w-full h-75% transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-[3px] -mt-12 font-head'>
									GaruFoods
								</h2>
								<p className='font-text text-center xxxs:text-[9px] px-8 md:text-sm'>
									It is where you can browse and share different recipes of unique
									cuisines from different countries
								</p>
								<a
									href='https://garufoods.vercel.app/'
									target='_blank'
									className='bg-black flex items-center gap-2 px-3 py-2 rounded-md text-white font-text xxxs:text-[10px] hover:no-underline'>
									View Site
									<FiArrowUpRight />
								</a>
							</div>
						</div>
						{/* End of GaruFoods */}
						{/* Istorya */}
						<div className='col-md col-md-5 relative group xxxs:-mt-12 md:m-0'>
							<div
								className='bg-[#E400FF] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={istorya}
									alt='Istorya'
									className='w-full h-full transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-[3px] -mt-12 font-head'>
									istorya.
								</h2>
								<p className='font-text text-center xxxs:text-[9px] px-8 md:text-sm'>
									Puhonan sa katawa ug walay undangay nga chika diri sa istorya.
								</p>
								<a
									href='https://istorya.vercel.app/'
									target='_blank'
									className='bg-black flex items-center gap-2 px-3 py-2 rounded-md text-white font-text xxxs:text-[10px] hover:no-underline'>
									View Site
									<FiArrowUpRight />
								</a>
							</div>
						</div>
						{/* End of CCISLSG */}
					</div>
				</div>
			</div>
		</div>
	);
};
