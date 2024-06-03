import { FC } from "react";

type SongProps = {
	cover: string;
	title: string;
	author: string;
	spotify: string;
};

export const SongCard: FC<SongProps> = ({ cover, title, author, spotify }) => {
	return (
		<div
			className='pt-16 text-center bg-black p-4 text-white text-sm uppercase rounded-xl box-border shadow-2xl bg-cover xxxs:h-[220px] xxxs:w-[300px] md:h-[300px] md:w-[450px]'
			style={{
				backgroundImage: `url(${cover})`,
			}}>
			<h1 className='font-title text-xl'>{title}</h1>
			<h1 className='font-text'>{author}</h1>
			<iframe
				className='rounded-md my-4'
				src={spotify}
				width='100%'
				height='152'
				allow='autoplay *; encrypted-media *; fullscreen *'
				loading='lazy'
			/>
		</div>
	);
};
