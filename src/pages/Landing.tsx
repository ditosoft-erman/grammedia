// import { FC, useState, useEffect } from "react";
// //eslint-disable-next-line
// import logo from "../assets/logo.webp";
// import pic from "../assets/land_pic.webp";
// import { stack as Menu } from "react-burger-menu";
// import { RiMenu3Fill } from "react-icons/ri";
// import menu from "../data/menu.json";
// import { motion, useAnimation } from "framer-motion";
// //eslint-disable-next-line
// //@ts-ignore
// import { useGlitch } from "react-powerglitch";
// import { Link } from "react-scroll";
// import { HiArrowSmDown } from "react-icons/hi";
// import { useCounter } from "../../hooks/useCounter.ts";
// import { Tooltip } from "@chakra-ui/react";
// import image from "../assets/image.webp";
// import { HiCodeBracketSquare, HiMiniRocketLaunch } from "react-icons/hi2";

// export const Landing: FC = () => {
// 	const numberOfProjects = useCounter(21, 70);
// 	const monthsOfExperience = useCounter(7, 400);
// 	const glitch = useGlitch();
// 	const controls = useAnimation();
// 	const [hovered, setHovered] = useState<boolean>(false);
// 	const [direction, setDirection] = useState<number>(1);

// 	useEffect(() => {
// 		controls.start({
// 			rotate: [null, 480 * direction],
// 			transition: {
// 				duration: 3,
// 				repeat: Infinity,
// 				ease: "linear",
// 			},
// 		});

// 		setTimeout(() => {
// 			setDirection(-1 * direction);
// 		}, 3000);
// 	}, [direction, controls]);

// 	return (
// 		<div
// 			className='bg-black w-full xxxs:pb-16 md:pb-0 2xl:px-40'
// 			id='home'>
// 			<div className='container'>
// 				<div className='navbar navbar-expand-md p-4'>
// 					{/* Logo */}
// 					<div className='w-full'>
// 						<motion.div
// 							initial={{ y: -1000, opacity: 0 }}
// 							animate={{ y: 0, opacity: 1 }}
// 							transition={{ duration: 0.99999 }}
// 							className='flex justify-between w-full md:justify-center'>
// 							<h1 className='flex items-center font-bold font-span'>
// 								FR
// 								<motion.img
// 									whileHover={{
// 										transition: { duration: 2.01, repeat: Infinity, ease: "linear" },
// 										rotate: [null, 360 * direction],
// 									}}
// 									src={logo}
// 									className='w-4 h-4'
// 								/>
// 								NCIS
// 							</h1>
// 						</motion.div>
// 					</div>
// 					{/* Menu for mobile*/}
// 					<div className='xxxs:block md:hidden'>
// 						<Menu
// 							right
// 							customBurgerIcon={<RiMenu3Fill size={40} />}>
// 							{menu.map((item, idx) => {
// 								return (
// 									<Link
// 										onClick={() =>
// 											document.getElementById("react-burger-cross-btn")?.click()
// 										}
// 										key={idx}
// 										to={item.link}
// 										spy={true}
// 										smooth={true}
// 										offset={-70}
// 										className='menu-item font-sub'>
// 										{item.label}
// 									</Link>
// 								);
// 							})}
// 						</Menu>
// 					</div>
// 				</div>
// 				{/* Content */}
// 				<div className='container h-screen'>
// 					<div className='row'>
// 						<div className='pt-20'>
// 							<motion.div
// 								animate={{ y: [0, 40, 0] }}
// 								transition={{ duration: 4, repeat: Infinity }}
// 								className='grid place-items-center'>
// 								<motion.img
// 									initial={{ opacity: 0, scale: 0.5 }}
// 									animate={{ opacity: 1, scale: 1 }}
// 									transition={{
// 										duration: 0.8,
// 										delay: 0.4,
// 										ease: [0, 0.71, 0.2, 1.01],
// 									}}
// 									src={pic}
// 									alt='Creative picture'
// 									className='absolute z-20 h-44 xxxs:mt-52 md:mt-36 xl:h-96 xl:mt-80'
// 								/>
// 							</motion.div>
// 							<motion.div
// 								initial={{
// 									opacity: 0,
// 									y: 100,
// 								}}
// 								animate={{
// 									opacity: 1,
// 									y: 0,
// 								}}
// 								transition={{
// 									duration: 1,
// 								}}
// 								className='xxxs:px-0 lg:px-36'>
// 								<h1 className='font-title bg-gradient-to-tr from-black to-zinc-100 bg-clip-text tracking-tighter font-bold text-center xxxs:text-5xl md:text-6xl xl:text-[120px]'>
// 									GEEK POWERED CREATIVITY IN
// 									<span
// 										onMouseEnter={() => setHovered(true)}
// 										onMouseLeave={() => setHovered(false)}
// 										ref={glitch.ref}
// 										className={`text-[#cb594c] font-span ml-4 hover:cursor-crosshair ${
// 											hovered && "pulse"
// 										}`}>
// 										{" "}
// 										ACTION
// 									</span>
// 								</h1>
// 							</motion.div>
// 							{hovered && (
// 								<div className='xxxs:hidden xl:block'>
// 									<h1
// 										className={`absolute flex items-center gap-2 rounded-md font-span bg-[#cb594c] py-2 w-32 pl-3 text-white -rotate-12 duration-200 shadow-2xl left-[520px] top-[360px] ${
// 											hovered ? "hovered" : "unhovered"
// 										}`}>
// 										<HiCodeBracketSquare />
// 										Developer
// 									</h1>
// 								</div>
// 							)}
// 							{hovered && (
// 								<div className='xxxs:hidden xl:block 3xl:hidden'>
// 									<h1
// 										className={`absolute flex items-center gap-2 right-[520px] top-[510px] rounded-md font-span bg-black py-2 w-[217px] pl-3 text-white rotate-3 duration-200 shadow-2xl ${
// 											hovered ? "hovered" : "unhovered"
// 										}`}>
// 										<HiMiniRocketLaunch />
// 										Startup Enthusiast
// 									</h1>
// 								</div>
// 							)}
// 						</div>
// 					</div>
// 					<div className='row gap-20 font-sub xxxs:mt-24 md:mt-28 2xl:mt-36 3xl:mt-64'>
// 						{/* small desc */}
// 						<div className='xxxs:col col-lg-4 md:col md:col-lg-4'>
// 							<motion.p
// 								initial={{ x: -1000 }}
// 								animate={{ x: 0 }}
// 								transition={{ duration: 1.5 }}
// 								className='text-zinc-700'>
// 								A 3rd year Information Technology student driven by passion who loves
// 								creating innovative solution to eradicate pressing challenges.
// 							</motion.p>
// 						</div>
// 						{/* hover down */}
// 						<div className='col'>
// 							<div className='flex items-center'>
// 								<Tooltip
// 									label='Scroll down to know more about me'
// 									hasArrow
// 									className='text-white text-xs bg-black py-1 px-2 rounded-md font-sub'>
// 									<motion.div
// 										initial={{ opacity: 0, scale: 0.5 }}
// 										animate={{ opacity: 1, scale: 1 }}
// 										transition={{
// 											duration: 0.8,
// 											delay: 0.4,
// 											ease: [0, 0.71, 0.2, 1.01],
// 										}}
// 										className='bg-black rounded-full shadow-2xl border-2 border-[#cb594c] absolute z-10'>
// 										<motion.div
// 											animate={{ y: [0, 6, 0] }}
// 											transition={{ duration: 1.5, repeat: Infinity }}
// 											className='grid place-items-center cursor-pointer'>
// 											<Link
// 												to='about'
// 												spy={true}
// 												smooth={true}
// 												offset={-70}
// 												className='p-6'>
// 												<HiArrowSmDown
// 													size={25}
// 													className='text-semi'
// 												/>
// 											</Link>
// 										</motion.div>
// 									</motion.div>
// 								</Tooltip>
// 								<motion.img
// 									initial={{ opacity: 0, x: -1000 }}
// 									animate={{ opacity: 1, x: 0 }}
// 									src={image}
// 									alt='Image'
// 									className='xxxs:hidden md:block rounded-full h-16 relative left-10'
// 								/>
// 							</div>
// 						</div>
// 						<div className='xxxs:hidden md:block lg:flex gap-16 items-center'>
// 							<div className='flex items-center gap-16'>
// 								<Tooltip
// 									label='Including the projects way back first year college'
// 									hasArrow
// 									className='text-white text-xs bg-black py-1 px-2 rounded-md font-sub cursor-default'>
// 									<div className='flex flex-col items-center'>
// 										<h1 className='text-7xl font-bold'>{numberOfProjects}</h1>
// 										<span className='text-zinc-700 text-xs '>Projects made</span>
// 									</div>
// 								</Tooltip>
// 								<Tooltip
// 									label='as a Full-Stack Developer'
// 									hasArrow
// 									className='text-white text-xs bg-black py-1 px-2 rounded-md font-sub cursor-default'>
// 									<div className='flex flex-col items-center'>
// 										<h1 className='text-7xl font-bold'>{monthsOfExperience}</h1>
// 										<span className='text-zinc-700 text-xs '>Months of experience</span>
// 									</div>
// 								</Tooltip>
// 							</div>
// 						</div>
// 					</div>
// 					{/* Skills */}
// 				</div>
// 			</div>
// 		// </div>
// 	);
// };
