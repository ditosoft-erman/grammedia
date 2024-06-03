import { FC } from "react";
import stack from "../assets/stack.png";
import ScrollAnimation from "react-animate-on-scroll";

const Stack: FC = () => {
	return (
		<div className='w-full h-screen bg-main'>
			<div className='w-full container'>
				<div className='w-full xxxs:flex flex-col gap-4 md:grid grid-cols-2 items-center'>
					<ScrollAnimation
						animateIn='flipYOut'
						delay={15}>
						<div className='flex flex-col gap-10 xl:pl-24 2xl:pl-40'>
							<h1 className='font-bold font-head text-semi xxxs:text-xl xs:text-4xl lg:text-5xl'>
								Skill equipped with{" "}
								<span className=' bg-clip-text text-transparent bg-gradient-to-tr from-zinc-900 to-zinc-500'>
									modern technologies
								</span>
								.
							</h1>
							<p className='font-text xxxs:w-full xl:text-xl w-10/12'>
								I have used various technologies and programming languages that are
								present in most of my full-stack projects. It’s through these
								experiences that I continue to refine my abilities, eager to embrace new
								advancements and stay ahead of the curve of technology.
							</p>
						</div>
					</ScrollAnimation>
					<div className='mx-auto'>
						<img
							src={stack}
							alt='Stack'
							className='pointer-events-none'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stack;
