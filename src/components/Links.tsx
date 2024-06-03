import { FC, ReactNode, useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import logo from "../assets/logo.svg";
import { motion, useAnimation } from "framer-motion";

type Props = {
	icon: ReactNode;
	link: string;
};

export const Links: FC = () => {
	const controls = useAnimation();
	const [direction, setDirection] = useState<number>(1);

	useEffect(() => {
		controls.start({
			rotate: [null, 480 * direction],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "linear",
			},
		});

		setTimeout(() => {
			setDirection(-1 * direction);
		}, 3000);
	}, [direction, controls]);

	const links: Array<Props> = [
		{
			icon: (
				<BsGithub
					className='text-black'
					size={25}
				/>
			),
			link: "https://github.com/qarudafxz",
		},
		{
			icon: (
				<BsLinkedin
					className='text-black'
					size={25}
				/>
			),
			link: "https://www.linkedin.com/in/francis-tin-ao-10050412a/",
		},
		{
			icon: (
				<BiLogoInstagramAlt
					className='text-black'
					size={25}
				/>
			),
			link: "https://instagram.com/francis.tinao",
		},
	];
	return (
		<div className='flex flex-col items-center gap-4 fixed bottom-16 z-20 left-[7px]'>
			<motion.img
				animate={{
					transition: { duration: 2.01, repeat: Infinity, ease: "linear" },
					rotate: [null, 360 * direction],
				}}
				src={logo}
				alt='Francis Tin-ao'
				className='w-6 h-6'
			/>
			<div className='w-[2px] h-56 bg-black'>.</div>
			{links.map((item, idx) => {
				return (
					<a
						key={idx}
						href={item.link}
						target='_blank'
						className='hover:bg-secondary p-2 duration-300 rounded-full'>
						{item.icon}
					</a>
				);
			})}
		</div>
	);
};
