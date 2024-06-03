import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import ReactCardCarousel from "react-card-carousel";
import songs from "../data/songs.json";
import { SongCard } from "../components/SongCard";

class FaveSongs extends React.Component {
	render() {
		return (
			<div className='w-full bg-main pb-36'>
				<div className='container'>
					<h1 className='font-sub text-black text-center font-bold xxxs:text-2xl md:text-7xl py-4'>
						<span className='text-semi font-email'>Music</span> is a form of art we
						can enjoy.
					</h1>
					<p className='font-text text-center text-lg'>
						With this, I want to share to you few my favorite songs to play while
						coding
					</p>
					<div className='relative w-full h-screen flex justify-center items-center'>
						<ReactCardCarousel
							autoplay={true}
							autoplay_speed={4000}>
							{songs?.map((song, idx) => {
								return (
									<SongCard
										key={idx}
										cover={song.cover}
										title={song.title}
										author={song.author}
										spotify={song.spotify}
									/>
								);
							})}
						</ReactCardCarousel>
					</div>
				</div>
			</div>
		);
	}
}

export default FaveSongs;
